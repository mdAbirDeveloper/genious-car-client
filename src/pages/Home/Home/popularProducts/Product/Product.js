import React from 'react';
import { FaStar } from "react-icons/fa";

const Product = ({ data }) => {
    const { price, name, img } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                        <div className='flex'>
                            <FaStar className=' text-2xl text-yellow-500'></FaStar>
                            <FaStar className=' text-2xl text-yellow-500'></FaStar>
                            <FaStar className=' text-2xl text-yellow-500'></FaStar>
                            <FaStar className=' text-2xl text-yellow-500'></FaStar>
                            <FaStar className=' text-2xl text-yellow-500'></FaStar>
                        </div>
                    <h2 className="card-title">
                        <>
                            {name}
                        </>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-red-500'>Price:  ${price}</p>

                </div>
            </div>
        </div>
    );
};

export default Product;