import Slider from './Slider';
import slides from '../../../public/adventures.json'

const Banner = () => {
    return (
        <div>
            <Slider slides={slides}></Slider>
        </div>
    );
};

export default Banner;