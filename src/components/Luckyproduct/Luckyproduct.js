import React from 'react';
import './LuckyProduct.css'
const LuckyProduct = ({ luckyItem }) => {
    const { img, name } = luckyItem
    return (
        <div className='lucky-product'>
            <img src={img} alt="" />
            <p>{name}</p>

        </div>
    );
};

export default LuckyProduct;