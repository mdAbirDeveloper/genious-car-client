import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import image from '../../../../assets/images/team/1.jpg';
import image2 from '../../../../assets/images/team/2.jpg';
import image3 from '../../../../assets/images/team/3.jpg';

const Teames = () => {
    return (
        <div>
            <p className='text-red-600 text-center font-bold text-xl mt-20'>Team</p>
            <h2 className='text-4xl mt-8 text-center font-bold'>Meet Our Team</h2>
            <p className='text-center font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-6 my-14'>
                <div className='shadow-xl'>
                    <img src={image} alt="" className='rounded my-7' />
                    <h2 className='text-2xl text-center font-bold'>Car Engine Plug</h2>
                    <h4 className='text-xl text-center font-bold '>Engine Expert</h4>
                    <div className='flex gap-10 ml-20 mt-5'>
                        <FaFacebook className='text-3xl text-blue-700'></FaFacebook>
                        <FaTwitter className='text-3xl text-blue-700'></FaTwitter>
                        <FaLinkedinIn className='text-3xl text-blue-700'></FaLinkedinIn>
                        <FaInstagram className='text-3xl text-red-500'></FaInstagram>
                    </div>
                </div>
                <div className='shadow-xl'>
                    <img src={image2} alt="" className='rounded my-7' />
                    <h2 className='text-2xl text-center font-bold'>Car Engine Plug</h2>
                    <h4 className='text-xl text-center font-bold '>Engine Expert</h4>
                    <div className='flex gap-10 ml-20 mt-5'>
                        <FaFacebook className='text-3xl text-blue-700'></FaFacebook>
                        <FaTwitter className='text-3xl text-blue-700'></FaTwitter>
                        <FaLinkedinIn className='text-3xl text-blue-700'></FaLinkedinIn>
                        <FaInstagram className='text-3xl text-red-500'></FaInstagram>
                    </div>
                </div>
                <div className='shadow-xl'>
                    <img src={image3} alt="" className='rounded my-7' />
                    <h2 className='text-2xl text-center font-bold'>Car Engine Plug</h2>
                    <h4 className='text-xl text-center font-bold '>Engine Expert</h4>
                    <div className='flex gap-10 ml-20 mt-5'>
                        <FaFacebook className='text-3xl text-blue-700'></FaFacebook>
                        <FaTwitter className='text-3xl text-blue-700'></FaTwitter>
                        <FaLinkedinIn className='text-3xl text-blue-700'></FaLinkedinIn>
                        <FaInstagram className='text-3xl text-red-500'></FaInstagram>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teames;