import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uiText from "../constants/uiText.json"
import styles from "../styles/contact.module.css";

const ReservationForm = () => {
  // console.log(uiText)
    return (
        <Form className={styles["form-control"]}>
           <h1>Contact Form:</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{uiText.reservationForm.en.email}</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>{uiText.reservationForm.en.name}</Form.Label>
        <Form.Control type="text" placeholder="Your first and last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Insert here the details of your stay:</Form.Label>
        <Form.Control as="textarea" rows={8} placeholder='Please tell us when you would like to book, for how many nights and guests (including children and their age), or any other special requests.  '/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color: 'white'}}>Leave a feedback!</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Share your experience with us here..." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    )
}
export default ReservationForm;