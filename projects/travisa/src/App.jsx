import React from 'react';
import Home from './Website/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Website/Pages/About';
import Service from './Website/Pages/Service';
import Contact from './Website/Pages/Contact';
import Feature from './Website/Pages/Feature';
import Countries from './Website/Pages/Countries';
import Testimonial from './Website/Pages/Testimonial';
import Training from './Website/Pages/Training';
import Notfound from './Website/Pages/Notfound';






function App() {


  return (
    <BrowserRouter>
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/feature' element={<Feature/>}/>
      <Route path='/countries' element={<Countries/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='*' element={<Notfound/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
