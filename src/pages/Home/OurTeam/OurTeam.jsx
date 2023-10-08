import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurTeam = () => {
    return (
        <div className='mt-32'>
            <SectionTitle sectionTitle={'Our Team'} sectionDescription={`At LaunchHub, our success is driven by the exceptional team of professionals who are passionate about turning your product launch dreams into reality.`}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12'>
                <div className='text-center flex flex-col gap-2'>
                    <img className='w-full h-72 object-cover object-top rounded border-2' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="Member Image" />
                    <h2 className='text-2xl font-semibold'>Gary Elliott</h2>
                    <p className='text-gray-600 text-lg'>Graphic Designer</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <img className='w-full h-72 object-cover object-top rounded border-2' src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="Member Image" />
                    <h2 className='text-2xl font-semibold'>Jeffrey Allen</h2>
                    <p className='text-gray-600 text-lg'>Social Media Manager</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <img className='w-full h-72 object-cover object-top rounded border-2' src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg" alt="Member Image" />
                    <h2 className='text-2xl font-semibold'>Albert Castro</h2>
                    <p className='text-gray-600 text-lg'>Web Developer</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <img className='w-full h-72 object-cover object-top rounded border-2' src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg" alt="Member Image" />
                    <h2 className='text-2xl font-semibold'>Mark John</h2>
                    <p className='text-gray-600 text-lg'>Event Manager</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;