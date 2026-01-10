import React from 'react';
import slide1 from '/slide_1.jpg'
import slide2 from '/slide_2.jpg'
import slide3 from '/slide_3.jpg'
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Slider = () => {
    return (
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img className='w-full h-[200px] md:h-[400px] object-cover  ' src={slide1} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-full h-[200px] md:h-[400px] object-cover' src={slide2} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-full h-[200px] md:h-[400px] object-cover' src={slide3} alt="" />
      </SwiperSlide>
    </Swiper>
    );
};

export default Slider;