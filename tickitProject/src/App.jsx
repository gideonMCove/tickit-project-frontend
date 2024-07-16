import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App() { 

  const BASE_URL = 'http://localhost:8000/'

  return (
    <div className = 'app'> 
      <Header />
      <Nav />
      <Main />
      <Footer />     
    </div>
  )
}

export default App
