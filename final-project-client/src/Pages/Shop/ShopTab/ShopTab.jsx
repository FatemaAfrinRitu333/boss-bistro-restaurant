import React from 'react';
import FoodCart from '../../../Components/FoodCart/FoodCart';

const ShopTab = ({item}) => {
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