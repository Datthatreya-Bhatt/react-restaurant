import React, {useState} from 'react';



const Cart = ()=>{
    const [cart, setCart] = useState(0);


    return(
        <>
            <button type="button" class="btn btn-danger">
                Your Cart <span class="badge text-bg-secondary">{cart}</span>
            </button>
        </>
    )
};


export default Cart;


