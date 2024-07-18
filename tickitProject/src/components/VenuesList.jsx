import { useNavigate } from 'react-router-dom'

export default function VenuesList (props) {

    console.log(props)

    let navigate = useNavigate()

    const showVenue = (index) => {
        navigate(`${index }`)
    }

    return (
        <div className = "EventList">
            <h1>Venues</h1>
            {

                props.events.length > 0 ? (
                    
                    props.events.map((event, index) => (
                        
                        <h1 className="map" key ={index} onClick={()=>showEvent(event.id)} >
                            {console.log('event',event)}

                            <ul>
                                {venue.name}
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