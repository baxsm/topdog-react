import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedCard({ featuredData }) {


    const styles = {
        card: 'flex flex-col justify-center place-items-center text-start gap-[5px] relative',
        imageContainer: '',
        image: 'w-[300px] h-[300px] object-cover rounded-xl',
        contentContainer: 'w-full flex flex-col gap-[5px]',
        typeContainer: '',
        type: 'text-[1rem] text-[#343434]',
        priceContainer: 'flex gap-[1rem] text-[1rem]',
        discountOriginal: 'line-through text-[#656565]',
        discountNew: 'text-[#000] font-[700]',
        newArrivalContainer: 'absolute top-[5px] left-[10px] p-1 bg-[#fff]',
        newArrivalText: 'text-secondary3Color'
    }


    return (
        <>
            <Link to={`/explore/?q=${featuredData?.category}`}>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={featuredData?.images.split('|')[0]} alt="" className={styles.image} />
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.typeContainer}>
                            <h5 className={styles.type}>{featuredData?.name}</h5>
                        </div>
                        <div className={styles.priceContainer}>
                            <p className={styles.discountOriginal}>${featuredData?.price + featuredData?.discount}</p>
                            <p className={styles.discountNew}>${featuredData?.price}</p>
                        </div>
                    </div>
                    {/*
                        <div className={styles.newArrivalContainer}>
                            <p className={styles.newArrivalText}>New Arrival</p>
                        </div>
                    */}
                </div>
            </Link>
        </>
    )
}
