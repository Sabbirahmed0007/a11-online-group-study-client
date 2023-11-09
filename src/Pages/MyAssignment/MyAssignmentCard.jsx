import React from 'react';
import { Link } from 'react-router-dom';

const MyAssignmentCard = ({assignment, handleDelete}) => {
    console.log(assignment);

    const {title, description, img, level, marks, date, email, _id}=assignment;
    console.log(_id);

    return (
        <div>
            <div className='mx-3 my-7 shadow-xl rounded-lg'>
                <div>
                    <img src={img} alt="" className='h-80 md:h-60 w-full rounded-t-lg' />
                </div>
                <div className=' p-6'>
                    <h3 className='btn  font-bold'>{level}</h3>
                    <h2 className='text-xl font-bold my-2 md:h-14'>{title}</h2>
                    {/* <h2><span className='font-bold mt-3'>Total Marks</span>: {marks}</h2> */}
                </div>
                <div className='flex text-center justify-center items-center  gap-5 pb-5'>
                    <Link to={`/details/${_id}`}><button className='btn btn-secondary  btn-sm text-white font-bold'>Details</button></Link>
                    <Link to={`/updatedata/${_id}`}><button className='btn btn-warning btn-sm  font-bold'>Update</button></Link>
                    <button onClick={()=>handleDelete(_id, email)} className='btn btn-outline btn-sm  font-bold text-red-600'>Delete</button>

                </div>

            </div>
        </div>
    );
};


export default MyAssignmentCard;