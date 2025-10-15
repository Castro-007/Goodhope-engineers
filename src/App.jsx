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
import ScrollToTop from './Components/ScrollToTop'
import ProjectPost from './Pages/ProjectPost'


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
        <Route path='/Projects/:slug' element={<ProjectPost />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
