import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const CreateAssignment = () => {


    const [selectedDate, setSelectedDate]= useState(null);

    const handleCreateAsignment=(e)=>{
        e.preventDefault();
        const form= e.target;

        const title= form.title.value;
        const email= form.email.value;
        const description= form.description.value;
        const img= form.img.value;
        const level= form.level.value;
        const marks= form.marks.value;
        const date= form.date.value;
        const infos= {title,email, description, img, level, marks, date};
        console.log(infos);

        axios.post('http://localhost:5000/createassignments', infos, {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire('','Assignment has been created successfully', 'success');
            }
        })
        .catch(error=>{
            console.log(error);
        })


    }



    return (
        <div className='w-10/12 mx-auto '>
            <div className=' my-8 shadow-xl drop-shadow-lg max-w-lg mx-auto rounded-md'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl my-7'>Create Your Assignment</h2>
            </div>
                <form onSubmit={handleCreateAsignment} className='w-full px-4 '>
                    <div className='my-2'>
                        <label htmlFor="title" className='font-medium text-lg'>Title Of The Assignment</label><br />
                        <input type="text" name="title" id="title" className='w-full  p-2 rounded-md  bg-gray-200'  placeholder="Leave the assignment's title"/>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="email" className='font-medium text-lg'>Email</label><br />
                        <input type="email" name="email" id="email" className='w-full  p-2 rounded-md  bg-gray-200'  placeholder="Your Email ..."/>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="description" className='font-medium text-lg'>Description</label><br />
                        <textarea name="description" id="description" className='w-full  p-2 rounded-md  bg-gray-200' cols="30" rows="10" placeholder='Description....'></textarea>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="img" className='font-medium text-lg'>Image URL</label><br />
                        <input type="text" name="img" id="image" className='w-full italic p-2 rounded-md  bg-gray-200' placeholder='Place the img url here' />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="level" className='font-medium text-lg'>Difficulty level</label><br />
                        <select name="level" id="" className='w-full bg-gray-200 p-2 rounded-md'>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-3 justify-center w-full my-2'>
                        <div className='w-full'>
                            <label htmlFor="marks" className='font-medium text-lg'>Mark</label><br />
                            <input type="text" name="marks" id="marks" className='w-full   p-2 rounded-md  bg-gray-200' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="marks" className='font-medium text-lg'>Date</label><br />
                            <DatePicker name="date" dateFormat={'dd/MM/yyyy'} selected={selectedDate} onChange={(date)=>setSelectedDate(date)} minDate={new Date()} className='w-full p-2 rounded-md  bg-gray-200'></DatePicker>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-warning w-full my-6 font-bold rounded-3xl'>Create Assignment</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;