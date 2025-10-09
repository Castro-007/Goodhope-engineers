import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Services from './Pages/Services'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'


function App() {


  return (
    <div className="">
        <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
