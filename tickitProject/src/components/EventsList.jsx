import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function EventsList (props) {

    //const [events, setEvents] = useState([])
    let {eventId} = useParams()
    let navigate = useNavigate()

    console.log('EventsList', props.events)

    // useEffect (() => {

    //     console.log('useEffect')

    //     setEvents(props.events)
        
    //     // const getEvents = async () => {
    //     //     try{
    //     //         const response = await axios.get(`http://localhost:8000/events/`)
    //     //         setEvents(response)
    //     //     } catch (error){
    //     //         console.error('Cannot load events', error)
    //     //     }
    //     // }
    //     // getEvents()
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
            {

                events != "" ? (
                    
                    events.data.map((event, index) => (
                        
                        <h1 className="map" key ={index} onClick={()=>showEvent(event.id)}>
                            {console.log('event',event)}

                            <ul>
                                {event.artist}
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