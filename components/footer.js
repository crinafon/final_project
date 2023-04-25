import styles from '../styles/footer.module.css';
// import 'bootsrap-icons/font/bootstrap-icons.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {CiLocationOn} from 'react-icons/ci';
import { AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
    return(
    <div className={styles.footerContainer} 
    // style = {{
    // color: 'aliceblue',
    // margin: '0',
    // padding: '8px',
    // display: 'grid',
    // justifyContent: 'space-around',
    // alignItems: 'baseline',
    // maxHeight: '16vh',
    // backgroundColor: '#282626'
    // }}
    >
        <div>
            <CiLocationOn size='2rem' color='#c4b2e0'/>
            <a href='https://www.google.com/maps/place/C%C4%83su%C8%9Ba+de+munte/@46.664122,23.091743,16z/data=!4m6!3m5!1s0x4748df1ded24fad9:0xd25365822f438992!8m2!3d46.6641217!4d23.0917425!16s%2Fg%2F11jzwhcx88?hl=en' 
            target='blank' 
            style={{
            textDecoration: 'none', 
            color: 'aliceblue'
            }}>307D, Main str., Marisel, Cluj, Romania</a> 
        </div>
        <div> <AiOutlinePhone  size='2rem' color= '#c4b2e0'/>
            +40 744 500 718</div>
    
        <a href='https://www.facebook.com/profile.php?id=100083320302053' target='blank' 
                style={{
                    textDecoration: 'none', 
                    color: '#c4b2e0'
                    }}><FiFacebook size='1.7rem' color='#c4b2e0'/>Cabana Casuta de Munte</a>
             
        <a href='https://www.instagram.com/casuta.de.munte/' target='blank' 
                style={{
                    textDecoration: 'none', 
                    color: '#c4b2e0'
                    }}><AiOutlineInstagram size='2rem' color='#c4b2e0'/>casuta.de.munte</a>  
        
        
    </div>
    )
}

export default Footer;

// import React from 'react';
// import {
//     MDBFooter,
//     MDBContainer,
//     MDBCol,
//     MDBRow,
//     MDBIcon,
//     MDBBtn
//   } from 'mdb-react-ui-kit';
  
//   export default function App() {
//     return (
//       <MDBFooter className='bg-dark text-center text-white'>
//         <MDBContainer className='p-4 pb-0'>
//           <section className='mb-4'>
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='facebook-f' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='twitter' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='google' />
//             </MDBBtn>
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='instagram' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='linkedin-in' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='github' />
//             </MDBBtn>
//           </section>
//         </MDBContainer>
  
//         <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           © 2020 Copyright:
//           <a className='text-white' href='https://mdbootstrap.com/'>
//             MDBootstrap.com
//           </a>
//         </div>
//       </MDBFooter>
//     );
//   }