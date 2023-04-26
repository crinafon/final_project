import React, { useState, useRef, useEffect } from 'react';
import {images} from '../constants/images';
import Image from 'next/image';
import styles from  '../styles/gallery.module.css';
import { Spinner } from 'react-bootstrap';

const Gallery = () => {
    // console.log(images)

    const [selectedImg, setSelectedImg] = useState();
    const [animMoveImg, setAnimMoveImg] = useState(0);
    const [animHideImg, setAnimHideImg] = useState(1);
    const [loadingImage, setLoadingImage] = useState(false);

    const bigImageRef = useRef();

    const photoArray = new Array(images.qty).fill(images.baseFotoName).map((elem, index) => elem + index);

    let toushStart = false;
    let touchMoves = [];

    useEffect(() => {
        setLoadingImage(true)
    }, [selectedImg])

    const handleOnTouchStart = () => {
        toushStart = true;
    }

    const handleOnTouchMove = (e) => {
        if (toushStart && touchMoves.length < 2 && e.touches.length === 1) {
            touchMoves.push(e?.touches[0]?.clientX)
        }
    }

    const incrementWithAnimation = () => {
        const imgWidth = bigImageRef.current.clientWidth + 100
        setAnimMoveImg(-imgWidth);
        setTimeout(() => {
            setAnimHideImg(0);
            setAnimMoveImg(imgWidth);
            if (selectedImg === photoArray.length - 1) setSelectedImg(0);
            else setSelectedImg(prev => prev + 1);
        }, 250);

        setTimeout(() => {
            setAnimHideImg(1);
            setAnimMoveImg(0)
        }, 500)
    }

    const decrementWithAnimation = () => {
        const imgWidth = bigImageRef.current.clientWidth - 100
        setAnimMoveImg(imgWidth);
        setTimeout(() => {
            setAnimHideImg(0);
            setAnimMoveImg(-imgWidth);
            if (selectedImg === 0) setSelectedImg(photoArray.length - 1);
            else setSelectedImg(prev => prev - 1);
        }, 250);

        setTimeout(() => {
            setAnimHideImg(1);
            setAnimMoveImg(0)
        }, 500)
    }

    const handleOnTouchEnd = () => {
        toushStart = false;
        if (touchMoves.length < 2) return
        if (touchMoves[0] > touchMoves[1]) {
            incrementWithAnimation()
        }
        else {
            decrementWithAnimation()
        }
        touchMoves = [];
    }

    // console.log(loadingImage)

  return (
    <>
    <div className={styles.container}>
      <h1  className= {styles.galleryTitle}>Photo Gallery</h1>

      <div className={styles["gallery-grid"]} >
        {images.map((image, index) => (
            <Image className={styles['image-item']}
              key={image.src} 
              src={`/photo/${image.src}`} 
              alt = 'image-item' 
              width={250} height={200}
              onClick={() => setSelectedImg(index)} />
        ))}
        
      </div>
    </div>
     {selectedImg !== undefined && <div className={styles["galery-img-zoom-container"]}>
                <button
                    className="btn-close btn-close-white"
                    style={{ position: 'absolute', bottom: 40, right: 40 }}
                    onClick={() => setSelectedImg(undefined)}></button>

                <button onClick={decrementWithAnimation} className={styles["galery-img-zoom-nav-prev"]}>&#x27A4;</button>
                <div className={styles["galery-img-zoom-content"]}>
                    <img
                        onLoad={() => setLoadingImage(false)}
                        src={`/photo/${images[selectedImg].src}`}
                        alt="galery item"
                        style={{ left: animMoveImg, opacity: animHideImg, visibility: loadingImage ? 'hidden' : 'visible' }}
                        ref={bigImageRef}
                        onTouchStart={handleOnTouchStart}
                        onTouchMove={handleOnTouchMove}
                        onTouchEnd={handleOnTouchEnd}
                    />
                    {loadingImage && <Spinner animation="border" role="status" variant="light" 
                    style={{position: 'absolute'}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </div>
                <button onClick={incrementWithAnimation} className={styles["galery-img-zoom-nav-next"]}>&#x27A4;</button>
            </div>} 
    </>
  )
}

export default Gallery
