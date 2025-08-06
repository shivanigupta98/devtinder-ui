import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import BASE_URL from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("virat@gmail.com");
    const [password, setPassword] = useState("Virat@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login",
                { email, password },
                { withCredentials: true }
            );
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch (err) {
            console.log("Error: ", err.message);
        }
    }
    return (
        <div className="flex justify-center my-6">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email ID</legend>
                        <input type="text" className="input" value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="text" className="input" value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </fieldset>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;