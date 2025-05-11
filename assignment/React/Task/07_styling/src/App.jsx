import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import Shop from "./Website/Pages/Shop";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Contact from "./Website/Pages/Contact";
import Cart from "./Website/Pages/Cart";
import Checkout from "./Website/Pages/Checkout";




function App() {


  return (
    <BrowserRouter>
    <div>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
