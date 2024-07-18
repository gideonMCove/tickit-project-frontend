import axios from 'axios'
import { useEffect, useState } from 'react'
import './VenueDetail.css'

export default function VenueDetail() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        const getDetail = async () => {
            try {
                const detailResponse = await axios.get('http://localhost:8000/venues/')
                console.log(detailResponse.data)
                setDetails(detailResponse.data)
            } catch (error) {
                console.error('Cannot load details', error)
            }
        }
        getDetail()
    }, [])

    return (
        <div className="detailPage">
            <h1>Venues</h1>
            <div className="venueList">
                {details.map(detail => (
                    <div className="venueCard" key={detail.id}>
                        <h2>{detail.name}</h2>
                        <p><strong>Location:</strong> {detail.location}</p>
                        <p><strong>Capacity:</strong> {detail.capacity}</p>
                        <p><strong>Parking:</strong> {detail.parking ? 'Available' : 'Not Available'}</p>
                        {detail.image_url && <img src={detail.image_url} alt={detail.name} />}
                    </div>
                ))}
            </div>
        </div>
    )
}
