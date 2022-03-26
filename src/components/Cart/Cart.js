import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log("trrr", { cart });
    const { name, img } = cart;
    // console.log(name);
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button>
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-minus" /> */}
                <FontAwesomeIcon
                    icon={faCircleMinus}
                ></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Cart;