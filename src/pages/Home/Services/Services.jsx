import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-12'>
            <h3 className='text-center text-2xl text-orange-500 font-semibold'>
                Services
            </h3>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    services.map((service) => <SingleCard
                        key={service.id}
                        service={service}
                    />
                    )
                }
            </div>

        </div>
    );
};

export default Services;