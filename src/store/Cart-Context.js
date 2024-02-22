import React from "react";


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    setTotalAmount: ()=>{},
    addItem: (item)=>{},
    removeItem: (id) =>{}
})


export default CartContext;