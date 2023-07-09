import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    return (
        <div className='order-details'>
            <h2>Order Summary: {cart.length} </h2>
            <p>Total Price: {cart.length}</p>
            <p>Total Shipping: {cart.length}</p>
            <p>Grand Total: {cart.length}</p>
        </div>
    );
};

export default Cart;