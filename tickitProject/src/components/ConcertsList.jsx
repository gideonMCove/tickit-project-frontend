import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const ConcertsList = () => {

    let navigate = useNavigate()

    const [concerts, setConcerts] = useState([])

    const getConcerts = async () => {     
        try {
          const res = await axios.get('http://localhost:8000/events')
          let eventData = res.data
          const matchingEvents = eventData.filter(event => event.concert === true)
          console.log(matchingEvents)
          setConcerts(matchingEvents)          
        } catch (error) {
          console.error('Cannot load events', error)
        }
    }

    const showEvent = (index) => {
        navigate(`/events/${index}`)
    }  

    useEffect(() => {
        getConcerts()
    }, [])   

    return (
        <div className='EventList'>
            <h2>Upcoming Events</h2>
            {
                concerts.length > 0 ? (
                    concerts.map((event, index) => (
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

export default ConcertsList