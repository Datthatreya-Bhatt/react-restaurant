import React, { useState, useContext } from "react";

import CartContext from "../store/Cart-Context";

const meals = [{id:1, name: 'Sushi', dis: 'Tasty', price: 25, quantity: 1 },
{id:2, name: 'Idly', dis: 'Tasty', price: 15, quantity: 1  },
{id:3, name: 'Dosa', dis: 'Tasty', price: 30, quantity: 1  },
{id:4, name: 'Samosa', dis: 'Tasty', price: 10, quantity: 1  }]

const Meals = () => {
    const [quantity, setQuantity] = useState(1);

    const cartCtx = useContext(CartContext)

    const showMeal = meals.map((element) => {

       

        const updateCart = (item) => {
            console.log(item);
            let total = 0;
            let tag = true;
            cartCtx.items.forEach((el)=>{
                if(el.name === item.name){
                    el.quantity += Number(quantity);
                    setQuantity(1);
                    tag = false; 
                }
                console.log(el)
                total+= el.price * el.quantity;

            });

            if(tag){
                item.quantity = Number(quantity);
                cartCtx.addItem(item);
                total += item.price * Number(quantity);
                setQuantity(1);
               
            }
            console.log(total);

            cartCtx.setTotalAmount(total);


        }



        return (
            <div className="card mb-3" key={element.id}>
                
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.dis}</p>
                    <h5 className="card-title float-right">RS. {element.price}</h5> {/* Position price to the right */}
                </div>
                <div className="card-footer d-flex justify-content-between"> {/* Make the footer flexible and space-between */}
                    <div> Amount: 
                        <input type='number' defaultValue={1} style={{ width: '3rem' }} onChange={(e)=> setQuantity(e.target.value) }/>
                    </div>
                    <div>
                        <input type='button' value='Add Item' className="btn btn-primary btn-sm" onClick ={ () => updateCart(element)}/>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {showMeal}
                </div>
            </div>
        </div>
    )
};

export default Meals;
