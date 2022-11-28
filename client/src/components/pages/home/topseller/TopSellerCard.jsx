import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'

export default function TopSellerCard() {

    const styles = {
        card: 'topSellerCard flex flex-col justify-center place-items-center text-start gap-[5px] relative',
        imageContainer: '',
        image: 'w-[300px] h-[300px] object-cover rounded-xl cursor-pointer',
        contentContainer: 'w-full flex flex-col gap-[5px]',
        typeContainer: '',
        type: 'text-[1rem] text-[#959595]',
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
                    <img src="https://images.pexels.com/photos/5885995/pexels-photo-5885995.jpeg" alt="" className={styles.image} />
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
                <div className={styles.optionsContainer}>
                    <div className={styles.cartContainer}>
                        <button className={styles.button}>
                            <BsCartPlus className={styles.buttonIcon}/>
                        </button>
                    </div>
                    <div className={styles.detailContainer}>
                        <button className={styles.button}>
                            <BiLinkExternal className={styles.buttonIcon}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
