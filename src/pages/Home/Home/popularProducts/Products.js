
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [pData, setPData] = useState([]);
    useEffect(() => {
        fetch('produch.json')
            .then(res => res.json())
            .then(data => setPData(data))
    }, [])
    return (
        <div>
            <p className='text-orange-700 text-4xl font-bold mt-20 text-center'>Popular Products</p>
            <h2 className='text-6xl text-center my-9 font-bold'>Browse Our Products</h2>
            <p className='text-center font-bold mb-9'>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    pData.map(data => <Product key={data.id} data={data}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;