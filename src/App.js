import React from "react";

import Body from "./components/Body";
import CartProvider from "./store/Cart-Provider";

function App() {
  return (
    <CartProvider>
      <Body/>
    </CartProvider>
  
    
  );
}

export default App;
