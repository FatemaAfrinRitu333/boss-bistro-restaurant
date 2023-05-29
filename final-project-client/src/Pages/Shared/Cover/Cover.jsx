import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ heading, subHeading, imgUrl }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={imgUrl}
            bgImageAlt=""
            strength={-200}
            bgImageSize='contain'
        >
           
            <div className="hero py-20">
                <div className="text-center w-5/6 bg-black/50 py-12 px-8 text-white font-mono">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                    <p className="mb-5">{subHeading}</p>
                </div>
            </div>
            <div style={{ height: 'max-content' }} />
        </Parallax>

    );
};

export default Cover;