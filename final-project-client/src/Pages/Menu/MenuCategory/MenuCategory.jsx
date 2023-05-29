import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, heading, subHeading, imgUrl }) => {
    return (
        <div className='my-12 space-y-12'>
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
        </div>
    );
};

export default MenuCategory;