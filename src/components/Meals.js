import React, { useState } from "react";

const meals = [
    { name: 'Sushi', dis: 'Tasty', price: 25 },
    { name: 'Idly', dis: 'Tasty', price: 15 },
    { name: 'Dosa', dis: 'Tasty', price: 30 },
    { name: 'Samosa', dis: 'Tasty', price: 10 }
]

const Meals = () => {
    const [quantity, setQuantity] = useState(1);

    const showMeal = meals.map((el, i) => {
        return (
            <div className="card mb-3" key={i}>
                
                <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <p className="card-text">{el.dis}</p>
                    <h5 className="card-title float-right">RS. {el.price}</h5> {/* Position price to the right */}
                </div>
                <div className="card-footer d-flex justify-content-between"> {/* Make the footer flexible and space-between */}
                    <div>Amount: 
                        <input type='number' value={quantity} style={{ width: '3rem' }} />
                    </div>
                    <div>
                        <input type='button' value='Add Item' className="btn btn-primary btn-sm" />
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
