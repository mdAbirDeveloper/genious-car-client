
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);

    useEffect(()=>{
        fetch(`https://genius-car-sercver-sah-jalal.vercel.app/services?order=${ isAsc ? 'asc' : 'dsc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[isAsc])
    return (
        <div>
            <div className='text-center my-9'>
                <p className="text-2xl text-orange-700">Services</p>
                <h3 className='text-4xl font-bold'>Our Services Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable. </p>
                 <button className='btn btn-primary' onClick={() => {setIsAsc(!isAsc)}}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(servic => <ServiceCard key={servic._id} servic={servic}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;