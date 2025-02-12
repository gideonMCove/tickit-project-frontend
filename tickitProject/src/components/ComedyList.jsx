import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const ComedyList = () => {

    let navigate = useNavigate()

    const [comedy, setComedy] = useState([])

    const getComedy = async () => {     
        try {
          const res = await axios.get('http://localhost:8000/events')
          let eventData = res.data
          const matchingEvents = eventData.filter(event => event.comedy === true)
          console.log(matchingEvents)
          setComedy(matchingEvents)          
        } catch (error) {
          console.error('Cannot load events', error)
        }
    }

    const showEvent = (index) => {
        navigate(`/events/${index}`)
    }

    useEffect(() => {
        getComedy()
    }, [])        
   
    return (
        <div className='EventList'>
            <h2>Upcoming Events</h2>
            {
                comedy.length > 0 ? (
                    comedy.map((event, index) => (
                        <h3 className="map" key={index} onClick={()=>showEvent(event.id)}>
                        <ul>
                            <img src={event.image_url}/>
                            {event.artist}
                        </ul>
                        </h3>
                    ) )
                ) : <h2>Events loading</h2>
            }
        </div>
    )
}

export default ComedyList