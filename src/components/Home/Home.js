import { LeftSection } from '../LeftSection/LeftSection';
import { Link } from 'react-router-dom';
import Services from '../Services';
import styles from './HomeStyles.module.css';
import React from "react";

export function Home(props) {

  function handleAppointment(event){
    event.preventDefault();
  }

  return (
    <div className='center'>
      <button onClick={handleAppointment}><Link to="/services">New Appointment</Link></button>
    </div>
  )
}

