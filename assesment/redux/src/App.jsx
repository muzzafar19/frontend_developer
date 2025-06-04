import React from "react"
import { ChecklistProvider } from "./ChecklistContext.jsx"
import Checklist from "./Checklist.jsx"

function App() {


  return (

    <ChecklistProvider>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Checklist App</h1>
        <Checklist />
      </div>
    </ChecklistProvider>

  )
}

export default App
