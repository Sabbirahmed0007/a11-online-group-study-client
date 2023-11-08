import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Assignment from './Assignment';

const AllAssignment = () => {

    const [assignments, setAllAssignment]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/allassignments', {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setAllAssignment(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3'>
                {
                    assignments.map(assignment=><Assignment key={assignment._id} assignment={assignment}></Assignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;