import React from 'react';

const SingleProduct = ({ product }) => {
    const { image, product_name, price, description, features } = product;

    return (
        <div className='flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-5 mt-12'>
            <div className='lg:w-1/4 w-full'>
                <img className='w-full h-72 lg:h-56 border rounded-md object-cover' src={image} alt="Product image" />
            </div>

            <div className='lg:w-3/4 w-full'>
                <h2 className='text-2xl text-orange-600 font-semibold'>{product_name}</h2>
                <h4 className='text-lg font-semibold mt-1'>Price: ${price}</h4>
                <h3 className='text-xl font-semibold mt-1'>Features:</h3>
                {
                    features.map((feature, i) => <li key={i} className='list-none my-0'>
                        <p className='pl-4'>{i + 1}. {feature}</p>
                    </li>)
                }
                <div className='text-gray-800 mt-2'> <strong>Description:</strong> {description}</div>
            </div>
        </div>
    );
};

export default SingleProduct;