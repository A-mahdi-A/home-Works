import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heder from "./header/index"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Heder />
    </>
  )
}

export default App
