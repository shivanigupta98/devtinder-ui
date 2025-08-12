import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import { useEffect } from "react";
import BASE_URL from "../utils/constants";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);
    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/request/received", { withCredentials: true });
            dispatch(addRequests(res.data.data));
            console.log(res.data.data);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchRequests();
    }, []);
    if (!requests)
        return;
    if (requests.length === 0) {
        return (
            <div className="my-10 flex justify-center">
                <ul className="list bg-base-300 rounded-box shadow-md w-2/3">
                    <li className="p-4 pb-2 text-xl text-black text-center opacity-60">No Requests Found!</li>
                </ul></div>
        )
    }
    return (
        <div className="my-10 flex justify-center">
            <ul className="list bg-base-300 rounded-box shadow-md w-2/3">
                <li className="p-4 pb-2 text-xl text-black text-center opacity-60">Your Requests</li>

                {requests.map((request) => {
                    const { _id, firstName, lastName, age, gender, about, photoUrl } = request.fromUserId;
                    return (
                        <div  key={_id}>
                            <li className="list-row">
                                <div>
                                    <img
                                        className="size-10 rounded-box"
                                        src={photoUrl || "https://img.daisyui.com/images/profile/demo/1@94.webp"}
                                        alt={`${firstName} ${lastName}`}
                                    />
                                </div>
                                <div>
                                    <div>{firstName} {lastName}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">
                                        <div>{about || "No details provided"}</div>
                                        {age && gender && <div>{age}, {gender}</div>}
                                    </div>
                                </div>
                                 <div className="flex justify-center gap-2">
                            <button className="btn btn-primary">Reject</button>
                            <button className="btn btn-secondary">Accept</button>
                            </div>
                            </li>
                           
                        </div>
                    );
                })}
            </ul>

        </div>
    );
};

export default Requests;