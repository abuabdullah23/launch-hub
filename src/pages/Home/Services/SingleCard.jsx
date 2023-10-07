import React from 'react';

const SingleCard = ({ service }) => {
    const { id, image, title, price, description } = service;

    return (
        <div className='w-full h-full border border-gray-300 rounded-md'>
            <img className='w-full h-40 object-cover rounded-t-md' src={image} alt="service image" />
            <div className='p-4 flex flex-col gap-[2px] items-start text-left'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='text-lg font-semibold'>${price}</p>
                <p className='text-base'>{description.slice(0, 50)}...</p>
                <button className='w-full py-1 px-3 rounded-full bg-gray-600 mt-2 text-white hover:bg-gray-800 transition-all'>View Details</button>
            </div>
        </div>
    );
};

export default SingleCard;