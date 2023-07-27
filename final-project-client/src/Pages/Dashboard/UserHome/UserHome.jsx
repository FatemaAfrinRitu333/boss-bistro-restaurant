import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {

    const {user} = useAuth();

    return (
        <div className='w-full md:w-11/12 my-6 mx-auto'>
            <h2 className='text-xl text-left uppercase'>Hi, Welcome Back {user.displayName}</h2>
        </div>
    );
};

export default UserHome;