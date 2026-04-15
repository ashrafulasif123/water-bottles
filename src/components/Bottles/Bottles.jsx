import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise)
    
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || [])
    const handleAddCartProducts = (bottle) =>{
        const updateCartProducts = [...cartProducts, bottle]
        setCartProducts(updateCartProducts)
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }
    // console.log(bottles)
    return (
        <div>
            <h2>Total Bottle: {bottles.length}</h2>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCartProducts={handleAddCartProducts}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;