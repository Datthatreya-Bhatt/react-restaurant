// Body.js
import React, { useState } from "react";
// import { createPortal } from "react-dom";
import Header from "./Header";
import Summary from "./Summary";
import Meals from "./Meals";
import CartForm from "./CartForm";

function Body() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {cartOpen && (
        <div className="overlay">
          <CartForm  setCartOpen={setCartOpen}/>
        </div>
      )}
      <Summary />
      <Meals />
      
    </>
  );
}

export default Body;
