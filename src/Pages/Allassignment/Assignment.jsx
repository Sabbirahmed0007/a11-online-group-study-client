import React from 'react';
import { Link } from 'react-router-dom';

const Assignment = ({assignment, handleDelete}) => {
    // console.log(assignment);

    const {title, description, img, level, marks, date, email, _id, }=assignment;
    // console.log(_id);

    return (
        <div>
            <div className='mx-3 my-7 shadow-xl rounded-lg'>
                <div>
                    <img src={img} alt="" className='h-80 md:h-60 w-full rounded-t-lg' />
                </div>
                <div className=' p-6'>
                    <h3 className='btn  font-bold'>{level}</h3>
                    <h2 className='text-xl font-bold my-2 md:h-14'>{title}</h2>
                    <h2><span className='font-bold mt-3'>Total Marks</span> : {marks}</h2>
                </div>
                <div className='flex text-center justify-center items-center  gap-2 pb-5'>
                    <Link to={ `/details/${_id}`}><button className='btn btn-secondary text-white font-bold btn-sm'title='View Assignment'>Details</button></Link>
                    <Link to={`/updatedata/${_id}`}><button className='btn btn-warning font-bold btn-sm'>Update</button></Link>
                    <button className='btn btn-outline font-bold text-red-600 btn-sm' onClick= {()=>handleDelete(_id, email)}>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default Assignment;