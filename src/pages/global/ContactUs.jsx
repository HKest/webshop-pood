import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wq8wzbz', 'template_nas2unb', form.current, 'SWlS6s23jWYMozQgS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='center' ref={form} onSubmit={sendEmail}>
 <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
     <br />
     <br />
    
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br />
      <br />
      
      <TextField id="outlined-basic" label="Message" variant="outlined" />
   <br />
   <br />
  
   <Button variant="contained"
       onClick={sendEmail}>Send</Button>
     
    </form>
  );
};