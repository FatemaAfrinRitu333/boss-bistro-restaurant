import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='w-full flex mx-auto justify-center items-center h-screen'>
            <progress className="progress w-4/5 bg-primary"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;