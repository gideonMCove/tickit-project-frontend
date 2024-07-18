import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const SportsList = () => {

    let navigate = useNavigate()

    const [sports, setSports] = useState([])

    const getSports = async () => {     
        try {
          const res = await axios.get('http://localhost:8000/events')
          let eventData = res.data
          const matchingEvents = eventData.filter(event => event.sport === true)
          console.log(matchingEvents)
          setSports(matchingEvents)          
        } catch (error) {
          console.error('Cannot load events', error)
        }
    }

    const showEvent = (index) => {
        navigate(`/events/${index}`)
    }

    useEffect(() => {
        getSports()
    }, [])       

    return (
        <div className='EventList'>
            <h2>Upcoming Events</h2>
            {
                sports.length > 0 ? (
                    sports.map((event, index) => (
                        <h3 className="map" key={index} onClick={()=>showEvent(event.id)}>
                        <ul>
                            {event.artist}
                        </ul>
                    </h3>
                    ) )
                ) : <h2>Events loading</h2>
            }
        </div>
    )
}

export default SportsList