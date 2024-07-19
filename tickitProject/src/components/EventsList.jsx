import { useNavigate } from 'react-router-dom'
import './EventList.css'

export default function EventsList (props) {

    console.log(props)

     let navigate = useNavigate()

    const showEvent = (index) => {
        navigate(`/events/${index}`)
    }

    const showVenue = (index) => {
        navigate(`/venue/${index}`)
    }   
    
    const formatDate = (dateStr) => {
        let date = new Date(dateStr)
        let formattedDate = date.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          })
          return formattedDate
    }

    return (
        <div className = "EventList">
            <h2>Search results</h2>
            <h2>Events</h2>
            {
                props.events.length > 0 ? (
                    
                    props.events.map((event, index) => (
                        
                        <h1 className="map" key ={index} onClick={()=>showEvent(event.id)} >
                            {console.log('event',event)}

                            <ul>
                                <img src={event.image_url}/>
                                {event.artist}
                                {formatDate(event.date)}
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