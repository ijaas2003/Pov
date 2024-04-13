import React from "react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  console.log({Email})
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h666t6a', 'template_u8fgt5a', form.current, {
        publicKey: 'PP2epfy9sr3TtP0Q6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-page-wrapper" id="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form ref={form} onSubmit={sendEmail}>
      <div className="contact-form-container">
        <input type="text" placeholder="Name" name="from_name"/>
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" name="to_email"/>
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Message" name="message" />
        
      </div>
      <button className="secondary-button">Submit</button>
      </form>
      
    </div>
  );
};

export default Contact;
