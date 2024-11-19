import { Link } from "react-router-dom";
import signup from '../assets/signup.svg'
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const SignUp = () => {
    const { handleSignUp, handleGoogleLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const image = form.get('photo');
        const password = form.get('password')
        console.log('name:',name, 'email:', email, 'image:', image, 'password:', password);
        handleSignUp(email, password);
    }

    return (
        <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='w-full lg:w-1/2 p-6'>
                <div className='text-center space-y-2'>
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
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-Tertiary border-none text-white hover:bg-optional">Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link to='/login'><span className='text-Tertiary hover:text-optional'>Login</span></Link></p>
            <div className="divider">OR</div>
            <p className='text-center font-semibold'>Sign in using</p>
            <div className=' flex flex-col justify-center items-center mt-3'>
                <FaGoogle className='text-3xl bg-Tertiary text-white rounded-full p-2 hover:bg-optional' />
                <p className='text-xs'>Google</p>
            </div>
            </div>
            <div className='hidden lg:flex  lg:w-1/2 p-6 bg-optional/20'>
                <img src={signup} alt="" />
            </div>
        </div>
    );
};

export default SignUp;