import React from "react";
import Calendar from 'react-calendar';
import { useState } from "react";
import styles from "../styles/about.module.css";
import { FaBed } from 'react-icons/fa';
import { MdCottage, MdSoupKitchen, MdBathroom, MdOutdoorGrill } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiCelebrationFire, GiHighGrass } from 'react-icons/gi'
// import 'react-calendar/dist/Calendar.css';


const About = () => {

    const [date, setDate] = useState(new Date());
    const [disabledDates, setDisabledDates] = useState([]);


    const isSameDay = (a, b) => {
        const first = new Date(a);
        const sec = new Date(b);
        return first.getMonth() === sec.getMonth() && first.getDate() === sec.getDate();
    }
    const disableTiles = (date, view) => {
        // Check if a date React-Calendar wants to check is on the list of disabled dates
        const found = disabledDates.find(dDate => isSameDay(dDate, date.date));
        if (found) console.log(found);
        return found

    }

    const handleSelectDay = (selectedDay) => {
        console.log(selectedDay)
        setDate(selectedDay)
        disabledDates.push(selectedDay)
    }

    return (
        <>
            <div className={styles.aboutContainer}>

                <div className={styles["sections-container"]}>

                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitle}>
                            <strong>Facilities</strong>
                            <p style={{ fontWeight: 'lighter' }}>What to expect when you book a vacation or a weekend at the cabin...</p>
                        </div>
                        <table className={styles.facilitiesTable}>
                            <tr style={{padding: '16px'}}> You can feel, breathe, hear and smell the forest and and the Mountains. 
                                Also you can have a home-like experience as we like to let our guests to have self check-in and self check-out. 
                                You dont`t have to worry about hot water, towels, higienic items and kichen dishes and condiments. you will find all of those and more at the house. </tr>
                            <tr> <MdCottage />Four bedroom house  </tr>
                            <tr> <FaBed />Three duble beds and one couch</tr>
                            <tr> <BsFillPeopleFill /> Suitable for 8-9 guests</tr>
                            <tr> <MdSoupKitchen />Fully equiped kitchen </tr>
                            <tr> <MdBathroom /> Two baths </tr>
                            <tr> <MdOutdoorGrill />Outside terrace with grill and dining table</tr>
                            <tr> <GiCelebrationFire />Bonefire outdoor space </tr>
                            <tr> <GiHighGrass />Spacious yard sorunded by fence</tr>
                        </table>
                        <img src="/photo/summ11.jpg"
                            className={styles['image-item']} />
                    </section>

                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitle}>
                            <strong>Prices</strong>
                        </div>
                        <div style={{
                            display: 'grid',
                            justifyItems: 'center'
                        }}>
                            <strong>Our prices may vary acording to different seasons or holidays: </strong>
                            <p style={{
                                fontStyle: 'italic',
                            }}>*You can only book a minimum of 2 night for the entire property</p>
                            <ul>
                                <tr>May - September: 550 RON/night </tr>
                                <tr>Octomber - April: 750 RON/night </tr>
                                <tr>Legal holidays: minimun book is of 3 nights plus 20% normal price</tr>
                            </ul>
                            <p style={{
                                fontStyle: 'italic',
                            }}>*Want to book? Check availability on the calendar below, then go to Contact Page and send us a request.</p>
                        </div>
                    </section>

                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitle}>
                            <p><strong>Availability</strong></p>
                        </div>
                        <div className={styles['calendar-wraper']}>
                            <h1 className='text-center' style={{color: 'white'}}>Calendar</h1>
                            <div 
                            // suppressHydrationWarning={true} 
                            className={styles['calendar-container']}>
                                <Calendar 
                                    className={styles['react-calendar']}
                                    onChange={handleSelectDay} value={date}
                                    tileDisabled={disableTiles} />
                            </div>
                            <p className='text-center' style={{color: 'white'}}>
                                <span className='bold' >Selected Date:</span>{' '}
                                {date.toDateString()}
                            </p>
                        </div>
                    </section>

                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitle}>
                            <strong>Hosts</strong>
                            <p style={{ fontWeight: 'lighter' }}>This little business is managed entierly by our familly. </p>
                            <p style={{ fontWeight: 'lighter' }}>We are: Ciprian and Crina, our big doughter, Larisa and the little one, Anastasia.</p>
                            <p style={{ fontWeight: 'lighter' }}>We handle cleaning, necesarry basics and everything else with care and respect for our guest. You are always wellcomed. </p>
                        </div>
                        <img
                            src="/photo/crina_ciprian.jpg"
                            className={styles['image-item']}
                            alt='Crina&Ciprian' />

                        <img src="/photo/larisa.jpg"
                            className={styles['image-item']}
                        />

                        <img src="/photo/anastasia.jpg"
                            className={styles['image-item']}
                        />
                    </section>

                </div>

            </div>
        </>
    )
}

export default About;