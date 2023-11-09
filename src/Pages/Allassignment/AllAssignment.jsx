import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Assignment from './Assignment';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AllAssignment = () => {

    const {user }= useContext(AuthContext);
    const [assignments, setAllAssignment]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:5000/allassignments', {withCredentials:true})
        .then(res=>{
            // console.log(res.data);
            setAllAssignment(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    // const handleDelete= (id) =>{
    //     const proceed= confirm(' You want to delete.Are you sure ?');
    //     if(proceed){
    //     //     fetch(`https://localhost:5000/allassignment/${id}`,{
    //     //         method:'delete',
                
    //     //     })
    //     //     .then(res=>res.json())
    //         axios.delete(`http://localhost:5000/allassignment/${id}`, {withCredentials:true})
    //         .then(res=>{
    //             console.log(res.data)
    //             if(res.data.deletedCount > 0){
    //                 Swal.fire('', 'Deleted successfully', 'success');
    //                 const remaining= assignments.filter(assignment=>assignment._id !==id)
    //                 setAllAssignment(remaining);
    //             }
    //         })
            
    //     }
    // }
    const handleDelete = (id, assignmentEmail) => {
        const proceed = confirm('You want to delete. Are you sure?');
        if (proceed) {
            // Compare the current user's email with the assignment creator's email
            if (user.email === assignmentEmail) {
                axios.delete(`http://localhost:5000/allassignment/${id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            Swal.fire('', 'Deleted successfully', 'success');
                            const remaining = assignments.filter(assignment => assignment._id !== id);
                            setAllAssignment(remaining);
                        } else {
                            Swal.fire('', 'Assignment not found or unauthorized', 'error');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire('', 'Something went wrong', 'error');
                    });
            } else {
                Swal.fire('', 'You are unauthorized to delete this assignment', 'error');
            }
        }
    };

    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3'>
                {
                    assignments.map(assignment=><Assignment key={assignment._id} assignment={assignment} handleDelete={handleDelete}></Assignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;