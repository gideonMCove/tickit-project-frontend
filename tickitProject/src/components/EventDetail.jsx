import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// need use params, change 0 to equal id
export default function EventDetail () {
    const [details,setDetails] = useState([""])
    const [show,setShow] = useState(false)
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
    const handleDelete = async () =>{
        try {
            await axios.delete(`http://localhost:8000/events/${eventId}`)
            navigate('/events')
        } catch (error) {
            console.error(`nah nah nah nah, nah nah, nah nah, can't delete this`)
        }
    }
        // console.log('response', details.data)
        console.log('details', details)
        // if (details != ""){
        //     console.log('artist', details.data[0].artist)
        // }
        
        // console.log('details.artist', details.data[0].artist)
    return (
        <div className = "detailPage">
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