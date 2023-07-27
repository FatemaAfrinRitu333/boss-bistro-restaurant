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
    );
};

export default ShopTab;

