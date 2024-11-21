import { Link, useLocation, useNavigate } from 'react-router-dom';
import welcomeImg from '../assets/welcom.svg'
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const { handleGoogleLogin, handleLogin, setUser, setEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});


    const handleSocialLogin = () => {
        handleGoogleLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')
        setError('')
        handleLogin(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='hidden lg:flex lg:w-1/2 p-6 bg-optional/20 justify-center' data-aos='fade-right'>
                <img src={welcomeImg} alt="" />
            </div>
            <div className='w-full lg:w-1/2 p-6' data-aos="fade-left">
                <div className='text-center space-y-2'>
                    <h2 className='text-3xl font-bold text-Tertiary'>Welcome Back!</h2>
                    <p className='text-sm font-light'>Please Enter your details to login</p>
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" onChange={handleEmailChange} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/forgotPass' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    {
                        error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )
                    }
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-Tertiary border-none text-white hover:bg-optional">Login</button>
                    </div>
                </form>
                <p className='text-center'>Don&apos;t have an account? <Link to='/register'><span className='text-Tertiary hover:text-optional'>Sign Up</span></Link></p>
                <div className="divider">OR</div>
                <p className='text-center font-semibold'>Sign in using</p>
                <div className=' flex flex-col justify-center items-center mt-3'>
                    <FaGoogle onClick={handleSocialLogin} className='text-3xl bg-Tertiary text-white rounded-full p-2 hover:bg-optional' />
                    <p className='text-xs'>Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;