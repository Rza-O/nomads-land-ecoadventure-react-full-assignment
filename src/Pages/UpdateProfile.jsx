import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const UpdateProfile = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const { user, updateUserProfile } = useContext(AuthContext);
    const { displayName, photoURL } = user
    const navigate = useNavigate();

    const handleUpdateBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                navigate('/profile');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="2xl:h-[700px] my-7 flex flex-col justify-center items-center gap-5" data-aos='zoom-in'>
            <h1 className="text-4xl text-center text-Tertiary">Update your profile!</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photoURL}
                        alt="Shoes"
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <form onSubmit={handleUpdateBtn} className="space-y-3">
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input name="name" type="text" className="grow" placeholder={displayName} required/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Photo
                            <input type="text" name="image" className="grow" placeholder='photo url' required/>
                        </label>
                        <div className="card-actions justify-center">
                            <button type="submit" className="btn bg-Tertiary hover:bg-optional text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;