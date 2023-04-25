import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
// import bgVidWinter from '../public/coverVideoWinter.mp4';


const Carusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div style={
                    {width: '100%', 
                    height: '480px',
                     }}>
                    <Image 
                    src= {'/photo/summ03.jpg'} 
                    alt='cover-photo-summer'
                    fill sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Warm Moments</h3>
                    <p>Spring & Summer.  Sun. Fire. Grill. Clear blue skyes... </p>
                    <p>See more here!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{width: '100%', height: '480px' }}>
            <Image 
                    src= {'/photo/win25.jpg'} 
                    alt='cover-photo-winter'
                    fill sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                    />
            </div>
                <Carousel.Caption>
                    <h3>Chill Vibes</h3>
                    <p>Autumn & Winter. Snow. Ski. Foggy. Rain. Shadows... See here more!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{width: '100%', height: '480px'}}>
            <Image 
                    src= {'/photo/bedroom02.jpg'} 
                    alt='cover-photo-inside'
                    fill sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                    />
            </div>
                <Carousel.Caption>
                    <h3>Please, come on in!</h3>
                    <p>....</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carusel;