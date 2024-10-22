import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'


function App() { 

  const BASE_URL = 'http://localhost:8000/'

  const [searchQuery, setSearchQuery] = useState('')
  const [events, setEvents] = useState([])
  const [venues, setVenues] = useState([])

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    console.log(searchQuery)
  }

  const getEvents = async (e) => {
    e.preventDefault()     
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      let eventData = res.data
      console.log('Got all events:', eventData)
      const matchingEvents = eventData.filter(event => event.artist.toLowerCase().includes(searchQuery.toLowerCase()))
      console.log('These events match:', matchingEvents)
      setEvents(matchingEvents)
    } catch (error) {
      console.error('Cannot load events', error)
    }
  }

  const getVenues = async (e) => {
    e.preventDefault()     
    try {
      const res = await axios.get(`${BASE_URL}/venues`)
      let venueData = res.data
      console.log('Got all venues:', venueData)
      const matchingVenues = venueData.filter(venue => venue.name.toLowerCase().includes(searchQuery.toLowerCase()))
      console.log('These venues match:', matchingVenues)
      setVenues(matchingVenues)
    } catch (error) {
      console.error('Cannot load venues', error)
    }
  }

  return (
    <div className = 'app'> 
      <Header />
      <Nav />
      <SearchBar handleChange={handleChange} getEvents={getEvents} getVenues={getVenues}/>
      <Main events={events} venues={venues}/>
      <Footer />     
    </div>
  )
}

export default App
