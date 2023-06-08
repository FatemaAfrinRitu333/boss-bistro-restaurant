import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const {LogOut} = useAuth();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: `http://localhost:5000/`
    });

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.request.use(
            (response) => response,
            async (error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await LogOut();
                    navigate('/login');
                }
                return Promise.reject(error)
            }
        );
    }, [LogOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;