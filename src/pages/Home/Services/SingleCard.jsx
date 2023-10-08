import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ service }) => {
    const { id, image, title, price, description } = service;

    return (
        <div className='w-full h-full border border-gray-300 rounded-md'>
            <img className='w-full h-36 object-cover rounded-t-md' src={image} alt="service image" />
            <div className='p-3 flex flex-col gap-[2px] items-start text-left'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='text-lg font-semibold text-orange-500'>Price: ${price}</p>
                <p className='text-base'>{description.slice(0, 50)}...</p>
                <Link
                    to={`/service/details/${id}`}
                    className='w-full py-1 px-3 text-center rounded-full bg-gray-600 mt-2 text-white hover:bg-gray-800 transition-all'>View Details</Link>
            </div>
        </div>
    );
};

export default SingleCard;