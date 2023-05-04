import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uiText from "../constants/uiText.json"
import styles from "../styles/contact.module.css";
import emailjs from '@emailjs/browser';

const ReservationForm = () => {

  const [forceRerender, render] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICEID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY)
      .then((result) => {
          console.log(result.text);
          render(!forceRerender);
          alert("Thank you! Your message has been sent.")
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
  };

    return (
        <Form 
        key={forceRerender}
        className={styles["form-control"]} 
        onSubmit={sendEmail}
        ref={formRef}
        >
           <h1>Contact Form:</h1>
           <p style={{
            fontStyle: 'italic'
           }}>The fields marked with `*` are mandatory</p>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{uiText.reservationForm.en.email}*</Form.Label>
        <Form.Control 
        type="email" 
        name = 'email' 
        placeholder="name@example.com"
        // value = {toSend.reply_to}
        // onChange={handleChange} 
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>{uiText.reservationForm.en.name}*</Form.Label>
        <Form.Control 
        type="text" 
        name = 'fullName'
        placeholder="Your first and last name"
        // value = {toSend.from_name}
        // onChange={handleChange} 
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Insert here the details of your stay:</Form.Label>
        <Form.Control 
        type='text'
        as="textarea" 
        rows={8} 
        placeholder='Please tell us when you would like to book, 
        for how many nights and guests (including children and their age), 
        or any other special requests.  '
        name='message'
        // value = {toSend.message}
        //onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color: 'white'}}>Leave a feedback!</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        placeholder="Share your experience with us here..." 
        name='feedback'
        //value = {toSend.feedback}
        //onChange={handleChange}
        />
      </Form.Group>
      <Button 
      variant="primary" 
      type="submit">
        Send
      </Button>
    </Form>
    )
}
export default ReservationForm;