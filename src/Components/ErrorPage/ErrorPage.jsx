import React from 'react';
import Navbar from '../Header/Navbar';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    const goToPrevious=()=>{
        navigate(-1);
    }

    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
            <div onClick={goToPrevious}>
                <div className='lg:w-9/12 mx-auto py-3 '>
                    <img src="https://i.ibb.co/TqQjr0B/a4ae15ca5b38d0834f2b2d6fd6ea07eb.gif" alt=""  className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;