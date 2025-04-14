import React from "react";

import './Style.css'


function Css() {

    let internal = {
        background: "blue",
        color: "red",
        textAlign: "center",
        border: "5px solid grey",
    }
    return (
        <div>
            {/* // inline css */}
            <h1 style={{ background: "red", border: "2px solid black", color: "blue", textAlign: "center", }}>hello this is inline css</h1>
            {/* //  internal css as a object */}
            <h1 style={internal}>this is internal css</h1>

            {/* external css */}
            <h1 id="external">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi deleniti praesentium molestiae quasi accusamus dolore rem atque vel consequatur. Saepe omnis, laborum et fugiat ipsa veritatis quis temporibus. Odio, quasi!</h1>

        </div>

    )
}
export default Css;