import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartReducer'

export default function ProductCard({ content, darkText = false }) {

    const styles = {
        card: 'topSellerCard flex flex-col justify-center place-items-center text-start gap-[5px] relative',
        imageContainer: '',
        image: 'w-[300px] h-[300px] object-cover rounded-xl',
        contentContainer: 'w-full flex flex-col gap-[5px]',
        typeContainer: '',
        type: 'text-[1rem] text-[#d3d3d3]',
        typeDark: 'text-[1rem] text-[#454545]',
        priceContainer: 'flex gap-[1rem] text-[1rem]',
        discountOriginal: 'line-through text-[#959595]',
        discountOriginalDark: 'line-through text-[#656565]',
        discountNew: 'text-[#fff] font-[700]',
        discountNewDark: 'text-[#000] font-[700]',
        optionsContainer: 'topSellerOptions absolute flex justify-center place-items-center gap-[2rem]',
        button: 'p-4 rounded-full bg-[#fff] hover:bg-primary2Color text-[#000] hover:text-[#fff]',
        buttonIcon: 'text-[1.25rem]'
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={content.images.split('|')[0]} alt="" className={styles.image} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.typeContainer}>
                        <h5 className={darkText ? styles.typeDark : styles.type}>{content.name}</h5>
                    </div>
                    <div className={styles.priceContainer}>
                        <p className={darkText ? styles.discountOriginalDark : styles.discountOriginal}>${content.price + content.discount}</p>
                        <p className={darkText ? styles.discountNewDark : styles.discountNew}>${content.price}</p>
                    </div>
                </div>
                <div className={styles.optionsContainer}>
                    <div className={styles.cartContainer}>
                        <button
                            className={styles.button}
                            onClick={() => {
                                dispatch(addToCart({
                                    id: content.id,
                                    name: content.name,
                                    imageSrc: content.images.split('|')[0],
                                    price: content.price,
                                    quantity: 1,
                                }))
                            }}
                        >
                            <BsCartPlus className={styles.buttonIcon} />
                        </button>
                    </div>
                    <div className={styles.detailContainer}>
                        <Link to={`/product/${content.id}`}>
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
