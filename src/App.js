import React, { useEffect } from 'react'
import Home from './components/Home'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Mern from './components/Mern'
import Python from './components/Python'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mern-fullstack' element={<Mern/>}></Route>
      <Route path='/java-fullstack' element={<Home/>}></Route>
      <Route path='/Python-fullstack' element={<Python/>}></Route>
    </Routes>
    </BrowserRouter>
          <Footer/>
    </div>
  )
}

export default App
