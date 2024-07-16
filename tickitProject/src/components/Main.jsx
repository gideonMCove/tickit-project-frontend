import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import EventDetail from './EventDetail'
import VenueDetail from './VenueDetail'

const Main = () => {
    return(
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/concerts" element={<Home />}/>
                <Route path="/sports" element={<Home />}/>
                <Route path="/comedy" element={<Home />}/>
                <Route path="/events/" element={<EventDetail />} />
                <Route path="/venue/detail/:venueId" element={<VenueDetail />} />
            </Routes>
        </div>
    )
}

export default Main