import React, { useContext, useState } from 'react';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    
    const [show, setshow]=useState(false);
    const {createUser}= useContext(AuthContext);
    


    const handleCreateUser=(e)=>{
        e.preventDefault();

        const form= e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        const terms= form.terms.checked;

        console.log({name, email,password, terms})

                
        // password validation
        if (password.length < 8) {
            console.log("Password must be  8 characters or longer");
            Swal.fire('',"Password must be  8 characters or longer",'error');
            
            return;
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/) {
            return Swal.fire(
              "Your password must contain at least a upperCase characters and a number.",'warning'
            );
          }

        createUser(email, password)
        .then(result=>{
            console.log(result.user);
            updateProfile(result.user, {
                displayName:name
            })
            .then(()=>{
                console.log("updated successfully");
                Swal.fire({
                    title: 'Logged in successfully',
                    icon: 'success',
                    html: '<img src="https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg" alt="Your Image" style="max-width: 48%; height:45%; margin: 0 auto; " />',
                    
                  });

            })
            .catch(error=>{

                console.error(error);
                Swal.fire('opps', 'something went wrong', 'error');
            })

        })
        .catch(error=>{
            console.log(error);
            Swal.fire('opps', 'something went wrong', 'error');
    })
        

    }


    return (
        <div>
             <div className='w-9/12 max-w-lg mx-auto border p-5 my-4 drop-shadow-xl shadow-xl rounded-md '>

                <div className=' text-center mt-3 mb-8'>
                    <h1 className='text-3xl font-bold  bg-transparent text-fuchsia-700'>Sign Up</h1>
                </div>
                <form  onSubmit={handleCreateUser}>
                    
                <div>
                        <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                        <input type="text" name="name" id="name" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter your name' />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                        <input type="email" name="email" id="email" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter a valid email' />
                    </div>
                    <div className='my-5 relative'>
                        <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                        <input type={show ? "text" : "password"} name="password" id="password" className='w-full  bg-slate-200 text-black p-3 rounded-lg focus:rounded-3xl  focus:outline-none' placeholder='Enter password' />
                        <p onClick={()=>setshow(!show)} className='absolute right-4 top-10'>
                                {
                                    show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                                }
                            </p>
                    </div>
                    <div className='flex items-center my-5'>
                        <input type="checkbox" name="terms" id="terms" />&nbsp;
                         I accept all the &nbsp;
                        <Link className='link font-bold'> terms and conditions</Link>
                    </div>
                    <div>
                        <button type="submit" className='btn w-full rounded-3xl hover:bg-lime-500 text-white bg-lime-400 font-bold'>Create a New Account</button>
                    </div>
                </form>
                <div className='my-5 '>
                    <h1 className='font-medium'>Already have an account? <Link className='link font-bold' to={'/login'}> Log in</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;