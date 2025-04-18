import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const configurations = [
        { type: '1 BHK', area: 'Available', link: '#' },
        { type: '2 BHK', area: 'Available', link: '#' },
        { type: 'Commercial Shops', area: 'Limited', link: '#' },
    ];

    return (
        <div className='content grid5 mtop'>
            {configurations.map((item, index) => (
                <div className='box shadow' key={index}>
                    <h4 className='text-lg font-bold'>{item.type}</h4>
                    <p className='text-sm text-gray-600 mb-2'>{item.area}</p>
                    <a href={item.link}>
                        <Link to="/contact">
                            <button className='btn' >Click here</button>
                        </Link>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Card;
