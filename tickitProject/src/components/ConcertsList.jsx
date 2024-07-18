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
          console.error('Cannot load venues', error)
        }
      }

    const showEvent = (index) => {
        navigate(`/events/${index + 1}`)
    }
  

    useEffect(() => {
        getConcerts()
    }, [])   

    return (
        <div className='EventList'>
            <h1>Upcoming Events</h1>
            {
                concerts.length > 0 ? (
                    concerts.map((event, index) => (
                        <h1 className="map" key={index} onClick={()=>showEvent(index)}>
                        <ul>
                            {event.artist}
                        </ul>
                    </h1>
                    ) )
                ) : <h1>Events loading</h1>
            }
        </div>
    )
}

export default ConcertsList