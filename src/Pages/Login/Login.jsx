import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';


const Login = () => {

    const {loginwithGoogle, logInWithGithub, signInUser}= useContext(AuthContext);
    const [show, setshow]= useState(false);

    const handleLogin=(e)=>{
        e.preventDefault();

        const form= e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        console.log({email, password});

        const user= {email};
        signInUser(email, password)
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
            })


            // axios.post('https://online-group-study-server-peyslyaw1-sabbirahmed0007.vercel.app/users', user )
            // .then(res=>{
            //     console.log(res);
            //     console.log(res.data)
            //     if(res.data.success){
                    
            //         // navigate(location?.state? location?.state : '/');

            //     }
                
            // })
        })
        .catch(error=>{
            console.log("Error", error);
            Swal.fire('Opps', 'Something went wrong', 'error');
        })

    }



    
    // sign in with google if have account
    const handleSignInByGoogle=()=>{
        const proceed= confirm('You want to log in with Google');
        if(proceed){
            
            loginwithGoogle()
            .then(result=>{
                console.log(result.user);
                // Swal.fire('Success', 'Logged in with Google successfully', 'success');
                Swal.fire({
                    title: 'Logged in successfully',
                    icon: 'success',
                    html: '<img src="https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg" alt="Your Image" style="max-width: 48%; height:45%; margin: 0 auto; " />',
                    
                  });
            })
            .catch(error=>{
                console.error( error);
                Swal.fire('opps','SomeThing went wrong', 'error');
    
            })
            
        }

    }

    // sign in with gitHub if have account
    const handleGithubSignIn =()=>{
        logInWithGithub()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: 'Logged in successfully',
                icon: 'success',
                html: '<img src="https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg" alt="Your Image" style="max-width: 48%; height:45%; margin: 0 auto; " />',
                
              });
        })
        .catch(error=>{
            console.error( error.message);
            Swal.fire('Opps', 'Something went wrong', 'error');
        })

    }

    return (
            <div className='w-11/12 mx-auto ' >
                <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-0'>
                    <div className='w-full  hidden lg:block'>
                        <img src="https://i.ibb.co/LJ8VVKf/58a7f1fb13d340917c81c0bb63f6c7db.jpg" alt="" className='w-full mx-auto h-screen' />
                    </div>
                    <div className="card  w-full max-w-lg shadow-2xl drop-shadow-xl bg-base-100 mx-auto relative my-24 z-0 border">
                            <div className='absolute -top-20 left-40 lg:left-44 z-30'>
                                <img src="https://i.ibb.co/0Zqfy4F/c0c8178e509b2c6ec222408e527ba861-removebg-preview.png" alt=""  className='w-40 bg-white ring-pink-200 ring-1 rounded-full opacity-60'/>
                            </div>
                            <form onSubmit={handleLogin} className="card-body mt-14 ">
                                <h1 className='text-3xl font-bold text-center text-sky-400 first-letter:text-fuchsia-600'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-[16px] font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered  focus:outline-none border-none bg-slate-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-[16px] font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered  focus:outline-none border-none bg-slate-200" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                <span className="label-text text-[16px] font-semibold">Password</span>
                                </label>
                                <input type={show? "text" :"password"} placeholder="password" name='password' className="input input-bordered focus:outline-none border-none bg-slate-200 " required />
                                <p onClick={()=>setshow(!show)} className='absolute right-4 top-12'>
                                {
                                    show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                                }
                            </p>
                                
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn bg-purple-800 hover:bg-fuchsia-800 bg-opacity-70 text-white rounded-3xl">Login</button>
                            </div>
                            </form>
                            <div className='mb-10 text-left mx-10'>
                                <p>New here? Create an Accout <Link to={'/register'} className='link font-semibold'>Sign Up</Link></p>
                            </div>
                            <div className='px-8'>
                                <h1 className='font-bold text-center mb-3 text-2xl text-fuchsia-700'>More Options to Log in</h1>
                                <div className='text-center flex flex-col lg:flex-row w-full mx-auto gap-2 my-2 -mt-6 lg:gap-1 items-center justify-center  p-5'>
                                    <button onClick={handleSignInByGoogle}  className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                        <img src="https://i.ibb.co/FKydQJc/604199df880fb029291ddd7c382e828b-removebg-preview.png" alt="" className='w-8' />
                                        Log in with Google
                                    </button>
                                    <button onClick={handleGithubSignIn} className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                        <img src="https://i.ibb.co/7bJhdmn/cf5f7dca8d30d52a39f4043f3796d7f0-removebg-preview.png" alt="" className='w-8' />
                                        Log in with GitHub
                                    </button>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;