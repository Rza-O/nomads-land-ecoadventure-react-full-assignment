import forgotImg from '../assets/forgot-password.svg';

const ForgotPassword = () => {
    return (
        <div className='md:flex w-4/5 mx-auto my-6 md:p-8'>
            <div className='hidden lg:flex lg:w-1/2 p-6 bg-optional/20 justify-center'>
                <img src={forgotImg} alt="" />
            </div>
            <div className='w-full lg:w-1/2 p-6'>
                <div className='text-center space-y-2'>
                    <h2 className='text-3xl font-bold text-Tertiary'>Forgot password?</h2>
                    {/* <p className='text-sm font-light'>Please Enter your details to login</p> */}
                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        
                    </div> */}
                    
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-Tertiary border-none text-white hover:bg-optional">Send reset password link</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default ForgotPassword;