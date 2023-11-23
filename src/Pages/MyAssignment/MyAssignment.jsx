import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import MyAssignmentCard from './MyAssignmentCard';
import Swal from 'sweetalert2';

const MyAssignment = () => {
    const {user, loading}=useContext(AuthContext);
    console.log(user.email)
    // console.log(user);
    const [assignments, setAssignments]=useState([]);
    
    

    if(loading){
        return <div className='text-center w-11/12 mx-auto my-40'><i className='loading loading-spinner font-bold text-3xl  '></i></div>
    }


    const url= `https://online-group-study-server-rho.vercel.app/myassignments?email=${user?.email}`;

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

    // const handleDelete= (id) =>{
    //     const proceed= confirm(' You want to delete.Are you sure ?');
    //     if(proceed){
    //         // fetch(`https://localhost:5000/allassignment/${id}`,{
    //         //     method:'delete',
                
    //         // })
    //         // .then(res=>res.json())
    //         axios.delete(`https://online-group-study-server-rho.vercel.app/allassignment/${id}`, {withCredentials:true})
    //         .then(res=>{
    //             console.log(res.data)
    //             if(res.data.deletedCount > 0){
    //                 Swal.fire('', 'Deleted successfully', 'success');
    //                 const remaining= assignments.filter(assignment=>assignment._id !==id)
    //                 setAssignments(remaining);
    //             }
    //         })
    //         .catch(error=>{
    //             console.log(error)
    //             Swal.fire('', 'Something went wrong', 'error');
    //         })
    //     }
    // }

    const handleDelete = (id, assignmentEmail) => {
        const proceed = confirm('You want to delete. Are you sure?');
        if (proceed) {
            // Compare the current user's email with the assignment creator's email
            if (user.email === assignmentEmail) {
                axios.delete(`https://online-group-study-server-rho.vercel.app/allassignment/${id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            Swal.fire('', 'Deleted successfully', 'success');
                            const remaining = assignments.filter(assignment => assignment._id !== id);
                            setAssignments(remaining);
                        } else {
                            Swal.fire('', 'Assignment not found or unauthorized', 'error');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire('', 'Something went wrong', 'error');
                    });
            } else {
                Swal.fire('', 'Unauthorized to delete this assignment', 'error');
            }
        }
    };


   

    return (
        <div>
             {/* { */}
            
                {/*  assignments.length > 0 ? */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3'>
                {
                    assignments.map(assignment=><MyAssignmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></MyAssignmentCard>)
                }
            </div>
            {/* :
            <div className=''><p className='font-bold text-3xl text-center my-40'>No assignment Created</p></div>
             } */}
        </div>
    );
};

export default MyAssignment;