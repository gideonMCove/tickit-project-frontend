import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap/lib/Navbar'
// need use params, change 0 to equal id
export default function EventDetail () {
    const [details,setDetails] = useState([""])
    const [show,setShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)
    const [formData, setFormData] = useState({
        venue: '',
        artist: '',
        genre: '',
        date: '',
        price: '',
        over18: '',
        ticket_limit: '',
        image_url: '',
        comedy: '',
        concert: '',
        sport: ''
    })
    let { eventId } = useParams()
    const navigate = useNavigate()

    useEffect(() =>{

    
            const getDetail = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/events/${eventId}`)
                    setDetails(response)
                    
                } catch (error) {
                    console.error('Cannot load details', error)
                }
                
            }
            getDetail()
        },[])
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleUClose = () => setUpdateShow(false)
    const handleUShow = () => setUpdateShow(true)
    const handleDelete = async () =>{
        try {
            await axios.delete(`http://localhost:8000/events/${eventId}`)
            navigate('/events')
        } catch (error) {
            console.error(`nah nah nah nah, nah nah, nah nah, can't delete this`)
        }
    }
    const handleUpdate = async () =>{
        try {
            await axios.put(`http://localhost:8000/events/${eventId}`, formData)

        } catch (error) {
            console.error('Error updating event!!!!')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    
        // console.log('response', details.data)
        console.log('details', details)
        // if (details != ""){
        //     console.log('artist', details.data[0].artist)
        // }
        
        // console.log('details.artist', details.data[0].artist)
    return (
        <div className = "detailPage">
            {/* Delete Modal */}
            <Button variant='primary' onClick ={handleShow}>
                Delete Event
            </Button>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Delete Event</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>Are you sure you would like to delete this event? This process can not be reversed</Modal.Body>
                <Modal.Footer>
                    <Button variant ='secondary' onClick ={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleDelete}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*Update Modal*/}
            <Button variant='primary' onClick ={handleUShow}>
                Update Event
            </Button>
            <Modal show={updateShow} onHide={handleUClose}>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="formVenueName">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                type="text"
                                name="venue"
                                value={FormData.venue}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formArtist">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control
                                type="text"
                                name="artist"
                                value={FormData.artist}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formGenre'>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type='text'
                                name='genre'
                                value={FormData.genre}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formDate'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type='date'
                                name='date'
                                min="2024-07-19"
                                max="2025-07-19"
                                value={FormData.date}
                                onChange={handleChange}
                                required
                            />                                 
                        </Form.Group>
                        <Form.Group controlId='formPrice'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                name='price'
                                value={FormData.price}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formOver18'>
                            <Form.Label>Over 18?</Form.Label>
                            <Form.Control
                                type='checkbox'
                                defaultChecked={details.data.over18 ? true : false}
                                name='over18'
                                value={FormData.over18}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formTicket_limit'>
                            <Form.Label>Ticket Limit</Form.Label>
                            <Form.Control
                                type='number'
                                name='ticket_limit'
                                value={FormData.ticket_limit}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formImage_url'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                name='image_url'
                                value={FormData.image_url}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formComedy'>
                            <Form.Label>Is Comedy?</Form.Label>
                            <Form.Control
                                type='checkbox'
                                defaultChecked={details.data.comedy ? true : false}
                                name='comedy'
                                value={FormData.comedy}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formConcert'>
                            <Form.Label>Is Concert?</Form.Label>
                            <Form.Control
                                type='checkbox'
                                defaultChecked={details.data.concert ? true : false}
                                name='concert'
                                value={FormData.concert}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formSport'>
                            <Form.Label>Is Sport?</Form.Label>
                            <Form.Control
                                type='checkbox'
                                defaultChecked={details.data.sport ? true : false}
                                name='sport'
                                value={FormData.sport}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant='primary' type="submit">
                            Save Changes
                        </Button>               
                    </Form>
                </Modal.Body>
            </Modal>
            
                <h1>EventDetail!</h1>
                {
                    details != "" ? (
                    <h1>
                        {details.data.artist}<br />
                        Genre: {details.data.genre}<br />
                        Ticket Price: ${details.data.price}<br />
                        Ticket Limit: {details.data.ticket_limit}
                        </h1>
                    ) : (
                        <h1>Data is not loaded</h1>
                    )
                }
            
        </div>
    )
}