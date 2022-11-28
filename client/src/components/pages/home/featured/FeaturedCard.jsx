import React from 'react'
import {Link} from 'react-router-dom'

export default function FeaturedCard() {


    const styles = {
        card: 'flex flex-col justify-center place-items-center text-start gap-[5px]',
        imageContainer: '',
        image: 'w-[33.33vw] h-[400px] object-cover rounded-xl',
        contentContainer: 'w-full flex flex-col gap-[5px]',
        typeContainer: '',
        type: 'text-[1rem] text-[#343434]',
        priceContainer: 'flex gap-[1rem] text-[1rem]',
        discountOriginal: 'line-through text-[#656565]',
        discountNew: 'text-[#000] font-[700]',
    }


    return (
        <>
            <Link to='/'>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src="https://images.pexels.com/photos/5885995/pexels-photo-5885995.jpeg" alt="" className={styles.image}/>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.typeContainer}>
                            <h5 className={styles.type}>Long sleeve tshirt</h5>
                        </div>
                        <div className={styles.priceContainer}>
                            <p className={styles.discountOriginal}>$19</p>
                            <p className={styles.discountNew}>$12</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
