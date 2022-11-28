import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner() {

    const [carouselData, setCarouselData] = useState([]);

    const styles = {
        wrapper: '',
        swiperContainer: 'swiperBanner',
        imageContainer: 'flex justify-center place-items-center',
        image: 'w-[100vw] h-[93vh] object-cover object-top',
    }

    return (
        <div className={styles.wrapper}>
            <Swiper
                slidesPerView={1}
                speed={1500}
                centeredSlides={true}
                className={styles.swiperContainer}
            >
                <SwiperSlide>
                    <img src='https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg' alt="" className={styles.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg' alt="" className={styles.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg' alt="" className={styles.image} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
