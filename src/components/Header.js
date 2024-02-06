import React from 'react';


import Cart from './Cart';


const Header = ()=>{
    return(
        <>
            <nav className="navbar bg-danger text-light" >
   
                <h1>React Meals</h1>
                <Cart/>
  
            </nav>
        </>
    )
};


export default Header;
