import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {

    const UpdateData= useLoaderData();
    console.log(UpdateData);
    const {date, title, description, level, marks, img, email, _id}=UpdateData;

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center mx-3 my-5'>
                <div>
                    <img src={img} alt="" className='rounded-md'/>
                </div>
                <div className='my-4 p-6'>
                    <p><button className='btn capitalize font-bold text-lg text-green-500'>{level}</button></p>
                    <h2 className='my-2 text-3xl font-bold text-lime-600'>{title}</h2>
                    <h2 className='text-red-500 font-semibold my-2'><span className='font-bold '>Marks</span> : {marks}</h2>
                    <h2 className='my-2'><span className='font-bold text-green-500'>Submittion date</span> : {date}</h2>
                    <p className='text-justify my2'><span className='font-bold my-2 '>Description</span>: {description}</p>
                    <div>
                        <Link><button className='btn w-full my-4 capitalize bg-gradient-to-r from-yellow-400 to-lime-400 text-white font-bold'>Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;