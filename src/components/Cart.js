import React, {useState} from 'react';



const Cart = ({setCartOpen})=>{
    const [cart, setCart] = useState(0);


    return(
        <>
            <button type="button" className="btn btn-primary" onClick={() => setCartOpen(true)}>
                Your Cart <span className="badge text-bg-secondary">{cart}</span>
            </button>

           
        </>
    )
};


export default Cart;


