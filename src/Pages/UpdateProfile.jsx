import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";


const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const { displayName, photoURL } = user
    console.log(user);

    const handleUpdateBtn = () => {
        console.log('hello');
    }

    return (
        <div className=" my-7 flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-center">Welcome {displayName}!</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photoURL}
                        alt="Shoes"
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">

                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" className="grow" placeholder={displayName} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Photo
                        <input type="text" className="grow" placeholder='photo url' />
                    </label>
                    <div className="card-actions">
                        <Link to='/profile/update'><button onClick={handleUpdateBtn} className="btn bg-Tertiary hover:bg-optional text-white">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;