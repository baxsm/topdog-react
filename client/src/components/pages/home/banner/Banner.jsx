import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../../../common/loading/Loading';
import axios from 'axios';
import { useEffect } from 'react';

export default function Banner() {
    //http://localhost:8800/api/extra/getBannerData
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get(`http://localhost:8800/api/extra/getBannerData`)
        .then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const styles = {
        wrapper: '',
        swiperContainer: 'swiperBanner',
        imageContainer: 'flex justify-center place-items-center',
        image: 'w-[100vw] h-[93vh] object-cover object-center blur-[3px]',
        slideContainer: 'relative flex justify-center place-items-center',
        slideContent: 'absolute text-[#fff] font-[800] text-center flex justify-center place-items-center gap-[2rem] flex-col',
        title: 'text-[3rem]',
        subtitle: 'text-[1rem] text-[#d3d3d3] border-b-primary2Color border-b-2'

    }

    return (
        <div className={styles.wrapper}>
            {
                !isLoading ? (
                    <Swiper
                        slidesPerView={1}
                        speed={1500}
                        centeredSlides={true}
                        className={styles.swiperContainer}
                        loop={true}
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={styles.slideContainer}>
                                            <div className={styles.imageContainer}>
                                                <img src={item.imageUrl} alt="" className={styles.image} />
                                            </div>
                                            <div className={styles.slideContent}>
                                                <h2 className={styles.title}>{item.title}</h2>
                                                <p className={styles.subtitle}>$ {item.subtitle}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                ) : (
                    <div className="h-[93vh] flex justify-center">
                        <Loading />
                    </div>
                )
            }
        </div>
    )
}
