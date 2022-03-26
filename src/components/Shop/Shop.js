import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import LuckyBtn from '../LuckyBtn/LuckyBtn';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [luckyItem, setLuckyItem] = useState([]);
    console.log('fdfg', luckyItem);
    console.log(carts);
    console.log(products);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    const chooseOne = (carts) => {
        console.log('chooseOne1000', carts);
        var item = carts[Math.floor(Math.random() * carts.length)];
        console.log(item);
        const luckyItem = item;
        setLuckyItem(luckyItem);

        // const { name, img } = item;
        // return item;

    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product)}
                    ></Product>)
                }
            </div>
            {/* <p>{item.id}</p> */}
            <div className='cart-add-container'>
                <h3>Selected Item:{carts.length}</h3>
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                <div>
                    <LuckyBtn
                        chooseOne={() => chooseOne(carts)}
                        luckyItem={luckyItem}
                    >

                    </LuckyBtn>
                </div>
            </div>
        </div>
    );
};

export default Shop;