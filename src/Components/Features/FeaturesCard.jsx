import React from 'react';

const FeaturesCard = ({feature }) => {

    const {title, description}= feature;

    return (
        <div>
            <div className='text-center bg-gray-200 mx-5 p-3 rounded-md'>
                <h2 className='h-10 text-xl font-bold text-purple-700'>{title}</h2>
                <p className='h-20'>{description}</p>
            </div>
            
        </div>
    );
};

export default FeaturesCard;