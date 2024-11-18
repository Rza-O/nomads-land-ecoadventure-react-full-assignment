

// eslint-disable-next-line react/prop-types
const AdventureCard = ({singleData}) => {
    // eslint-disable-next-line react/prop-types
    const { title, image, ecoFriendlyFeatures } = singleData
    console.log(singleData);
    return (
        <div className="card bg-base-100 shadow-xl rounded-lg">
            <figure>
                <img
                    src={image}
                    className="md:h-52 lg:h-40 xl:h-52 w-full"
                    alt={title} />
            </figure>
            <div className="card-body justify-between text-pretty">
                <h2 className="card-title">{title}</h2>
                <div className="">
                    <p className="font-semibold">Features</p>
                    {
                        // eslint-disable-next-line react/prop-types
                        ecoFriendlyFeatures.map((singleFeatures, idx)=> <li className="font-light" key={idx}>{singleFeatures}</li>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn  text-white bg-Tertiary border-none hover:bg-optional">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdventureCard;