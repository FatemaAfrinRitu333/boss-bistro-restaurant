import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const ManageItems = () => {
    return (
        <div className='w-full mx-auto mb-9 h-screen'>
            <Helmet>
                <title>Boss | Manage All Items</title>
            </Helmet>
            <SectionTitle subHeading={'hurry up'} heading={'Manage all items'}></SectionTitle>
            <div>
                
            </div>
        </div>
    );
};

export default ManageItems;