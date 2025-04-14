import { useState } from 'react'
import Class_compo from './Component/Class_compo'
import Function_compo from './Component/Function-compo'
import Main_compo from './Component/Main_compo'
import Hello from './jsx/hello'
import Hello2 from './jsx/hello2'
import Css from './css/Css'
import Main_props from './Props/Main_props'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Class_compo/>
      <Function_compo/> */}
     {/* <Main_compo/> */}
     {/* <Hello/>
     <Hello2/> */}
     {/* <Css/> */}
     <Main_props />
    </div>
  )
}

export default App
