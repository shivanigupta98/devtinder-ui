import { useDispatch, useSelector } from "react-redux";
import BASE_URL from "../utils/constants";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from 'axios';

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

    const getFeed = async () => {
        try {
            if (feed) return;
            const res = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
            dispatch(addFeed(res.data));
        }

        catch (err) {
            console.log(err);
        }
    }
     useEffect(() => {
            getFeed();
        }, [])
        if(!feed || feed.length===0){
            return (
            <div className="my-10 flex justify-center">
                <ul className="list bg-base-300 rounded-box shadow-md w-2/3">
                    <li className="p-4 pb-2 text-xl text-black text-center opacity-60">No Users Found!</li>
                </ul></div>
        )
        }
    return feed && (
        <div className="flex justify-center my-10">
            <UserCard user={feed[0]}/>
        </div>
    )

}

export default Feed;
