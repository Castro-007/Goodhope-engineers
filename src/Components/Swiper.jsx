import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectHome } from '../Utils';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';



export default function Swiperjss() {
  return (
    <>
      <Swiper
        spaceBetween={30}   
        loop ={true}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-8  py-8"
      >
        {
            ProjectHome.map((x) => (
                <NavLink key={x.Id} to="/Project">

                <SwiperSlide key={x.Id}>
                    <div className=''>
                    <img src={x.img} alt={x.alt} className='w-full h-[400px] object-cover rounded-lg shadow-lg' loading='lazy' />
                    <h1 className='text-2xl sma:text-lg mda:text-lg my-5 font-Sora font-medium text-center pt-4'>{x.title}</h1>
                    <h1 className='text-2xl sma:text-lg mda:text-lg mt-5 font-Sora font-medium text-center pt-4'></h1>
                    </div>
                </SwiperSlide>
                </NavLink>
            ))
        }
       
        
      </Swiper>
    </>
  );
}
