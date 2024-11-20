import { useLoaderData, useLocation } from "react-router-dom";
import travelImg from '../assets/travel002.svg';

const AdventureDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const { id, title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = useLoaderData();
    const locationHook = useLocation()
    console.log(locationHook);
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
                        <button className="btn bg-Tertiary border-none hover:bg-optional text-white">Talk with expert</button>
                    </div>

                </div>
            </div>
            <div>
                <h2 className="text-4xl my-6 text-center text-Tertiary">IMPORTANT DETAILS ABOUT THE TRIP</h2>
            </div>
            <div className="w-11/12 mx-auto md:flex xl:justify-between space-x-3">
                <div>
                    <img src={travelImg} alt="" />
                </div>
                <div className="card lg:w-1/2 ">
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
        </div>
    );
};

export default AdventureDetails;


// {
//     "id": 1,
//         "title": "Himalayan Mountain Trek",   done
//             "image": "https://www.himalayan-treks.com/wp-content/uploads/2019/01/16002786_10154948764216098_7989716405104998514_n-ISLAND-PEAK-Cropped.jpg", done
//                 "category": "Mountain Treks",
//                     "shortDescription": "A breathtaking trek through the Himalayan mountain range, offering spectacular views and serene landscapes.",
//                         "cost": 450,
//                             "bookingAvailability": "Available Year-Round",
//                                 "location": "Nepal",
//                                     "duration": "7 Days",
//                                         "adventureLevel": "Intermediate",
//                                             "includedItems": ["Guide", "Meals", "Camping Equipment", "First Aid Kit"],
//                                                 "ecoFriendlyFeatures": [
//                                                     "Reusable Water Bottles",
//                                                     "Minimal Footprint Trails"
//                                                 ],
//                                                     "maxGroupSize": 15,
//                                                         "specialInstructions": [
//                                                             "Pack light",
//                                                             "Acclimatize before the trek",
//                                                             "Wear sturdy hiking boots"
//                                                         ]
// }