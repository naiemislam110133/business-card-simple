import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart} = props.handleAddToCart;
    const {id, img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className="product-name">{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturing: {seller}</p>
            <p>Rating: {ratings} Start</p>
            </div>
            <button onClick={ () => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;