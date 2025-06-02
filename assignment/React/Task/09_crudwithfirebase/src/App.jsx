import React from "react"
import MyState from "./Context/Data/Mystate"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AddProduct from "./Pages/Addproduct"
import UpdateProduct from "./Pages/Updateproduct"



function App() {

  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App
