import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = ({ contacts, appointments, createAppointments }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    createAppointments(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title}  date={date} time={time} contacts={contacts}
          setContact={setContact} setTime={setTime} setDate={setDate} setTitle={setTitle}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList dataArray={appointments} />
      </section>
    </div>
  );
};
