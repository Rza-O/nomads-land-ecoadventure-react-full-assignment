import toast from "react-hot-toast";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Newsletter = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        // console.log(email);
        toast.success(`Welcome to newsletter, ${email.split('@')[0]}`); 
    }


    return (
        <div className="w-3/4 py-6 px-4 md:px-0 mx-auto flex flex-col gap-6 items-center bg-primary/60 rounded-lg my-10" data-aos='fade-up'>
            <div className="text-center space-y-2">
                <h2 className="font-semibold text-2xl">NEWS, INSPIRATION AND ADVENTURE</h2>
                <p className="font-light">Sign up to the Nomad&apos;s newsletter</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4  items-center justify-center flex flex-col">
                Email Address*
                <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-full" required />
                <button type="submit" className="btn bg-Tertiary border-none text-white hover:bg-optional w-full">Subscribe</button>
                <div className="form-control">
                    <label className="flex cursor-pointer">
                        <input type="checkbox" className="checkbox" required/>
                        <div className="space-x-3">
                            <p className="label-text ml-3">I agree to receive newsletters via email.*</p>
                            <p className="label-text text-xs">View our <a className="text-purple-800" href="">privacy policy</a>, you can unsubscribe at any time</p>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;