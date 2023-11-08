import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import MyAssignmentCard from './MyAssignmentCard';

const MyAssignment = () => {
    const {user}=useContext(AuthContext);
    // console.log(user);
    const [assignments, setAssignments]=useState([]);

    const url= `http://localhost:5000/myassignments?email=${user?.email}`;

    useEffect(()=>{
        axios.get(url, {withCredentials:true})
        .then(res=>{
            // console.log(res.data);
            setAssignments(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3'>
                {
                    assignments.map(assignment=><MyAssignmentCard key={assignment._id} assignment={assignment}></MyAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAssignment;