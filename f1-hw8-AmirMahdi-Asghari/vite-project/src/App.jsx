import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './components/ferstpage'
import SelectProvince from './SelectProvince';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WeatherApp></WeatherApp>
    </>
  )
}

export default App
