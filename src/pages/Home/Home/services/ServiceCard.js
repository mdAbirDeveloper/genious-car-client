import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({servic}) => {
    const {_id, img, price, detail, name} = servic;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-red-500'>Price:  ${price}</p>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <Link to={`checkout/${_id}`}>
                            <button className="btn btn-outline btn-warnign">Go To Reapair</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;