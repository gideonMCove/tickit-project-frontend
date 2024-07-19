
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './EventList.css'


export default function EventsList (props) {

    console.log(props)

    //const [events, setEvents] = useState([])
    let {eventId} = useParams()
    let navigate = useNavigate()

    // useEffect (() => {

    //     console.log('useEffect')

     
        
    //     const getEvents = async () => {
    //         try{
    //             const response = await axios.get(`http://localhost:8000/events/`)
    //             setEvents(response)
    //         } catch (error){
    //             console.error('Cannot load events', error)
    //         }
    //     }
    //     getEvents()
    // },[events])

    //console.log(events)

    const showEvent = (index) => {

        navigate(`${index }`)
    }

    // console.log('events', events)
    // if (events != ""){
    //     console.log('events.data', events.data)
    // }

    return (
        <div className = "EventList">
            <h1>Upcoming Events</h1>

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
                    <h1>Events have yet to be loaded</h1>
                )
            }
        </div>
    )
}