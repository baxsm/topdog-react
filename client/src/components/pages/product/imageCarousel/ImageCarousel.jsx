import React from 'react'
import { useState } from 'react';
// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactModal from 'react-modal'

export default function ImageCarousel() {

    const imageList = [
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
        {
            imageSource: 'https://i.ibb.co/t28xDyR/pexels-photo-13449836.webp',
        },
    ]

    const styles = {
        wrapper: 'p-4 ',
        container: '',
        swiper: 'productSwiper',
        imageContainer: 'flex justify-center place-items-center',
        image: 'w-[500px] h-[500px] object-cover cursor-pointer rounded-lg'
    }

    const [currImage, setCurrImage] = useState(imageList[0].imageSource);

    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
    }

    const closeModal = () => {
        setModalActive(false);
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Swiper
                    navigation={imageList.length > 1 ? true : false}
                    spaceBetween={0}
                    modules={[Navigation]}
                    className={styles.swiper}
                    slidesPerView={1}
                >
                    {
                        imageList.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.imageContainer}>
                                        <img src={item.imageSource} alt="" className={styles.image} onClick={() => { openModal(item.imageSource) }} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <ReactModal
                isOpen={modalActive}
                onRequestClose={closeModal}
                className={modalActive ? 'modal' : 'hidden'}
                closeTimeoutMS={500}
                shouldCloseOnEsc={true}
                overlayClassName="modalOverlay"
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
            >
                <div className="relative">
                    <img src={currImage} alt="" />
                    <span className="fixed top-[1rem] right-[1rem] text-[#f1f1f1] text-[40px] cursor-pointer z-[100] hover:text-[#bbb]" onClick={() => closeModal()}>&times;</span>
                </div>
            </ReactModal>
        </div>
    )
}
