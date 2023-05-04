import React, { useEffect } from 'react';
import styles from "../styles/home.module.css";
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
    <><div className={styles["home-container"]} >
      
      <div className={styles.leftSection}>
        <article>
          <h1>Go outside and feel the Mountains! </h1>
          <h2 style={{ fontWeight: 'lighter', }}>Get inside and tell the stories!</h2>
          <h2 style={{ fontWeight: 'lighter', fontStyle: 'oblique' }}>Căsuța de Munte</h2>
          <h3>A cabin, a small vacation home located in the heart of Apuseni Mountains, Romania.</h3>

          <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean neque mi, porta at dapibus id, tempor in neque.
            Mauris massa erat, iaculis aliquam tellus ac, malesuada dapibus felis.
            Fusce dapibus ultricies ipsum,
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
      </div>

      {/* <div className={styles.rightSection}> */}
        <video src="/video/introVideo.mp4" autoPlay muted
          className={styles["home-video"]}
          loop />
      </div>
    {/* </div> */}
    </>
  )
}
