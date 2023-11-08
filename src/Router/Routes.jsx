import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Components/Layout/Mainlayout';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CreateAssignment from '../Pages/CreateAssignment/CreateAssignment';
import AllAssignment from '../Pages/Allassignment/AllAssignment';
import Updatedata from '../Pages/Update/Updatedata';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/createassignment',
                element:<CreateAssignment></CreateAssignment>
            },
            {
                path:'/allassignment',
                element:<AllAssignment></AllAssignment>
            },
            {
                path:'/updatedata/:id',
                element:<Updatedata></Updatedata>,
                loader: ({params})=>fetch(`http://localhost:5000/singleassignment/${params.id}`)
            }
        ]
    }
])
    
export default Routes;