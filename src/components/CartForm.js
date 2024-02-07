// CartForm.js
import React from "react";
import "./styles.css"; // Import the CSS file for styling

const CartForm = ({setCartOpen}) => {
  const dummy = [{ name: 'sushi', price: 10 }];

  return (
    <>
      <div className="overlay">
        <div className="card text-bg-light mb-3" style={{ width: "20rem" }}>
          <div className="card-header">Cart</div>
          <div className="card-body">
            <h5 className="card-title">{dummy[0].name}</h5>
            <h5 className="card-title">RS. {dummy[0].price}</h5>
          </div>
          <div className="card-footer">
            <h3>Total Amount</h3>
            <h4>20</h4>
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
