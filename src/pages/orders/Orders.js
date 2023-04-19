
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut} = useContext(AuthContext);
    const [orders, setOrder] = useState([]);
    // console.log(orders)


    useEffect(() => {
        fetch(`https://genius-car-sercver.vercel.app/orders?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
               return res.json()
            })
            .then(data => {
                setOrder(data)
                console.log('inside risid',data)
            })
    }, [user?.email, logOut]);

    const hanldeDeleteOrder = _id =>{
        const proceed = window.confirm("are you sure , you want to delete this order?");
        if(proceed){
            fetch(`https://genius-car-sercver.vercel.app/orders/${_id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('you order is deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== _id);
                    setOrder(remaining)
                }
            })

        }
    };

    const handleUpdate = id =>{
        fetch(`https://genius-car-sercver.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id)
                approving.status = 'Approved';
                
                const newOrder = [ approving, ...remaining ];
                setOrder(newOrder);

            }
        })
    }

    return (
        <div>
            {/* <h2>this is orders {orders.length}</h2> */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handleUpdate={handleUpdate} order={order} hanldeDeleteOrder={hanldeDeleteOrder}></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;