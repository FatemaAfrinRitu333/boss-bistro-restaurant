import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center w-11/12 md:w-4/12 mx-auto my-12 capitalize'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='uppercase text-4xl py-4 my-5 border-y-4 border-slate-300 text-black'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;