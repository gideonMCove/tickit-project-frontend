import axios from 'axios'
import { useEffect, useState } from 'react'

export default function EventDetail () {
    const [details,setDetails] = useState([])

    useEffect(() =>{

    
            const getDetail = async () => {
                try {
                    const detailResponse = await axios.get('https://localhost:8000/')
                    setDetails(response.data.results)
                } catch (error) {
                    console.error('Cannot load details', error)
                }
                
            }
            getDetail()
        },[])
    return (
        <div className = "detailPage">
            <h1>
                Detail!
            </h1>
        </div>
    )
}