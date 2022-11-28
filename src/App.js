import {React, useState} from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  const createContact = (name,phone,email) =>{
    setContacts((previousContacts) => {return [...previousContacts,{name:name,phone:phone,email:email}]})
  }
  const createAppointment = (title,contact,date,time) =>{
    setAppointments((previousAppointments) => {return [...previousAppointments,{title:title,contact:contact,date:date,time:time}]})
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  

  return (
    <>
      <nav>
        <NavLink replace to={ROUTES.CONTACTS} activeclassname="active">
          Contacts
        </NavLink>
        <NavLink replace to={ROUTES.APPOINTMENTS} activeclassname="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to={ROUTES.CONTACTS} />} />
          {/* Add props to ContactsPage */}
          <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} createContacts={createContact} />} />
          {/* Add props to AppointmentsPage */}
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} 
            appointments={appointments} createAppointments={createAppointment}/>} 
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
