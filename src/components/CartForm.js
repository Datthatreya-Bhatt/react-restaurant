// CartForm.js
import React, { useContext } from "react";

import "./styles.css"; // Import the CSS file for styling


import CartContext from "../store/Cart-Context";


const CartForm = ({setCartOpen}) => {


  const cartCtx = useContext(CartContext);


  function addButtonHandler(id){
    cartCtx.items.forEach((element)=>{
      if(element.id === id){
        element.quantity++;
        cartCtx.setTotalAmount(cartCtx.totalAmount+element.price);
      }
    })

  }

  function reduceButtonHandler(id){
    cartCtx.items.forEach((element, i)=>{
      if(element.id === id && element.quantity > 1){
        element.quantity--;
        cartCtx.setTotalAmount(cartCtx.totalAmount-element.price);
      }
      else if(element.id === id && element.quantity <= 1 ){
        cartCtx.items.splice(i, 1);
        cartCtx.setTotalAmount(cartCtx.totalAmount - element.price);
      }
    })

  }

  return (
    <div className="card text-bg-light mb-3" style={{ width: "20rem" }}>
      <div className="card-header">Cart</div>
      <div className="card-body">
        <div className="row">
          {cartCtx.items.map((el) => {
            return (
              <div className="col-md-12" key={el.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{el.name}</h5>
                    <h5 className="card-title">RS. {el.price}</h5>
                    <h6 className="card-title">QTY. {el.quantity}</h6>
                  </div>
                  <div>
                    <h4 className="card-title btn btn-primary btn-sm" onClick={() => { addButtonHandler(el.id) }}>+</h4>
                    <h4 className="card-title btn btn-primary btn-sm" onClick={() => { reduceButtonHandler(el.id) }}>-</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card-footer">
        <h3>Total Amount</h3>
        <h4>{cartCtx.totalAmount}</h4>
        <button type="button" className="btn btn-danger" onClick={() => setCartOpen(false)}>
          Cancel
        </button>
        <button type="button" className="btn btn-danger">
          Order
        </button>
      </div>
    </div>

  );
};

export default CartForm;
