import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminHome = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {data: stats={}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async ()=>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className='w-full mb-9'>
            <h2 className='text-3xl uppercase'>Hi, Welcome Back {user?.displayName}</h2>
        </div>
    );
};

export default AdminHome;