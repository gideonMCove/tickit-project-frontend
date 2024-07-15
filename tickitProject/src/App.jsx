import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className = "app"> 
      <Header />
      <Nav />
      <Main />
        <h1>Hi</h1>
      <Footer />     
    </div>
  )
}

export default App
