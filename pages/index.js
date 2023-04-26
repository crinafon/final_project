import React, { useEffect } from 'react';
import Carusel from '../components/caruselComponent';
import ReservationForm from '../components/reservationForm';
import styles from "../styles/home.module.css";
import FeedbackForm from '../components/feedbackForm';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/contact');
  }

  const handleRedirectToPrice = () => {
    router.push('/about');
  }
  return (
    <>
      {/* // <Carusel />  */}
      {/* <div className="m-3 ms-auto me-auto" style={{maxWidth: '40rem', display: 'flex'}}>
      </div> */}
      <div className={styles["home-container"]} >
        <article style={{
          display: 'grid',
          justifyContent: 'center',
          color: 'lightgray',
          margin: '16px',
          padding: '4px',
          borderLeft: '2px solid lightgray'
        }}>
          <h1>Wellcome! </h1>
          <h2 style={{fontWeight: 'lighter'}}>The Little Mountain House</h2>
          <h3>A cabin, a small vacation home located in the heart of Apuseni Mountains, Romania.</h3>
         
         <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean neque mi, porta at dapibus id, tempor in neque. 
            Mauris massa erat, iaculis aliquam tellus ac, malesuada dapibus felis. 
            Fusce dapibus ultricies ipsum, quis hendrerit velit consectetur sed. 
            Donec mollis sapien vel dui consectetur, ac rhoncus nunc lobortis. 
            Fusce in libero ac sem consequat vehicula a ut purus. 
            Nulla facilisi.
          </p>
          <div className={styles.btns}>
            <button 
            className={styles.btn} 
            onClick={handleRedirect} > <span> Book Now!</span> </button> 
            <button 
            className={styles.btn} 
            onClick={handleRedirectToPrice} > <span> Prices & more</span> </button>
          </div>
        </article>
        
        <video src="/video/introVideo.mp4" autoPlay muted 
        className={styles["home-video"]}
          loop />
      </div>
    </>
  )
}
