import React from 'react';
import { Outlet, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";  
import './Details.css'

function Details(props) {
    const {contact, setContact, email, setEmail, fname, lname, setFname, setLname, appointmentNotes, setAppointmentNotes, allDetails} = props
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        if( contact && email && fname && lname !== "") {
            console.log(contact, email, fname ,lname, appointmentNotes);
            window.confirm("Are you Sure?")
            navigate("/confirmation page")
        }
        else {
            alert(" Some Details are missing !")

        }
    }

    function handleContact(event){
        setContact(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleFname(event){
        setFname(event.target.value)
    }

    function handleLname(event){
        setLname(event.target.value)
    }

    function handleAppointmentNotes(event){
        setAppointmentNotes(event.target.value)
    }
    return (
    <>
    <form>
        <div className='formclass'>
        <h3>Enter your personal Details here</h3>
        <label htmlFor="contact">Contact Number: </label>
        <input type="tel" id="contact" value={contact} onChange={handleContact} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" required></input> 
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={handleEmail} placeholder='Email' required></input>
        <br />
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" value={fname} onChange={handleFname} placeholder="First Name" required></input>
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input type="text" id="lname" value={lname} onChange={handleLname} placeholder="Last Name" required></input>
        <br />
        <label htmlFor="email">Appointment Notes: </label>
        <textarea rows={5} cols={18} id="notes" value={appointmentNotes} onChange={handleAppointmentNotes} placeholder="Additional Information"></textarea>
        </div>    
    </form>
    <button> <Link to="/calender">Back</Link></button>
    <button onClick={handleSubmit}>Book Appointment</button> 
    <Outlet />
    </>
  )
}

export default Details