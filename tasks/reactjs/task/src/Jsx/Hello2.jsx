import React from "react";


function Hello2() {

    let name = "malek muzzafar"

    let pesron = {
        name: "malek",
        age: "21",
        city: "ahmedabad"
    }

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    let data2 = <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>help</li>
    </ul>


    return (
        <div>
            <h1>my name is {name} </h1>
            <h1>{pesron.name}</h1>
            <h1>{pesron.age}</h1>
            <h1>{pesron.city}</h1>
            <h1>{data}</h1>
            <h1>{data[5]}</h1>
            <h1>{data[8]}</h1>
            <h1>{data[3]}</h1>
            <h1>{data2}</h1>
        </div>



    )
}

export default Hello2;