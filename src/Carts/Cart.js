import React, {useState} from 'react';



const Cart = ()=>{
    const [cart, setCart] = useState(0);


    return(
        <>
            <button type="button" className="btn btn-danger">
                Your Cart <span className="badge text-bg-secondary">{cart}</span>
            </button>
        </>
    )
};


export default Cart;


