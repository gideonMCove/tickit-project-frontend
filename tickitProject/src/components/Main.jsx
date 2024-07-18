import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import EventsList from './EventsList'
import EventDetail from './EventDetail'
import VenueDetail from './VenueDetail'
import ConcertsList from './ConcertsList'
import SportsList from './SportsList'
import ComedyList from './ComedyList'

const Main = (props) => {

    console.log('Main', props)

    return(
        <div className="Main">
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/events/" element={<EventsList events={props.events} venues={props.venues}/>} />
                <Route path="/events/:eventId" element={<EventDetail />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/concerts" element={<ConcertsList />}/>
                <Route path="/sports" element={<SportsList />}/>
                <Route path="/comedy" element={<ComedyList />}/> 
                <Route path="/venue/detail/:venueId" element={<VenueDetail />} />
            </Routes>
        </div>
    )
}

export default Main