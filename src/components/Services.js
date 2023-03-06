import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Services.css'

export default function Services(props) {
  const {services,setServices,showDescription ,setShowDescription, selectedService, setSelectedService,staffs, setStaffs, selectedStaff, setSelectedStaff} = props;

  const handleDescription = (event,serv) => {
    event.preventDefault()
    setShowDescription(serv.name);
  }

  function handleSelectedService(event) {
    event.preventDefault();
    const value = event.target.value;
    setSelectedService(value);
    console.log(value);
  }

const handleContinue = (event) => {
  event.preventDefault();
}

  return (
    <>
      <form className="container">
        <h2 className="serviceHeading">Select a Service</h2>
        {services.map(
          (serv) => (
            <div className="serviceDes">
            <div key={serv.id}>
              <h3>{serv.name}</h3>
              <h4>Price: ${serv.price}</h4>
              {/* More Info button is not running dynamically*/}
              <button onClick={(event)=>handleDescription(event,serv)}>More Info</button>
              {showDescription  && <p>{serv.description}</p> }

              {/* Radio Button to Select Service */}
              <div className="radio">
                <input
                  type="radio"
                  name="myRadioGroup"
                  value={serv.name}
                  onChange={handleSelectedService}
                  checked={selectedService === serv.name}
                />
              </div>
              </div>
            </div>
          )
        )}
        <br></br>
        {
          selectedService &&
          <button onClick={(event) => handleContinue(event)}><Link to="/Staff">Continue</Link></button>
        }
      </form>
      <Outlet />
    </>
  );
}
