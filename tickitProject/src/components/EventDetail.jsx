import axios from 'axios'
import { useEffect, useState } from 'react'

export default function EventDetail () {
    const [details,setDetails] = useState([])

    useEffect(() =>{

    
            const getDetail = async () => {
                try {
                    const response = await axios.get('http://localhost:8000/events/')
                    setDetails(response)
                    console.log('response', response)
                } catch (error) {
                    console.error('Cannot load details', error)
                }
                
            }
            getDetail()
        },[])
    return (
        <div className = "detailPage">
            
                <h1>EventDetail!</h1>
                {
                    <h1>{details.genre}</h1>
                }
            
        </div>
    )
}