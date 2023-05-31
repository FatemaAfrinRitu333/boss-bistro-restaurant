import React from 'react';
import FoodCart from '../../../Components/FoodCart/FoodCart';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import "./styles.css";
// import { Grid, Pagination } from "swiper";

const ShopTab = ({ item }) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mx-5'>
            {item.map(item => <FoodCart
                key={item._id}
                item={item}
            ></FoodCart>)}
        </div>
        // <>
        //     <Swiper
        //         slidesPerView={3}
        //         grid={{
        //             rows: 2,
        //         }}
        //         spaceBetween={30}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         modules={[Grid, Pagination]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide className='bg-black text-white'>Slide 1</SwiperSlide>
        //         <SwiperSlide>Slide 2</SwiperSlide>
        //         <SwiperSlide>Slide 3</SwiperSlide>
        //         <SwiperSlide>Slide 4</SwiperSlide>
        //         <SwiperSlide>Slide 5</SwiperSlide>
        //         <SwiperSlide>Slide 6</SwiperSlide>
        //         <SwiperSlide>Slide 7</SwiperSlide>
        //         <SwiperSlide>Slide 8</SwiperSlide>
        //         <SwiperSlide>Slide 9</SwiperSlide>

        //     </Swiper>
        // </>
    );
};

export default ShopTab;

