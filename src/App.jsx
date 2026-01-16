import { useState } from 'react'

import Navbar from '../components/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <div style={{ height: "200vh", paddingTop: "100px", color: "white" }}>
        Scroll page to see floating navbar
      </div>   
    </>
  )
}

export default App
