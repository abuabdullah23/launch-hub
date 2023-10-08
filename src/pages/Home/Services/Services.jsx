import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-32'>
            <SectionTitle sectionTitle={'Services'} sectionDescription={'Our services encompass everything from strategic planning and consultation to creative marketing, event management, and digital promotion.'} />

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