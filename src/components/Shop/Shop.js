import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const Data= fakeData.slice(0,10);
    const [products, setProducts]= useState(Data);

    const [cart, setCart]= useState([]);

    const handleAddProduct= (product) =>{
        const newCart= [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop_container">
            

            <div className="product_container">
                <ul>
                    {
                        products.map(product => <Product 
                            product={product}
                            handleAddProduct={handleAddProduct}
                             ></Product>)
                    }
                </ul>
            </div>

            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>


    );
};

export default Shop;