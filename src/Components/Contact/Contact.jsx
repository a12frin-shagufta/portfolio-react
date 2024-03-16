import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Updated import
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_junmx49', 'template_rhxoibq', form.current, {
        publicKey: 'eYUQFZuXDkxaScGls',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('Message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name" className="input-field" />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" className="input-field" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" className="input-field message-field"></textarea>
      <input type="submit" value="Send" className="submit-btn" />
    </form>
  );
};

export default Contact;
