import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {


    const [selectedDate, setSelectedDate]= useState(null);



    return (
        <div className='w-10/12 mx-auto '>
            <div className=' my-8 shadow-xl drop-shadow-lg max-w-lg mx-auto rounded-md'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl my-7'>Create Your Assignment</h2>
            </div>
                <form className='w-full px-4  '>
                    <div className='my-2'>
                        <label htmlFor="title" className='font-medium text-lg'>Title Of The Assignment</label><br />
                        <input type="text" name="title" id="title" className='w-full  p-2 rounded-md  bg-gray-200'  placeholder="Leave the assignment's title"/>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="description" className='font-medium text-lg'>Description</label><br />
                        <textarea name="description" id="description" className='w-full  p-2 rounded-md  bg-gray-200' cols="30" rows="10"></textarea>
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
                            <DatePicker name="date" selected={selectedDate} onChange={(date)=>setSelectedDate(date)} minDate={new Date()} className='w-full p-2 rounded-md  bg-gray-200'></DatePicker>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type='button' className='btn btn-warning w-full my-6 font-bold rounded-3xl'>Create Assignment</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;