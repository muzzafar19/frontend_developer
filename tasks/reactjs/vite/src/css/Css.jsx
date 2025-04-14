import React from "react";

import './style.css'




function Css() {

    // internal css 
    let internal = {
        background: "blue",
        color: "red",
        border: "10px",
        borderRadius: "10px"
    }
    return (
        <div>
            {/* {inline css} */}
            {/* {internal css} */}
            {/* {external css} */}

            {/* {inline css asa object } */}
            <h1 style={{ background: "red", color: "blue", border: "5px", borderRadius: "5px" }}>my name is malek muzzafar</h1>

            {/* {internal css} */}
            <h1 style={internal}>my name is zafar</h1>

            {/* {external css} */}
            <div id="external">
                hello this is external css
            </div>

            <div className="main"></div>
        </div>
    )
}
export default Css;