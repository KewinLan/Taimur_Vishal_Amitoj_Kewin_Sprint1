//npm i react-router-dom
//then check packages.json to make sure it is version 6.8.1 or higher

//The logo's orange is contrast-accessible with large text and graphics, but not with small text, so if we want to use it, we can't use it with small text (17 pt and below)
//if we need to bring in more images, see this : https://www.youtube.com/watch?v=0EtYzQn-Scw
//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { FAQ } from './components/FAQ/FAQ';
import { Contact } from './components/Contact/Contact';
import styles from './AppStyles.module.css';
import { Terms } from './components/Terms/Terms';
import { Privacy } from './components/Privacy/Privacy';
import { Cookies } from './components/Cookies/Cookies';
import Services from './components/Services';
import Staff from './components/Staff';
import Calender from './components/Calender';
import Details from './components/Details';
import SignUp from './components/SignUp/SignUp';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  const [services, setServices] = useState([{
    id: 1,
    name: "Haircut",
    price: 35,
    description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat." ,
    moreInfo: false
  },
  {
    id: 2,
    name: "Beard ",
    price: 20,
    description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
    moreInfo: false},
  {
    id: 3,
    name: "Head Massage",
    price: 25,
    description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
    moreInfo: false},
  {
    id: 4,
    name: "Hair Styling",
    price: 10,
    description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat." ,
    moreInfo: false
  },
  ])
  
  const [staffs, setStaffs] = useState([{
    id: 1,
    name: "ABC",
    description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat." ,
    time_slot: ["10.00 am","11.00 am","12.00 pm","02.00 pm","03.00 pm","04.00 pm","05.00 pm","06.00 pm"]
  },
  {
    id: 2,
    name: "DEF ",
    description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
    time_slot: ["10.00 am","11.00 am","12.00 pm","02.00 pm","03.00 pm","04.00 pm","05.00 pm","06.00 pm"]
  },
  {
    id: 3,
    name: "GHI",
    description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
    time_slot: ["10.00 am","11.00 am","12.00 pm","02.00 pm","03.00 pm","04.00 pm","05.00 pm","06.00 pm"]
  },
  {
    id: 4,
    name: "KLM",
    description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
    time_slot: ["10.00 am","11.00 am","12.00 pm","02.00 pm","03.00 pm","04.00 pm","05.00 pm","06.00 pm"]
  },
  ]);
  
  // Variables for service, staff , time slot: Story Point 14 can be done by displaying these vairables
  const [showDescription, setShowDescription] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12.00 pm");
  
  //  Variables for Form Details: Story Point 15 can be done by displaying these vairables
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("None");


  return (
    <>
      <nav>
        <Link to="/">
          <img src="images/Logo1.png" className="OSlotLogo" alt="O'Slot logo" width="398" height="152" />
        </Link>
        <div className={styles.HeaderLinks}>
          <Link to="/" className={styles.HeaderLinksHome}>Home</Link>
          <Link to="/about" className={styles.HeaderLinksAbout}>About</Link>
          <Link to="/faq" className={styles.HeaderLinksFAQ}>FAQ</Link>
          <Link to="/contact" className={styles.HeaderLinksContact}>Contact Us</Link>
          <Link to="/signup" className={styles.HeaderLinksContact}>Sign Up</Link>
        </div>
        <hr></hr>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element = {<Services 
            services = {services}
            setServices = {setServices}
            showDescription = {showDescription}
            setShowDescription = { setShowDescription}
            selectedService = {selectedService}
            setSelectedService = {setSelectedService}
          />} /> 
        <Route path='/staff' element={<Staff
            selectedService = {selectedService}
            staffs = {staffs}
            setStaffs = { setStaffs}
            selectedStaff = {selectedStaff}
            setSelectedStaff = {setSelectedStaff}
          />}/>
          <Route path="calender" element = {<Calender
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            selectedTime = {selectedTime}
            setSelectedTime = {setSelectedTime}
            selectedStaff = {selectedStaff}
            setSelectedStaff = {setSelectedStaff} 
            staffs = {staffs}
            setStaffs = { setStaffs} 
          />} />

          <Route path="details" element = {<Details
            contact = {contact}
            setContact = {setContact}
            email = {email}
            setEmail = {setEmail}
            fname = {fname}
            setFname = {setFname}
            lname = {lname}
            setLname = {setLname}
            appointmentNotes = {appointmentNotes}
            setAppointmentNotes = {setAppointmentNotes}
          />} />

          <Route path="confirmation page" element = {<ConfirmationPage
          selectedService = {selectedService}
          selectedStaff = {selectedStaff}
          selectedDate = {selectedDate}
          selectedTime = {selectedTime}
          contact = {contact}
          email = {email}
          fname = {fname}
          lname = {lname}
          appointmentNotes = {appointmentNotes}
          setContact = {setContact}
          setEmail = {setEmail}
          setFname = {setFname}
          setLname = {setLname}
          setAppointmentNotes = {setAppointmentNotes}
          />}/>
      </Routes>

      <footer>  
        <div className={styles.FooterLinks}>
          <div className={styles.FooterLinksCopyright}>
            <p>
              © 2023 O'Slot
            </p>
          </div>
          <Link to="/terms" className={styles.FooterLinksTerms}>Terms</Link>
          <Link to="/privacy" className={styles.FooterLinksPrivacy}>Privacy</Link>
          <Link to="/cookies" className={styles.FooterLinksCookies}>Cookies</Link>
        </div>
      </footer>
    </>
  )
}

export default App;