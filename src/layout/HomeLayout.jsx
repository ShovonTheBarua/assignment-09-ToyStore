import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Slider from '../Component/Slider';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Component/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
              {state == "loading" ? <Loading/> : <Outlet></Outlet> }  

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;