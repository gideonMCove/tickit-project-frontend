import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import EventsList from './EventsList'
import EventDetail from './EventDetail'
import VenueDetail from './VenueDetail'
import ConcertsList from './ConcertsList'
import SportsList from './SportsList'
import ComedyList from './ComedyList'
import './Main.css'

const Main = (props) => {

    console.log('Main', props)

    return(
        <div className="Main">
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/results" element={<EventsList events={props.events} venues={props.venues}/>} />
                <Route path="/events/:eventId" element={<EventDetail />}/>
                <Route path="/venues/:venueId" element={<VenueDetail />} />
                <Route path="/concerts" element={<ConcertsList />}/>
                <Route path="/sports" element={<SportsList />}/>
                <Route path="/comedy" element={<ComedyList />}/>                 
            </Routes>
        </div>
    )
}

export default Main