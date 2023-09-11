import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Explore from './pages/Explore'
import { Route, BrowserRouter,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar  />
      <div style={{height:'80px'}}/>
     <Routes>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="*" element={<NoPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
