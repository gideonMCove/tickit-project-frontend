import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import EventsList from './EventsList'
import EventDetail from './EventDetail'
import VenueDetail from './VenueDetail'

const Main = (props) => {

    console.log('Main', props)

    return(
        <div className="Main">
            <Routes>

                <Route path="/" element = {<Home />}/>
                <Route path="/events/" element={<EventsList events={props.events}/>} />
                <Route path="/events/:eventId" element={<EventDetail />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/concerts" element={<Home />}/>
                <Route path="/sports" element={<Home />}/>
                <Route path="/comedy" element={<Home />}/> 
                <Route path="/venue/detail/:venueId" element={<VenueDetail />} />
            </Routes>
        </div>
    )
}

export default Main