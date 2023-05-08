import Calendar from 'react-calendar';
import { useState, useEffect } from "react";
import styles from "../styles/about.module.css";
import { FaBed } from 'react-icons/fa';
import { MdCottage, MdSoupKitchen, MdBathroom, MdOutdoorGrill } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiCelebrationFire, GiHighGrass } from 'react-icons/gi'
// import 'react-calendar/dist/Calendar.css';


const About = () => {

    const [date, setDate] = useState(new Date());
    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(() => {
        async function fetchBooking(){
            try{
                const res = await fetch('/api/booking');
                const data = await res.json();
                if(data.status === "ok")setDisabledDates(data.data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchBooking()
    }, [])
    const isSameDay = (a, b) => {
        const first = new Date(a);
        const sec = new Date(b);
        return first.getMonth() === sec.getMonth() && first.getDate() === sec.getDate();
    }
    const disableTiles = (date, view) => {
        let val = null;
        const formatedDate = new Date(date.date);
        const day = formatedDate.getDate();
        const month = formatedDate.getMonth();
        const year = formatedDate.getFullYear();
        console.log(day, month, year)
        // disabledDates.forEach(rezervation => {
        //     if(rezervation.startDate.month - 1 === month && rezervation.startDate.year === year && (rezervation.startDate.day <= day && rezervation.endDate.day >= day)){
        //         val = date.date;
        //     }
        // })
        console.log(val)
        return val;
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
                        <ul className={styles.facilitiesList}>
                           <li style={{padding: '16px'}}> You can feel, breathe, hear and smell the forest and and the Big Mountains.
                               Also you can have a home-like experience as we like to let our guests to have self check-in and self check-out.
                             You dont`t have to worry about hot water, towels, higienic items and kichen utensils or even condiments. You will find all of those and more at the house. </li>
                           <li> <MdCottage />Four bedroom house  </li>
                          <li> <FaBed />Three duble beds and one couch</li>
                         <li> <BsFillPeopleFill /> Suitable for 8-9 guests</li>
                            <li> <MdSoupKitchen />Fully equiped kitchen </li>
                           <li> <MdBathroom /> Two baths </li>
                           <li> <MdOutdoorGrill />Outside terrace with grill and dining table</li>
                            <li> <GiCelebrationFire />Bonefire outdoor space </li>
                           <li> <GiHighGrass />Spacious yard sorunded by fence</li>
                        </ul>
                        <img src="/photo/summ11.jpg"
                            className={styles['image-item']} />
                    </section>

                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitle}>
                            <strong>Prices</strong>
                        </div>
                        <div style={{
                            display: 'grid',
                            justifyItems: 'center',
                            textAlign: 'center',
                            color: 'rgb(9, 9, 9, 0.8)'
                        }}>
                            <strong>Our prices may vary acording to different seasons or holidays: </strong>
                            <p style={{
                                fontStyle: 'italic',
                            }}>*You can only book a minimum of 2 night for the entire property</p>
                            <ul style={{listStyleType:'none'}}>
                                <li>May - September: 550 RON/night </li>
                                <li>Octomber - April: 750 RON/night </li>
                                <li>Legal holidays: minimun book is of 3 nights plus 20% normal price</li>
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
                                    //onChange={handleSelectDay}
                                    value={Date()}
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