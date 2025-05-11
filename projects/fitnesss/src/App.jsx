import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Course from './Website/Pages/Course'
import Blog from './Website/Pages/Blog'
import Contact from './Website/Pages/Contact'
import Feature from './Website/Pages/Feature'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Notfound from './Website/Pages/Notfound'
import Dash from './Admin/Pages/Dash'








function App() {


  return (
    <BrowserRouter>
      <div>


        {/* website header  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='*' element={<Notfound />} />


          {/* admin header  */}
          <Route path='/dash' element={<Dash/>} />

        </Routes>
      </div>
    </BrowserRouter>



  )
}

export default App
