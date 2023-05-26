import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className='my-9 bg-fixed' style={{backgroundImage: `url('${featured}')`,  backgroundSize: 'cover'}}>
            <div className='py-8 bg-slate-700/50'>
            <SectionTitle
            subHeading={'check it out'}
            heading={'from out menu'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16 gap-6 text-white'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='space-y-5'>
                    <p>Aug 2027</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit natus, ipsum consequuntur libero ex id, soluta voluptate officia, ratione quisquam fugit doloremque cum! Quis, hic? Libero blanditiis eos necessitatibus incidunt!</p>
                    <button className='btn btn-outline text-white border-0 border-b-4'>order now!</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;