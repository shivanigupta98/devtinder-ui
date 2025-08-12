const UserCard = ({user}) => {
    const {firstName, lastName, about, photoUrl, gender, age } = user;
        return (
        <>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                  {photoUrl &&  <img
                        src={photoUrl}
                        alt="photo" />}
                </figure>
                <div className="card-body gap-1">
                    <h2 className="card-title flex justify-center">{firstName+" "}{lastName} </h2>
                    <div className="flex flex-col items-center my-4">
                    <p className="flex justify-center">{about}</p>
                   {age && gender && <p className="flex justify-center">{age+", " +gender}</p>}
                   </div>
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