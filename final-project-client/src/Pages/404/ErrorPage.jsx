import React from 'react';
import { useRouteError } from 'react-router-dom';
import bg from '../../assets/404.gif'

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className='h-screen w-screen'>
            <img className='w-full' src={bg} alt="" />
        </div>
    );
};

export default ErrorPage;