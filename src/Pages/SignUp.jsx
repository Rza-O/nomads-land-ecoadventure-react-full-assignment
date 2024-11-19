import { Link } from "react-router-dom";
import signup from '../assets/signup.svg'


const SignUp = () => {
    return (
        <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='w-full lg:w-1/2 p-6'>
                <div className='text-center space-y-2'>
                    <h2 className='text-3xl font-bold text-Tertiary'>Become our member!</h2>
                    <p className='text-sm font-light'>Please Enter your details to signup</p>
                </div>
                <form className="card-body">
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
                        <button className="btn bg-Tertiary border-none text-white hover:bg-optional">Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link to='/login'><span className='text-Tertiary hover:text-optional'>Login</span></Link></p>
            </div>
            <div className='hidden lg:block lg:w-1/2 p-6 bg-optional/20'>
                <img src={signup} alt="" />
            </div>
        </div>
    );
};

export default SignUp;