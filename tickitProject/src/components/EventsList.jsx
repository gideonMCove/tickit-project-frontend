import { useNavigate } from 'react-router-dom'

export default function EventsList (props) {

    console.log(props)

     let navigate = useNavigate()

    const showEvent = (index) => {
        navigate(`/events/${index}`)
    }

    const showVenue = (index) => {
        navigate(`/venue/${index}`)
    }    

    return (
        <div className = "EventList">
            <h1>Search results</h1>
            <h2>Events</h2>
            {
                props.events.length > 0 ? (
                    
                    props.events.map((event, index) => (
                        
                        <h1 className="map" key ={index} onClick={()=>showEvent(event.id)} >
                            {console.log('event',event)}

                            <ul>
                                {event.artist}
                            </ul>
                        </h1>
                    ))
                ) : (
                    <h2>Loading events</h2>
                )
            }
            <h2>Venues</h2>
            {
                props.venues.length > 0 ? (
                    
                    props.venues.map((venue, index) => (
                        
                        <h1 className="map" key ={index} onClick={()=>showVenue(venue.id)} >
                            {console.log('venue',venue)}

                            <ul>
                                {venue.name}
                            </ul>
                        </h1>
                    ))
                ) : (
                    <h2>Loading venues</h2>
                )
            }

        </div>
    )
}