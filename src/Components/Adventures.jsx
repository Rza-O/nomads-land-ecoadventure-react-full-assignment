import AdventureCard from "./AdventureCard";


// eslint-disable-next-line react/prop-types
const Adventures = ({data}) => {
    return (
        <div className="my-6 ">
            <div className="w-11/12 mx-auto space-y-3 text-center">
                <h2 className="text-4xl text-center text-Tertiary font-bold">Adventure Explorer</h2>
                <p className="font-light">Discover a world of eco-friendly adventures tailored for every thrill-seeker. From serene mangrove kayaking to adrenaline-filled mountain treks, our experiences connect you with nature while preserving it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-3 mt-8">
                {
                    // eslint-disable-next-line react/prop-types
                    data.map(singleData => <AdventureCard key={singleData.id} singleData={singleData}></AdventureCard>)
                }
            </div>
        </div>
    );
};

export default Adventures;