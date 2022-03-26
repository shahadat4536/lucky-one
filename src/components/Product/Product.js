import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    // console.log({ product });
    const { name, price, seller, img, id } = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price:৳ {price}</h3>
                <p>Brand: {seller}</p>
            </div>
            <div className='btn-cart-div'>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;