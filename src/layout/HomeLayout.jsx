import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Slider from '../Component/Slider';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;