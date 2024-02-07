import React from 'react';


import Cart from './Cart';


const Header = ({cartOpen, setCartOpen})=>{
    return(
        <>
            <nav className="navbar bg-danger text-light" >
   
                <h1>React Meals</h1>
                <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
  
            </nav>
        </>
    )
};


export default Header;
