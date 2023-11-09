import React from 'react';

const FeaturesCard = ({feature }) => {

    const {title, description}= feature;

    return (
        <div>
            <div className='text-center bg-gray-200 mx-5 p-3 rounded-md'>
                <h2 className='h-10 text-xl font-bold'>{title}</h2>
                <p className='h-18'>{description}</p>
            </div>
            
        </div>
    );
};

export default FeaturesCard;