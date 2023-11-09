import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <div className='text-center w-11/12 mx-auto my-40'><i className='loading loading-bars font-bold text-3xl  '></i></div>
    }

    if(user?.email){
        return children ;
    }



    return <Navigate state={location.pathname} to={'/login'} replace />;
};

export default PrivateRoutes;