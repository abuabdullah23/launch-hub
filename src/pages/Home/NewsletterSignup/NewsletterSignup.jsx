import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const NewsletterSignup = () => {
    return (
        <div className='mt-32'>
            <SectionTitle sectionTitle={'Newsletter Signup'} sectionDescription={`Join our newsletter to stay informed about the latest industry trends, expert insights, and exclusive updates. Be the first to know about upcoming product launches and events.`} />

            <div className='mt-12 text-center'>
                <h2 className='text-xl font-semibold'>{`"Stay In the Loop with Our Newsletter"`}</h2>
                <div className='mt-5'>
                    <input type="email" placeholder='your email' className='py-2 px-5 rounded-l-lg border border-gray-400 focus:outline-gray-700' />
                    <button className='py-2 px-5 rounded-r-lg bg-gray-800 hover:bg-gray-600 text-gray-50 border border-gray-700 transition-all'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;