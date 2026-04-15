import React from 'react';
import './Bottle.css'
// isAvailable
const Bottle = ({ bottle, handleAddCartProducts }) => {
    const { name, brand, capacity, price, image } = bottle
    return (
        <div className='bottle'>
            <div>
                <img src={image} alt="" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Brand: {brand}</h3>
            <h3>Capacity: {capacity}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddCartProducts(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;