import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise)

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const handleAddCartProducts = (id) => {
        const updateProducts = [...cartProducts, id];
        setCartProducts(updateProducts);
        localStorage.setItem("cart", JSON.stringify(updateProducts)); // ✅ fix
    }
    // const handleAddCartProducts = (id) => {
    //     if (!cartProducts.includes(id)) {
    //         const updateProducts = [...cartProducts, id];
    //         console.log(updateProducts)
    //         setCartProducts(updateProducts);
    //         localStorage.setItem("cart", JSON.stringify(updateProducts));
    //     }
    // }
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