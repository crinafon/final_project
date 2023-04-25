import React from 'react';
import styles from "../styles/contact.module.css";


function Location() {
  return (
    <div className={styles["location-container"]}
    >Find our location on the map
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.108362826163!2d23.089167576396765!3d46.664121671119005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748df1ded24fad9%3A0xd25365822f438992!2zQ8SDc3XIm2EgZGUgbXVudGU!5e0!3m2!1sen!2sro!4v1681321404821!5m2!1sen!2sro"
    className={styles["location-map"]} 
    style={{ 
      allowfullscreen:"true",
      loading:"lazy",
      referrerpolicy:"no-referrer-when-downgrade"}}>
    </iframe>
    </div>
    
  );
}

export default Location;