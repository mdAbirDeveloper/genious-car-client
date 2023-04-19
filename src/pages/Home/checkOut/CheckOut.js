import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';

const CheckOut = () => {
    const { name, _id, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const nameU = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregisterd';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            id : _id,
            serviceName: name,
            price,
            customer: nameU,
            phone,
            email,
            message
        }

        console.log(order)


            fetch('https://genius-car-sercver.vercel.app/orders', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        alert('your order is send successfully')
                        form.reset();
                    }
                    console.log(data)
                })
                .catch(err => console.log(err))
        
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className='text-4xl'>YOu Are About To Order: {name}</h2>
                <h4 className='text-3xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-12" placeholder="Enter your message"></textarea>
                <input className='btn mb-10' type="submit" name="" value="Pleace Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;