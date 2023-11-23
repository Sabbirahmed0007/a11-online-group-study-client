import React, { useEffect, useState } from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [banners, setBanners]=useState([]);

    useEffect(()=>{
        axios.get('https://online-group-study-server-rho.vercel.app/banners', {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setBanners(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

   

    return (
        <div className='z-10 h-screen'>
            <div  className='max-w-screen-xl mx-auto'>
            <div className="carousel w-full ">
            {
                banners.map((banner, index)=>
                            <div id="slide1" className="carousel-item relative w-full  " key={index}>
                                <img src={banner.picture} className="w-full bg-cover h-screen" />

                                    {/* <div className='absolute  transform -translate-y-1/2 left-0 right-0 flex  text-left items-center w-full bg-transparent h-full  drop-shadow-2xl top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.2 )] bg-blend-overlay'> */}
                                    <div className='absolute  transform -translate-y-1/2 left-0 right-0 flex  text-left items-center w-full bg-transparent h-full  drop-shadow-2xl top-1/2'>
                                        <div className='text-white font-bold w-1/2 mx-10'>
                                            <h2 className=' text-4xl md:text-5xl'>{banner.title}</h2>
                                            <p className='my-6'>{banner.description}</p>
                                            {/* <div className='flex justify-start gap-3 mt-4'>
                                                <button className='btn bg-orange-500 hover:bg-orange-600 text-white'>Developer Mode</button>
                                                <button className='btn btn-outline text-white'> Latest Project</button>
                                            </div> */}
                                        </div>
                                    </div>
                            </div>
                    )
                }
                        </div>
                </div>

        </div>
    );
};

export default Banner;