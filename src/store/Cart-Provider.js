import { useState } from "react";

import CartContext from "./Cart-Context";


const CartProvider = (props)=>{

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const contextObj = {
        items: items,
        totalAmount: totalAmount,
        setTotalAmount: setTotalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    function addItemToCartHandler(item){
        let temp = [...items, item];
        setItems(temp);

    }
   
    function removeItemFromCartHandler(id){
        contextObj.items.forEach((element, i)=>{
            if(element.id === id){
                contextObj.items.splice(i, 1);
            }
        })

    }
    




    return (
        <CartContext.Provider value={contextObj}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;