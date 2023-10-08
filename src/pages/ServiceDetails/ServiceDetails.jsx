import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const allServices = useLoaderData();
    const { id } = useParams();
    const data = allServices.find((s) => s.id === parseInt(id));
    const { image, title, price, description } = data;

    return (
        <div className='my-16'>
            <img className='w-full h-96 rounded object-cover' src={image} alt="Service Image" />
            <div className='flex flex-col gap-2 mt-5'>
                <div className='lg:flex items-center justify-between'>
                    <h2 className='text-3xl font-semibold text-gray-800'>{title}</h2>
                    <h4 className='text-orange-500 text-lg font-semibold'>Price: ${price}</h4>
                </div>
                <p className='text-justify text-gray-600 text-lg'><strong className='text-gray-700'>Description:</strong> {description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;