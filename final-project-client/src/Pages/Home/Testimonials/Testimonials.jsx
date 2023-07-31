import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-ja6l.onrender.com/review')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    return (
        <div className='my-9'>
            <SectionTitle
                heading={'testimonials'}
                subHeading={'what our client say'}
            ></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        testimonial.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col gap-4 items-center m-16'>
                                <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                                <FaQuoteLeft className='text-5xl text-black' />
                                <p>{review.details}</p>
                                <h3 className='text-2xl text-[#CD9003] uppercase'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;