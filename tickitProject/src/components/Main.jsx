import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import EventList from './EventsList'
import EventDetail from './EventDetail'
import VenueDetail from './VenueDetail'

const Main = () => {
    return(
        <div className="Main">
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/events/" element={<EventList />} />
                <Route path="/events/:id" element={<EventDetail />}/>
                <Route path="/venue/detail/:venueId" element={<VenueDetail />} />
            </Routes>
        </div>
    )
}

export default Main