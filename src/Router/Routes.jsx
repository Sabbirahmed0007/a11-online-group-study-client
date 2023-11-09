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
import MyAssignment from '../Pages/MyAssignment/MyAssignment';
import PrivateRoutes from './PrivateRoutes';
import Details from '../Pages/Details/Details';

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
                element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path:'/allassignment',
                element:<AllAssignment></AllAssignment>
            },
            {
                path:'/updatedata/:id',
                element:<PrivateRoutes><Updatedata></Updatedata></PrivateRoutes>,
                loader: ({params})=>fetch(`https://online-group-study-server-peyslyaw1-sabbirahmed0007.vercel.app/singleassignment/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: ({params})=>fetch(`https://online-group-study-server-peyslyaw1-sabbirahmed0007.vercel.app/singleassignment/${params.id}`)
            },
            {
                path:'/myassignments',
                element:<PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>
            }
        ]
    }
])
    
export default Routes;