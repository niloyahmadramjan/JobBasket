import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto plus-jakarta-sans'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-220px)] mt-15">
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;