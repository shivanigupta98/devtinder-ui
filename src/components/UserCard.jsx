import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/feedSlice";

const UserCard = ({ user }) => {
    const { _id, firstName, lastName, about, photoUrl, gender, age } = user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/sent/" + status + "/" + _id, {}, {
                withCredentials: true
            });
            dispatch(removeUser(_id));
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    {photoUrl && <img
                        src={photoUrl}
                        alt="photo" />}
                </figure>
                <div className="card-body gap-1">
                    <h2 className="card-title flex justify-center">{firstName + " "}{lastName} </h2>
                    <div className="flex flex-col items-center my-4">
                        <p className="flex justify-center">{about}</p>
                        {age && gender && <p className="flex justify-center">{age + ", " + gender}</p>}
                    </div>
                    <div className="card-actions justify-center my-4">
                        <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
                        <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard;