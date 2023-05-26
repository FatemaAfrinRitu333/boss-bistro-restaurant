import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Category.css";
// import required modules
import { FreeMode, Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <>
        <SectionTitle
        subHeading={'From 11.00 am to 10.00 pm'}
        heading={'order online'}
        ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide className="relative">
                    <img src={slider1} alt="" />
                    <h3 className="text-xl md:text-4xl uppercase
                     text-center text-white font-bold absolute bottom-2 md:bottom-12">Salad</h3>
                    </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider2} alt="" />
                    
                    <h3 className="text-xl md:text-4xl uppercase
                     text-center text-white font-bold absolute bottom-2 md:bottom-12">pizza</h3>
                    </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider3} alt="" />
                    
                    <h3 className="text-xl md:text-4xl uppercase
                     text-center text-white font-bold absolute bottom-2 md:bottom-12">soup</h3>
                    </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider4} alt="" />
                    
                    <h3 className="text-xl md:text-4xl uppercase
                     text-center text-white font-bold absolute bottom-2 md:bottom-12">cake</h3>
                    </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider5} alt="" />
                    
                    <h3 className="text-xl md:text-4xl uppercase
                     text-center text-white font-bold absolute bottom-2 md:bottom-12 -mt-">Salad</h3>
                    </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;