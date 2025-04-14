import React from "react";


// variable

function Hello2() {

    let name = "malek muzzafar";


    let person = {
        name : "malek",
        age: 21,
        city: "ahmedabad"
    }


    let data = <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>help</li>
    </ul>
  console.log(data)

    return (
        <div>
            <h1>hello 2 compo</h1>
            <h1>{name}</h1>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.city}</h1>
            {data}

            {
// javacript allow
console.log(person.name)
            }
        </div>
    )
}

export default Hello2;