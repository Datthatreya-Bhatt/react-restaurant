import React from "react";
import  {createPortal} from "react-dom";

import Header from "./Header";
import Summary from "./Summary";
import Meals from "./Meals";
import CartForm from "./CartForm";

const modal = document.getElementById('modal');


function Body() {
  return (
    <>
    
          <Header/>
         
          {createPortal(<CartForm/>, modal)}
         
          <Summary/>
          <div className="card col-mb-3" style={{width: '250rem'}}>
            <Meals/>
          </div>


    </>
    
  );
}

export default Body;
