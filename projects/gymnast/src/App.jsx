import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Class from './Website/Pages/Class'
import Feature from './Website/Pages/Feature'
import Contact from './Website/Pages/Contact'
import Bloggrid from './Website/Pages/Bloggrid'
import Blogdetail from './Website/Pages/Blogdetail'
import Classmanage from './Admin/Pages/Classmanage'
import Teammanage from './Admin/Pages/Teammanage'
import Teamadd from './Admin/Pages/Teamadd'
import Classadd from './Admin/Pages/Classadd'
import Alogin from './Admin/Pages/Alogin'
import Protectedroute from './Admin/Pages/Protectedroute'
import Dashboard from './Admin/Pages/Dashboard'
import Register from './Website/Pages/Register'
import Login from './Website/Pages/Login'



function App() {

  const [ loggedInUser, setLoggedInUser]= useState(null)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user side routing */}
          <Route path='/' element={<Home loggedInUser={loggedInUser}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/class' element={<Class />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bloggrid' element={<Bloggrid />} />
          <Route path='/blogdetail' element={<Blogdetail />} />


          {/* admin side routing */}
          
          <Route path='/classmanage' element={<Classmanage />} />
          <Route path='/teammanage' element={<Teammanage />} />
          <Route path='/teamadd' element={<Teamadd />} />
          <Route path='/classadd' element={<Classadd />} />
          <Route path='/alogin' element={<Alogin />} />
          <Route path='/dash' element={<Protectedroute><Dashboard/></Protectedroute>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
