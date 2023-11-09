import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Faq from './Faq';

const Faqs = () => {

    const[faqs, setFaqs]=useState([]);

    useEffect(()=>{
        axios.get('https://online-group-study-server-peyslyaw1-sabbirahmed0007.vercel.app/faqs' , {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setFaqs(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    return (
        <div className='lg:w-4/5 my-10 bg-gray-200 mx-4 rounded-md py-2 lg:mx-auto'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-emerald-600'>FAQs</h2>
            </div>
            <div >
                {
                    faqs.map(faq=><Faq key={faq._id} faq={faq}></Faq>)
                }
            </div>
        </div>
    );
};

export default Faqs;