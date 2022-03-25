import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    console.log({ product });
    const { name, price, seller, img } = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Product;