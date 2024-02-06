import React, {useState} from "react";


const meals = [{name: 'Sushi', dis: 'Tasty', price: 25},
            {name: 'Idly', dis: 'Tasty', price: 15},
            {name: 'Dosa', dis: 'Tasty', price: 30},
            {name: 'Samosa', dis: 'Tasty', price: 10}
]


const Meals = ()=>{
    const [quantity, setQuantity] = useState(1);

    const showMeal = meals.map((el, i)=> {
        return (
            <div key={i}>
                <div className="card-header" ></div>

                
                <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <p className="card-text">{el.dis}</p>
                    <h5 className="card-title">RS. {el.price}</h5>

                </div>

                <div className="card-footer">Amount: 
                    <input type='number' value={quantity} style={{width: '2rem'}}/>
                    <input type='button' value='Add Item' className="btn btn-primary btn-sm"/>
                        
                </div>


            </div>
        )
    })
    return (
        <>
            {showMeal}
        
        </>
    )
};



export default Meals;