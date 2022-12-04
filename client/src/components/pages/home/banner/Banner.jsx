import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../../../common/loading/Loading';
import axios from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

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
        wrapper: 'bg-primaryColor',
        swiperContainer: 'swiperBanner',
        imageContainer: 'flex justify-center place-items-center',
        image: 'min-w-[500px] max-w-[500px] h-[93vh] object-cover object-top',
        slideContainer: 'flex place-items-center gap-[5rem]',
        slideContent: 'text-[#000] font-[800] text-center flex justify-center place-items-center gap-[2rem] flex-col p-4 text-center w-full',
        title: 'text-[3rem]',
        subtitle: 'text-[1rem] text-[#353535] border-b-primary2Color border-b-2',
        link: 'text-[#858585] uppercase tracking-[2px] hover:tracking-[5px] font-[700] hover:text-primary2Color mt-[2rem]',
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
                        grabCursor={true}
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
                                                <Link to='/explore/?q=new' className={styles.link}>Explore More</Link>
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
