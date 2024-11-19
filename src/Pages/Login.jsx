import { Link } from 'react-router-dom';
import welcomeImg from '../assets/welcom.svg'

const Login = () => {
    return (
            <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='hidden lg:block lg:w-1/2 p-6 bg-optional/20'>
                <img src={welcomeImg} alt="" />
            </div>
            <div className='w-full lg:w-1/2 p-6'>
                <div className='text-center space-y-2'>
                    <h2 className='text-3xl font-bold text-Tertiary'>Welcome Back!</h2>
                    <p className='text-sm font-light'>Please Enter your details to login</p>
                </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-Tertiary border-none text-white hover:bg-optional">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Don&apos;t have an account? <Link to='/register'><span className='text-Tertiary hover:text-optional'>Sign Up</span></Link></p>
                </div>
            
            </div>
    );
};

export default Login;