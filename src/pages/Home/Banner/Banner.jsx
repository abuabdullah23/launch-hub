import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative' data-aos="fade-up" data-aos-duration="1000">
            <img className='w-full h-[336px] lg:h-[512px] object-cover' src="https://i.ibb.co/998kcg7/launch-hub-banner1.jpg" alt="Banner Image" />

            <div className='w-full h-full bg-gradient-to-b from-[#000000] to-[#111155b9] absolute top-0'>
                <div className='w-full absolute top-1/2 left-0 -translate-y-1/2'>
                    <div className='text-white w-full flex flex-col items-center gap-5 px-8 md:mpx-12 lg:px-20'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-center'>Empowering Product Launches</h2>
                        <p className='text-center text-base lg:text-2xl text-gray-200'>With Empowering Product Launches, we aim to provide you with the confidence and capability to take your product to the next level.</p>
                        <Link to={'/about'} className='py-2 px-6 rounded-full bg-orange-600 hover:bg-gray-900 transition-all border hover:border-orange-600 text-lg font-semibold flex items-center gap-2 hover:gap-3'>
                            <span>Know More</span>
                            <span><BiRightArrowAlt /></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;