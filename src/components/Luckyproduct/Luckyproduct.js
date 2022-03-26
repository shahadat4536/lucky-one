import React from 'react';
import './Luckyproduct.css'
const Luckyproduct = ({ luckyItem }) => {
    const { img, name } = luckyItem
    return (
        <div className='lucky-product'>
            <img src={img} alt="" />
            <p>{name}</p>

        </div>
    );
};

export default Luckyproduct;