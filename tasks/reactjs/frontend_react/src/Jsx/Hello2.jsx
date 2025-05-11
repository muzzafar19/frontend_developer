// varibale 

import React from 'react'

function Hello2() {

    let name = "muzzafar"

    let data = <ul>
        <li>muzzafar</li>
        <li>tosif</li>
        <li>mahir</li>
        <li>salim</li>
    </ul>


    let person = {
        name: "muzzafar",
        age: 21,
        city: "ahmedabad",
        country: "india",
        ismarried: false,
        hobbies: ["cricket", "football", "music"],
        address: {
            street: "168 muslaman vas",
            city: "ahmedabad",
            state: "gujarat",
            village: "nandej",
            zipcode: 382435,
        }
    }
    return (
        <div>
            <h1>hello name is :- {name}</h1>

            <h1>hello this is brothers name data:-{data}</h1>

            <h1>this is person's information in object </h1>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <h2>{person.address.city}</h2>
            <h2>{person.address.state}</h2>
            <h2>{person.address.street}</h2>
            <h2>{person.address.village}</h2>
            <h2>{person.address.zipcode}</h2>
            <h2>{person.country}</h2>
            <h2>{person.hobbies}</h2>






        </div>
    )
}

export default Hello2
