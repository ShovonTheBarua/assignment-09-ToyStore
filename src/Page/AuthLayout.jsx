import React from 'react';
import Register from './Register';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;