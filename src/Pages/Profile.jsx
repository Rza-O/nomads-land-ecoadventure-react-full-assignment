import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user} = useContext(AuthContext);
    const { displayName, email, photoURL } = user
    console.log(displayName, email, photoURL);
    return (
        <div className=" my-7 flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-center">Welcome <span className="text-Tertiary">{displayName}</span>!</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photoURL}
                        alt="Shoes"
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {displayName}</h2>
                    
                    <p>Email: {email}</p>
                    <div className="card-actions">
                        <Link to='/profile/update'><button className="btn bg-Tertiary hover:bg-optional text-white">Update profile</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;