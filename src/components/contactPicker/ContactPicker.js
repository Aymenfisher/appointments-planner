import React from "react";

export const ContactPicker = ({contacts,onChange}) => {
  return (
    <>
    <label htmlFor='contacts-select'>Select Contact:</label>
    <select id='contacts-select' onChange={onChange}>
      <option value=''></option>
      {contacts.map(contactItem => 
        <option value={contactItem.name}>{contactItem.name}</option>
      )}
    </select>
    </>
  );
};
