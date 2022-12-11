import React from 'react'
import { useState } from 'react';
// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactModal from 'react-modal'

export default function ImageCarousel({imageData}) {

    const styles = {
        wrapper: 'p-4 ',
        container: '',
        swiper: 'productSwiper',
        imageContainer: 'flex justify-center place-items-center',
        image: 'w-[500px] h-[500px] object-cover cursor-pointer rounded-lg'
    }

    const [currImage, setCurrImage] = useState(imageData.split('|')[0] || null);

    const [modalActive, setModalActive] = useState(false);

    const openModal = (source) => {
        setCurrImage(source);
        setModalActive(true);
    }

    const closeModal = () => {
        setModalActive(false);
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Swiper
                    navigation={imageData.split('|').length > 1 ? true : false}
                    spaceBetween={0}
                    modules={[Navigation]}
                    className={styles.swiper}
                    slidesPerView={1}
                    speed={1200}
                >
                    {
                        imageData.split('|').map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.imageContainer}>
                                        <img src={item} alt="" className={styles.image} onClick={() => { openModal(item) }} />
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
