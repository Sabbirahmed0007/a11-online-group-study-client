import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Assignment from './Assignment';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AllAssignment = () => {

    const {user }= useContext(AuthContext);
    const [assignments, setAllAssignment]=useState([]);

    //filterring level
    const [selectedDifficulty, setSelectedDifficulty] = useState(''); 


    // pagination
    const [currentPage, setCurrentPage]= useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount]=useState(0);
    //  const {count} = counts;
     console.log(itemsPerPage)
    // console.log(count)

    const numberofpages= Math.ceil(count/itemsPerPage);
    console.log(numberofpages)


    const pages=[];
    for(let i=0; i<numberofpages; i++){
        pages.push(i);
    }
    console.log(pages);

    
    // useEffect(()=>{
    //     axios.get('https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/assignmentCount', {withCredentials:true})
    //     .then(res=>{
    //         console.log(res.data);
    //         setCount(res.data);
    //     })
    //     .catch(error=>{
    //         console.error(error);
    //     })
    // },[])
    useEffect(() => {

    
        axios.get('https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/assignmentCount', { withCredentials: true })
            .then(res => {
                setCount(res.data.count);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    

    // useEffect(()=>{
    //     axios.get('https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/allassignments', {withCredentials:true})
    //     .then(res=>{
    //         // console.log(res.data);
    //         setAllAssignment(res.data);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // },[])

    useEffect(()=>{
        axios.get(`https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/allassignments?page=${currentPage}&size=${itemsPerPage}&level=${selectedDifficulty}`, { withCredentials: true })

        .then(res=>{
            console.log(res.data);
            setAllAssignment(res.data);
        })
        .catch(err=>{
            console.error(err);
        })
    },[currentPage, itemsPerPage, selectedDifficulty])



    // const handleDelete= (id) =>{
    //     const proceed= confirm(' You want to delete.Are you sure ?');
    //     if(proceed){
    //     //     fetch(`https://localhost:5000/allassignment/${id}`,{
    //     //         method:'delete',
                
    //     //     })
    //     //     .then(res=>res.json())
    //         axios.delete(`https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/allassignment/${id}`, {withCredentials:true})
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
                axios.delete(`https://online-group-study-server-fuspky8v4-sabbirahmed0007.vercel.app/allassignment/${id}`, { withCredentials: true })
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

//pagination handling
    const handleItemsPerPage=(e)=>{
        const number= e.target.value;
        const val= parseInt(number);
        
        setItemsPerPage(val)
        setCurrentPage(0);
        console.log(number, val)

    }

    const handlePrev=()=>{
        if(currentPage> 0){
            setCurrentPage(currentPage-1);
        }
    }
    const handleNext=()=>{
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1);
        }
    }

    const handleLevel=(e)=>{
        const level=e.target.value;
        setSelectedDifficulty(level);

    }

    

    return (
        <div>
            <div className='text-right my-3 font-medium mx-3 border p-2 rounded-md max-w-fit '>
                <label htmlFor="level"><span className='text-lg font-bold text-fuchsia-500'>Difficulty</span> : </label>
                <select name="level" id="" className='p-1 focus:outline-none' onChange={handleLevel}>
                    <option className='p-1 my-1' value="easy">Easy</option>
                    <option className='p-1 my-1' value="medium">Medium</option>
                    <option className='p-1 my-1' value="hard">Hard</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3'>
                {
                    assignments.map(assignment=><Assignment key={assignment._id} assignment={assignment} handleDelete={handleDelete}></Assignment>)
                }
            </div>
            <div  className='flex justify-center items-center my-3 gap-2'>
                {/* Pagination */}
                <div><button onClick={handlePrev} className='btn btn-sm ' disabled={currentPage === 0}>Prev</button></div>
                {
                    pages.map((page, index)=><div className='text-center ' key={index}><button onClick={()=>setCurrentPage(page)} className='btn btn-sm select-primary  active:bg-amber-400'>{page}</button></div>)
                }
                <div><button onClick={handleNext}  className='btn btn-sm' disabled={currentPage === pages.length - 1}>Next</button></div>
                <select name="" defaultValue={itemsPerPage} onChange={handleItemsPerPage} id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>

            </div>
        </div>
    );
};

export default AllAssignment;