import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Components/Layout/Mainlayout';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

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
           
        ]
    }
])
    
export default Routes;