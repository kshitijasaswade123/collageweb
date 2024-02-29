import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';


import Navbar from './Coponent/Navbar'
import Hero from './Coponent/Hero'
import About from './Coponent/About'
import Services from './Coponent/Services'
import Contact from './Coponent/Contact'
import Footer from './Coponent/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
<About/>
<Services/>
<Contact/>
<Footer/>

    </>
  )
}

export default App
