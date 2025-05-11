import React from 'react'
import './Style.css' // import external css file

function Css() {

    // internal css 
    let internal = {
        background: "blue",
        color: "red",
        border: "2px solid black",
        padding: "10px",
    }
    return (
        <div>
            {/* 1) inline css */}
            {/* 2 ) internal */}
            {/* 3) external  */}

            {/* inline css as a object  */}
            <h1 style={{ background: "red", color: "white", border: "1px solid blue" }}>hello this is inline css as a object</h1>


            {/* internal css  */}
            <h1 style={internal}>hello this is internal css example </h1>


            {/* external css  */}
            <h1 id='h1'>hello this is external css example for use external css give unique id to this tag</h1>
        </div>
    )
}

export default Css

