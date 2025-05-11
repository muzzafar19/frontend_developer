import React from "react";

const Fruitlist = () => {
    const fruits = ['apple', 'banana', 'mango', 'pinapple']


    return (
        <div>
            <h2>fruit list</h2>
            <ul>
                {fruits.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </div>
    )

};



export default Fruitlist;