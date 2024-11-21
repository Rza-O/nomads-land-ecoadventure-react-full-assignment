import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Profile = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const {user} = useContext(AuthContext);
    const { displayName, email, photoURL } = user
    return (
        <div className="2xl:h-[700px] 3xl my-7 flex flex-col justify-center items-center gap-5" data-aos="zoom-in">
            <h1 className="text-2xl md:text-4xl text-center">Welcome <span className="text-Tertiary">{displayName}</span>!</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photoURL}
                        alt={displayName}
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