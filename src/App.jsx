import { useState } from 'react'
// import Gallery from './Components/Gallery.jsx'
import UseState from "./learning/UseState"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Gallery /> */}
      <UseState />
    </>
  )
}

export default App
