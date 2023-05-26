import React from 'react';

const MenuItem = ({item}) => {

    const {image, price, recipe, name} = item;

    return (
        <div className='flex space-x-4'>
            <img src={image} alt="" className='w-1/4 rounded-r-full rounded-bl-full bg-gray-400'  />
            <div>
                <h3 className='uppercase text-black'>{name}---------</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>{price}</p>
        </div>
    );
};

export default MenuItem;