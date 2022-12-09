import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function TopSellerCard({ topSellerData }) {

    const styles = {
        card: 'topSellerCard flex flex-col justify-center place-items-center text-start gap-[5px] relative',
        imageContainer: '',
        image: 'w-[300px] h-[300px] object-cover rounded-xl cursor-pointer',
        contentContainer: 'w-full flex flex-col gap-[5px]',
        typeContainer: '',
        type: 'text-[1rem] text-primaryColor',
        priceContainer: 'flex gap-[1rem] text-[1rem]',
        discountOriginal: 'line-through text-[#999999]',
        discountNew: 'text-[#fff] font-[700]',
        optionsContainer: 'topSellerOptions absolute flex justify-center place-items-center gap-[2rem]',
        button: 'p-4 rounded-full bg-[#fff] hover:bg-primary2Color text-[#000] hover:text-[#fff]',
        buttonIcon: 'text-[1.25rem]'
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={topSellerData.images.split('|')[0]} alt="" className={styles.image} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.typeContainer}>
                        <h5 className={styles.type}>{topSellerData.name}</h5>
                    </div>
                    <div className={styles.priceContainer}>
                        <p className={styles.discountOriginal}>${topSellerData.price + topSellerData.discount}</p>
                        <p className={styles.discountNew}>${topSellerData.price}</p>
                    </div>
                </div>
                <div className={styles.optionsContainer}>
                    <div className={styles.cartContainer}>
                        <button className={styles.button}>
                            <BsCartPlus className={styles.buttonIcon} />
                        </button>
                    </div>
                    <div className={styles.detailContainer}>
                        <Link to={`/product/${topSellerData.id}`}>
                            <button className={styles.button}>
                                <BiLinkExternal className={styles.buttonIcon} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
