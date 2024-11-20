import world from '../assets/world.svg'
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Insurance = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='md:flex justify-evenly items-center w-11/12 mx-auto space-x-6 space-y-6 text-center md:text-left mb-3 lg:mb-0'>
            <div data-aos="fade-right">
                <img src={world} alt="" />
            </div>
            <div className='lg:space-y-4 space-y-2' data-aos="fade-left">
                <h2 className='font-bold text-3xl'>Get an instant travel insurance quote</h2>
                <p className='lg:w-96  font-light'>Simple and flexible travel insurance designed by travelers, for travelers. See why over 3 million travelers have chosen World Nomads for more than 20 years.</p>
                <div className='flex justify-center md:block'>
                    <button className='flex items-center btn bg-Tertiary hover:bg-optional text-white'>Get a quote <IoIosArrowForward /> </button>
                </div>
            </div>
        </div>
    );
};

export default Insurance;