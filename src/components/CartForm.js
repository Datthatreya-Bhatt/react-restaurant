// CartForm.js
import React, { useContext } from "react";

import "./styles.css"; // Import the CSS file for styling


import CartContext from "../store/Cart-Context";


const CartForm = ({setCartOpen}) => {


  const cartCtx = useContext(CartContext);

  return (
    <>
      <div className="overlay">
        <div className="card text-bg-light mb-3" style={{ width: "20rem" }}>
          <div className="card-header">Cart</div>
          {/* <div className="card-body"> */}
            {cartCtx.items.map((el)=>{
             
              return <div className="card-body" key={el.id}>
                <h5 className="card-title">{el.name}</h5>
                <h5 className="card-title">RS. {el.price}</h5>

              </div>
            })}
            
            

          {/* </div> */}
          <div className="card-footer">
            <h3>Total Amount</h3>
            <h4>{cartCtx.totalAmount}</h4>
            <button type="button" className="btn btn-danger" onClick={()=> setCartOpen(false)}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartForm;
