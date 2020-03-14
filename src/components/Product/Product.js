import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props.product);
    return (
        <div className="product">
            
                <div className="product_img">
                    <img src={props.product.img} alt=""/>
                </div>

                <div className="product_info">
                    <h3>{props.product.name}</h3>
                    
                    <p> <small>by: {props.product.seller}</small></p>
                    
                    <p> ${props.product.price}</p>
                    
                    <p> <small>Only {props.product.stock} left in stock- Order soon</small></p>
                    <button className="clck_btn" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                </div>
            
        </div>
    );
};

export default Product;