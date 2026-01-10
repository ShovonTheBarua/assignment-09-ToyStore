import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between   items-center w-11/12 mx-auto py-3'>
            <h1 className='text-2xl font-bold'>ToyTopia</h1>
            <div className='flex gap-3'>
                <NavLink>Home</NavLink>
                <NavLink>My profile</NavLink>
            </div>
            <button className='btn'>Login</button>
        </div>
        </div>
    );
};

export default Navbar;