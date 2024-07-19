import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'

export default function EventDetail () {
    const [details,setDetails] = useState(null)
    const [show,setShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)
    const [events,setEvents] = useState(null)
    const [formData, setFormData] = useState({
       
        name: '',
        location: '',
        capacity: '',
        parking: '',
        price: '',
        events: [],
        venue_url: ''
    })
    let { venueId } = useParams()
    const navigate = useNavigate()
    let counter = 0
    useEffect(() =>{    
            const getDetail = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/venues/${venueId}`)
                    setDetails(response)
                    
                    const responseData = response.data
                    {
                    setFormData({
                        name: responseData.name,
                        location: responseData.location,
                        capacity: responseData.capacity,
                        parking: responseData.parking,
                        price: responseData.price,
                        events: responseData.events,
                        venue_url: responseData.venue_url
                        })
                    }
                    const eventResponse = await axios.get(`http://localhost:8000/events`)
                    setEvents(eventResponse)

                } catch (error) {
                    console.error('Cannot load details', error)
                }                
            }
            getDetail()
        },[counter])
   
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleUClose = () => setUpdateShow(false)
    const handleUShow = () => setUpdateShow(true)
    const handleDelete = async () =>{
        try {
            await axios.delete(`http://localhost:8000/venues/${venueId}`)
            navigate('/venues')
        } catch (error) {
            console.error(`nah nah nah nah, nah nah, nah nah, can't delete this`)
        }
    }
    const handleUpdate = async () =>{
        // console.log('Event ID:', eventId)
        console.log('Form Data:', formData)
        try {
            Boolean(formData.parking)
            console.log('Parking', formData.parking)
            await axios.put(`http://localhost:8000/venues/${venueId}`, formData)
            // const updatedEvent = await axios.get(`http://localhost:8000/events/${eventId}`)
            setDetails(formData)
            handleClose()
            window.location.reload()
            counter +=1


        } catch (error) {
            console.error('Error updating venue!!!!')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log('handleChange', formData)
    } 

    // const putTest = async () => {
    //     console.log('Event ID:', eventId)
    //     console.log(`http://localhost:8000/venues/${eventId}`)
    //     try {
    //       const response = await axios.put(`http://localhost:8000/venues/${eventId}`,
    //             {
    //                 // artist: "Mr. Stinky",
    //                 // date: "2024-07-31T20:30:00Z",
    //                 // price:  100,
    //                 // ticket_limit: 8,
    //                 // venue_id: 5,
    //                 // genre: "indie"
    //                 "venue": 1,
    //                 "artist": "Mrs. Stinky",
    //                 "genre": "indie",
    //                 "date": "2024-07-31T20:30:00Z",
    //                 "price": 100,
    //                 "over18": true,
    //                 "ticket_limit": 8,
    //                 "image_url": "12",
    //                 "venue_id": 5,
    //                 "comedy": false,
    //                 "concert": true,
    //                 "sport": false
    //             }
    //         )

    //     } catch (error ){
    //         console.error('Gosh dang it')
    //     }
    
    return (
        <div className = "detailPage">
                       
            {/* Delete Modal */}
            <Button variant='primary' onClick ={handleShow}>
                Delete Venue
            </Button>
            {
                details != null ? (
            <Modal show={show} onHide={handleClose}>                
                <Modal.Body>Are you sure you would like to delete this venue? This process can not be reversed</Modal.Body>
                <Modal.Footer>
                    <Button variant ='secondary' onClick ={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleDelete}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
                ) : (
                    <h1></h1>
                )
            }
            {/*Update Modal*/}
            <Button variant='primary' onClick ={handleUShow}>
                Update Venue
            </Button>

            {
                details!= null && events != null ? ( 
            <Modal show={updateShow} onHide={handleUClose}>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="formEvents">
                            <Form.Label>Events</Form.Label>
                            <Form.Control
                                as="select"                                
                                name="events"
                                value={formData.events}
                                onChange={handleChange}
                                required
                            >
                                {
                                    events.data.map((event, index )=> (
                                        <option value={event.id} key={index}>
                                            {event.artist}
                                            </option>
                                    ))
                                }
                                </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formLocation'>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type='text'
                                name='location'
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formCapacity'>
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                             type='text'
                             name='capacity'
                             value={formData.capacity}
                             onChange={handleChange}
                             required
                                // type='date'
                                // name='date'
                                // min="2024-07-19"
                                // max="2025-07-19"
                                // value={FormData.date}
                                // onChange={handleChange}
                                // required
                            />                                 
                        </Form.Group>                       
                        <Form.Group controlId='formParking'>
                            <Form.Label>Parking</Form.Label>
                            <Form.Check
                                type='checkbox'
                                defaultChecked={details.data.parking ? true : false}
                                name='parking'
                                value={Boolean(formData.parking)}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                       
                        
                        <Button variant='primary' onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        <Button variant ='secondary' onClick={handleUClose}>
                            Cancel
                        </Button>               
                    </Form>
                </Modal.Body>
            </Modal>
                ) : (
                    <h1></h1>
                )
}
                <h1>VenueDetail!</h1>
                {
                    details != null ? (
                    <h1>
                        
                        {details.data.name}<br />
                        Location: {details.data.location}<br />
                        Capacity: ${details.data.capacity}<br />
                        
                        </h1>
                    ) : (
                        <h1>Data is not loaded</h1>
                    )
                }
            
        </div>
    )
}