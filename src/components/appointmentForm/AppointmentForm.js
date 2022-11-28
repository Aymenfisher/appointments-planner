import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const buttonStyle={backgroundColor:'#03a8d8',
  border:'1px solid #03a8d8', borderRadius:'5px',width:'100%',color:'white',
  height: '50px', fontSize: '20px', fontWheight:'600'
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} required></input>
      <label htmlFor="date">Date:</label>
      <input type='date' min={getTodayString()} id='date' value={date} onChange={e => setDate(e.target.value)} required></input>
      <label htmlFor="time">Time:</label>
      <input type='time' id='time' value={time} onChange={e => setTime(e.target.value)} required></input>
      <ContactPicker contacts={contacts} onChange={(e) => {setContact(e.target.value)}} />
      <button type="submit" style={buttonStyle}>Add</button>
    </form>
  );
};
