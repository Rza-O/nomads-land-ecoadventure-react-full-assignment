import { useLoaderData } from "react-router-dom";
import travelImg from '../assets/travel002.svg';
import { useState } from "react";
import { format, isWithinInterval, parseISO } from "date-fns";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AdventureDetails = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    // eslint-disable-next-line no-unused-vars
    const { id, title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = useLoaderData();
    

    const [modal, setModal] = useState(false);
    
    const expertBtnHandler = () => {
        const currentTime = new Date();
        const start = parseISO(`${format(new Date(), 'yyyy-MM-dd')}T10:00:00`);
        const end = parseISO(`${format(new Date(), 'yyyy-MM-dd')}T20:00:00`);
        if(isWithinInterval(currentTime, {start, end})){
            window.open('https://meet.google.com', '_blank');
        }
        else{
            setModal(true);
        }
    }

    return (
        <div className="">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {shortDescription}
                        </p>
                        <button onClick={expertBtnHandler} className="btn bg-Tertiary border-none hover:bg-optional text-white">Talk with expert</button>
                    </div>

                </div>
            </div>
            <div>
                <h2 className="text-4xl my-6 text-center text-Tertiary">IMPORTANT DETAILS ABOUT THE TRIP</h2>
            </div>
            <div className="w-11/12 mx-auto md:flex xl:justify-between space-x-3">
                <div data-aos="zoom-in">
                    <img src={travelImg} alt="" />
                </div>
                <div className="card lg:w-1/2" data-aos="zoom-in">
                    <div className="card-body 2xl:text-center">
                        {/* <h2 className="card-title text-3xl justify-center text-Tertiary font-extrabold">{title}</h2> */}
                        <p className="text-xl">Location: <span className="text-Tertiary font-bold">{location}</span> </p>
                        <p className="text-xl">Duration: <span className="text-Tertiary font-bold">{duration}</span></p>
                        <p className="text-xl">Cost: <span className="text-Tertiary font-bold">{cost}$</span> </p>
                        <p className="text-xl">Category: <span className="text-Tertiary font-bold">{category}</span></p>
                        <p className="text-xl">Availability: <span className="text-Tertiary font-bold">{bookingAvailability}</span></p>
                        <p className="text-xl">Group Size: <span className="text-Tertiary font-bold">{maxGroupSize}</span>  person/trip</p>
                        <p className="text-xl">Adventure Level: <span className="text-Tertiary font-bold">{adventureLevel}</span> </p>
                        <p className="text-xl"> Items included: 
                            {
                                includedItems.map((item, idx) => <li className="font-bold" key={idx}><span className="text-Tertiary">{item}</span></li>)
                            }
                        </p>
                        <p className="text-xl"> Special Instructions: 
                            {
                                specialInstructions.map((item, idx) => <li className="font-bold" key={idx}><span className="text-Tertiary">{item}</span></li>)
                            }
                        </p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            {
                modal && (
                    <div className="modal modal-open ">
                        <div className="modal-box bg-primary text-center space-y-3">
                            <h3 className="text-xl font-bold">Consultation Time</h3>
                            <p>Our consultation hours are between <span className="font-bold">10:00 AM</span> and <span className="font-bold">8:00 PM</span>. Please Visit during these hours!</p>
                            <div className="modal-action justify-center">
                                <button className="btn bg-Tertiary text-white hover:bg-optional" onClick={()=> setModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AdventureDetails;

