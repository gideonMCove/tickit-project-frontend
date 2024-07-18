import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = (props) => {

    //console.log(props)
    
    let navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.getEvents(e)
        props.getVenues(e)
        navigate('/events')
    }

    return (
        <div className="searchBar">
        <form onSubmit={ handleSubmit }>
             <input type="text" onChange={props.handleChange} value={props.searchQuery} />
            <button type="submit">Search</button>
         </form>
      </div>
    )
}

export default SearchBar