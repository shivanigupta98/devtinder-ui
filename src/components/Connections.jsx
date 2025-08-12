import axios from "axios";
import { useEffect } from "react";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);
    const getConnections = async () => {

        const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
        dispatch(addConnections(res.data.data));
    }
    useEffect(() => {
        getConnections();
    }, []);
    if (!connections)
        return;
    if (connections.length === 0) {
        return (
            <div className="my-10">
                <ul className="list bg-base-300 rounded-box shadow-md w-1/2">
                    <li className="p-4 pb-2 text-xl text-black opacity-60">No Connections Found!</li>
                </ul></div>
        )
    }
    return (
        <div className="my-10 flex justify-center">
            <ul className="list bg-base-300 rounded-box shadow-md w-1/2">
                <li className="p-4 pb-2 text-xl text-black opacity-60">Your Connections</li>

                {connections.map((connection, index) => {
                    const { firstName, lastName, age, gender, about, photoUrl } = connection;
                    return (
                        <li className="list-row" key={index}>
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
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Connections;