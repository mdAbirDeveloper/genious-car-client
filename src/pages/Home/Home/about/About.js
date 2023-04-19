import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={person} alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                        <img  src={parts} alt='' className="absolute w-3/5 right-5 top-2/4 border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-red-700 font-bold'>About Us</p>
                        <h1 className="text-5xl font-bold my-4">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;