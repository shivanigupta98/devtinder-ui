const UserCard = ({user}) => {
    console.log(user);
        return (
        <>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                        src={user.photoUrl}
                        alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center">{user.firstName}</h2>
                    <p className="flex justify-center">{user.about}</p>
                    <div className="card-actions justify-center my-4">
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard;