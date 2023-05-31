import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, heading, subHeading, imgUrl }) => {
    return (
        <div className='my-12 space-y-12 w-ful'>
            {heading && <Cover
                heading={heading}
                subHeading={subHeading}
                imgUrl={imgUrl}
            ></Cover>}
            <div className="mx-5 grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/shop/${heading}`}>
                    <button className='btn btn-outline text-black uppercase border-0 border-b-2'>order your favorite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;