import { useLoaderData } from "react-router-dom";
import Adventures from "../Components/Adventures";
import Banner from "../Components/Banner/Banner";
import Insurance from "../Components/Insurance";



const Home = () => {
    const data = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>
            <Adventures data={data}></Adventures>
            <Insurance></Insurance>
        </div>
    );
};

export default Home;