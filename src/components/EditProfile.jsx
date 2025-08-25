import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import BASE_URL from "../utils/constants";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age||"");
    const [gender, setGender] = useState(user.gender||"");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();


    const handleSaveProfile = async () => {
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                age,
                gender,
                photoUrl,
                about
            }, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);


        }
        catch (err) {
            console.log(err);
            setError(err?.response?.data);
        }
    }
    return (
        <div className="flex justify-center my-10  pb-20">
            <div>
                <div className="flex justify-center mx-10">
                    <div className="card bg-base-300 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Edit Profile</h2>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">FirstName</legend>
                                <input type="text" className="input" value={firstName}
                                    onChange={(e) => { setFirstName(e.target.value) }} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">LastName</legend>
                                <input type="text" className="input" value={lastName}
                                    onChange={(e) => { setLastName(e.target.value) }}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age</legend>
                                <input type="text" className="input" value={age}
                                    onChange={(e) => { setAge(e.target.value) }}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Gender</legend>
                                <input type="text" className="input" value={gender}
                                    onChange={(e) => { setGender(e.target.value) }}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">About</legend>
                                <input type="text" className="input" value={about}
                                    onChange={(e) => { setAbout(e.target.value) }}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo Url</legend>
                                <input type="text" className="input" value={photoUrl}
                                    onChange={(e) => { setPhotoUrl(e.target.value) }}
                                />
                            </fieldset>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={handleSaveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile updated successfully.</span>
                </div>
            </div>}
            <UserCard user={user} />
        </div>
    )
}

export default EditProfile;