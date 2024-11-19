import { useLoaderData } from "react-router-dom";

const AdventureDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const { id, title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = useLoaderData();
    console.log(title);
    return (
        <div>
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
                <h2 className="text-4xl mt-4 text-center text-Tertiary">IMPORTANT DETAILS ABOUT THE TRIP</h2>
            </div>
        </div>
    );
};

export default AdventureDetails;


// {
//     "id": 1,
//         "title": "Himalayan Mountain Trek",
//             "image": "https://www.himalayan-treks.com/wp-content/uploads/2019/01/16002786_10154948764216098_7989716405104998514_n-ISLAND-PEAK-Cropped.jpg",
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