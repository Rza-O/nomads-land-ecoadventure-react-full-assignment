/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

// eslint-disable-next-line react/prop-types
const Slider = ({slides}) => {
    return (
        <Swiper
            spaceBetween={2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            slidesPerView={3}
            modules={[Autoplay, Navigation,Pagination]}
        >
            {slides.map((slide)=> (
                <SwiperSlide key={slide.id}>
                    <img className='h-36 md:h-80 w-full' src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    );
};

export default Slider;