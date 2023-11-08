import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;