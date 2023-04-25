import React from 'react';
import Image from 'next/image';
import styles from  '../styles/gallery.module.css';
import {images} from '../constants/images';

const Gallery = () => {
    // console.log(images)
  return (
    <div className={styles.container}>
      <h1  className= {styles.galleryTitle} style={{
        // color: 'aliceblue',
        // margin: '8px',
        // padding: '8px',
      }}>Photo Gallery</h1>
      <div className={styles["gallery-grid"]} >
        {images.map(image => (
            <Image className={styles['image-item']}
            key={image.src} 
            src={`/photo/${image.src}`} 
            alt = 'image-item' 
            width={250} height={200}/>
        ))}
      </div>
    </div>
  )
}

export default Gallery
