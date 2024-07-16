import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
// need use params, change 0 to equal id
export default function EventDetail () {
    const [details,setDetails] = useState([""])
    let { eventId } = useParams()

    useEffect(() =>{

    
            const getDetail = async () => {
                try {
                    const response = await axios.get('http://localhost:8000/events/')
                    setDetails(response)
                    
                } catch (error) {
                    console.error('Cannot load details', error)
                }
                
            }
            getDetail()
        },[])
        console.log('response', details.data)
        console.log('details', details)
        if (details != ""){
            console.log('artist', details.data[0].artist)
        }
        
        // console.log('details.artist', details.data[0].artist)
    return (
        <div className = "detailPage">
            
                <h1>EventDetail!</h1>
                {
                    details != "" ? (
                    <h1>
                        {details.data[0].artist}<br />
                        Genre: {details.data[0].genre}<br />
                        Ticket Price: ${details.data[0].price}<br />
                        Ticket Limit: {details.data[0].ticket_limit}
                        </h1>
                    ) : (
                        <h1>Data is not loaded</h1>
                    )
                }
            
        </div>
    )
}