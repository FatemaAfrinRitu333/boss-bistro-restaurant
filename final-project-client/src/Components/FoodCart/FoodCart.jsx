import React from 'react';

const FoodCart = ({ item }) => {

    const { name, recipe, image, price } = item;

    const handleAddToCart = (item) =>{
        console.log(item);
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Food" />
                <p className='absolute px-3 bg-[#111827] top-2 right-2 rounded-md text-white'>${price}</p>
            </figure>

            <div className="card-body text-center px-4 bg-white text-black">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;