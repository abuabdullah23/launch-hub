import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-4 border-dashed border-orange-500 rounded-full animate-spin mt-5'></div>
            <p className='text-7xl font-thin'>loading...</p>
            
        </div>
    );
};

export default LoadingSpinner;