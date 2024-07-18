import React from 'react'
import logo from '../../tickit-high-resolution-logo.jpeg'
import './Home.css'

const Home = () => {

    return (
        <div>
              <img src={logo} alt='Tickit Logo' className='home-logo' />
        </div>
    )
}

export default Home