

// eslint-disable-next-line react/prop-types
const AdventureCard = ({singleData}) => {
    const { title, image, ecoFriendlyFeatures } = singleData
    console.log(singleData);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    className="md:h-32 lg:h-40 w-full"
                    alt={title} />
            </figure>
            <div className="card-body justify-between text-pretty">
                <h2 className="card-title">{title}</h2>
                <div>
                    <p className="font-semibold">Features</p>
                    {
                        // eslint-disable-next-line react/prop-types
                        ecoFriendlyFeatures.map((singleFeatures, idx)=> <li className="font-light" key={idx}>{singleFeatures}</li>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn  text-white bg-optional border-none hover:bg-Tertiary">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdventureCard;