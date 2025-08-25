import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import BASE_URL from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const [error,setError] = useState("");
    const[isLogin, setIsLogin]=useState(false);
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
            setError(err?.response?.data);
        }
    }
    const handleSignUp = async()=>{
        try
        {
            const res = await axios.post(BASE_URL+"/signup",{
            firstName,lastName,email,password
        },{
            withCredentials:true
        });
        dispatch(addUser(res.data));
            navigate("/profile");
        }
        catch(err){
            setError(err?.response?.data);
        }
    }
    return (
        <div className="flex justify-center my-6">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLogin?"Login":"Signup"}</h2>
                    {!isLogin &&<div><fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name</legend>
                        <input type="text" className="input" value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name</legend>
                        <input type="text" className="input" value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </fieldset></div>}
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
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={isLogin?handleLogin:handleSignUp}>{isLogin?"Login":"SignUp"}</button>
                    </div>
                    <p className="flex justify-center" onClick={()=>setIsLogin(value=>!value)}>{isLogin?"New User? Click here to signup":"Already an user? Login here"}</p>
                </div>
            </div>
        </div>
    )
}

export default Login;