import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate,
}) => {
  const buttonStyle={backgroundColor:'#03a8d8',
  border:'1px solid #03a8d8', borderRadius:'5px',width:'100%',color:'white',
  height: '50px', fontSize: '20px', fontWheight:'600'
}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' value={name} onChange={(e) => {setName(e.target.value)}} required/>
      {duplicate && (<><span style={{color:'red'}}>Name Already Exists!</span><br/></>)}
      <label htmlFor='phone'>Phone:</label>
      <input type='tel' id='phone' value={phone} placeholder="800-555-5555" pattern='^[2-9]\d{2}-\d{3}-\d{4}$' onChange={(e) => {setPhone(e.target.value)}} required/>
      <label htmlFor='email'>Email:</label>
      <input  type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
      <button style={buttonStyle} type="submit">Add</button>
    </form>
  );
};
