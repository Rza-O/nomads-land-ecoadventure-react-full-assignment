import { useLoaderData } from "react-router-dom";
import Adventures from "../Components/Adventures";
import Banner from "../Components/Banner/Banner";



const Home = () => {
    const data = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>
            <Adventures data={data}></Adventures>
        </div>
    );
};

export default Home;