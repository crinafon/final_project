import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
    return (
        <>
        <div  className={styles.aboutContainer}>
            <section className={styles.sectionContainer}>Facilities Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <img src="/photo/summ07.jpg" 
                style={{with: '200px', height: '200px'}}
                className={styles['image-item']}/>
            </section>
            <section className={styles.sectionContainer}>Prices

            </section>
            <section className={styles.sectionContainer}>Avalability

            </section>
            <section className={styles.sectionContainer}>Hosts
            <img src="/photo/crina_ciprian.jpg" 
            className={styles['image-item']} 
            style={{
                with: '200px', 
                height: '200px'}}/>
            <img src="/photo/larisa.jpg" 
            className={styles['image-item']}
            style={{
                with: '200px', 
                height: '200px'}}/>
            <img src="/photo/anastasia.jpg" 
            className={styles['image-item']}
            style={{
                with: '200px', 
                height: '200px'}}/>
            </section>
        </div>
        </>
    )
}

export default About;