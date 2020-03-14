import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart= props.cart;
    let total=0;
    
    for (let i=0; i< cart.length ; i++){

        const pro= cart[i];
        total+= pro.price;
    }

    
    let newTotal=0;
    newTotal= (total).toFixed(2);


    let shipping, ship=0;

    if(total > 30 && total < 49){
        ship= 4.99;
    }

    else if( total > 50){
        ship= 7.99;
    }

    shipping= (ship).toFixed(2);

    let taxAmount=0;
    taxAmount= (total* .01).toFixed(2);
    
    let grandTotal=0;

    grandTotal= (Number(taxAmount) + Number(shipping) + Number(newTotal)).toFixed(2);
    
    
    return (
        
        <div >
            <div className="cart_header">
                <h2>Order Summary</h2>
                <h4>Items Ordered: {cart.length} </h4>
            </div>

            <div className="cart_info">
                <p>Shipping and Handling: {shipping}</p>
                <p>Total before Tax: {newTotal}</p>
                <p>Estimated Tax: {taxAmount}</p>
            </div>

            <div className="cart_total">
                <h3>Order Total: {grandTotal}</h3>
                <button>Review your order</button>
            </div>
        </div>
    );
};

export default Cart;