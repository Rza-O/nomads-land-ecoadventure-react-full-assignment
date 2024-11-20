import { Link, useNavigate } from "react-router-dom";
import signup from '../assets/signup.svg'
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const SignUp = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const { handleSignUp, handleGoogleLogin, updateUserProfile, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSocialLogin = () => {
        handleGoogleLogin()
            .then(() => {
                navigate('/');
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const image = form.get('photo');
        const password = form.get('password')
        setError('');

        if (password.length < 6) {
            setError('Password must be six character long!')
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must contain one letter!')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain one capital letter!')
            return
        }

        handleSignUp(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: image })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.log(err))
            })
            .catch(((error) => {
                console.log(error.code, error.message);
            }))
    }

    return (
        <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='w-full lg:w-1/2 p-6' data-aos="fade-right">
                <div className='text-center space-y-2' >
                    <h2 className='text-3xl font-bold text-Tertiary'>Become our member!</h2>
                    <p className='text-sm font-light'>Please Enter your details to signup</p>
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error && <p className='text-red-500 text-sm'>{error}</p>
                    }
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-Tertiary border-none text-white hover:bg-optional">Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link to='/login'><span className='text-Tertiary hover:text-optional'>Login</span></Link></p>
                <div className="divider">OR</div>
                <p className='text-center font-semibold'>Sign in using</p>
                <div className=' flex flex-col justify-center items-center mt-3'>
                    <FaGoogle onClick={handleSocialLogin} className='text-3xl bg-Tertiary text-white rounded-full p-2 hover:bg-optional cursor-pointer' />
                    <p className='text-xs'>Google</p>
                </div>
            </div>
            <div className='hidden lg:flex  lg:w-1/2 p-6 bg-optional/20' data-aos="fade-left">
                <img src={signup} alt="" />
            </div>
        </div>
    );
};

export default SignUp;