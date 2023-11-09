import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';

const Features = () => {

    const [features, setFeatures]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/features' , {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setFeatures(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            <div className='mt-10 text-center'>
                <h2 className='font-bold text-2xl'>Features</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-5'>
                {
                    features.map(feature=><FeaturesCard key={feature._id} feature={feature}></FeaturesCard>)
                }
            </div>
        </div>
    );
};

export default Features;