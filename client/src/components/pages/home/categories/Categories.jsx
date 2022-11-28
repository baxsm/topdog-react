import React from 'react'
import './categories.css'

export default function Categories() {

    const styles = {
        wrapper: 'p-4 py-[2rem] my-[2rem] hidden md:block',
        container: '',
        imageContainer: 'overflow-hidden relative flex justify-center place-items-center',
        image: 'w-full h-full object-cover cursor-pointer rounded-sm',
        button: 'absolute uppercase font-[700] px-4 py-2 bg-[#fff]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className="gallery">
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/12887176/pexels-photo-12887176.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>Sale</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>Women</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>New Season</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>Men</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/8764475/pexels-photo-8764475.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>Accessories</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/247203/pexels-photo-247203.jpeg" alt="" className={styles.image} />
                        <button className={styles.button}>Shoes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
