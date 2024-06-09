import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destinations from './Pages/Destinations/Destinations'
import Trips from './Pages/Trips/Trips'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact Us/Contact Us'
import Footer from './Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/Contact Us" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
