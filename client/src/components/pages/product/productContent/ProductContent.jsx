import React from 'react'
import { useState } from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/cartReducer'

export default function ProductContent({contentData}) {

    const styles = {
        wrapper: 'p-4',
        container: 'flex flex-col gap-[1.5rem]',
        titleContainer: '',
        title: 'text-[2rem] font-[700] text-[#454545]',
        subtitleContainer: '',
        subtitle: 'text-[1rem] text-[#656565]',
        priceContainer: '',
        price: 'text-[1.5rem] text-secondary2Color font-[500]',
        quantityContainer: 'flex text-center place-items-center gap-[20px] text-[1rem] text-[#454545]',
        quantityButton: 'w-[50px] h-[50px] bg-[#e1e1e1] hover:bg-[#d3d3d3] text-[1.25rem]',
        quantityText: '',
        addCartContainer: '',
        addCartButton: 'uppercase text-[1rem] text-[#fff] bg-secondary3Color hover:bg-secondary2Color px-20 py-2 rounded-lg',
        addCartButtonContainer: 'flex gap-[10px] place-items-center justify-center',
    }

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{contentData.name}</h2>
                </div>
                <div className={styles.priceContainer}>
                    <h5 className={styles.price}>${contentData.price}</h5>
                </div>
                <div className={styles.subtitleContainer}>
                    <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque ad, vel ab at vero corrupti nobis? Ratione, sunt explicabo. Veniam sunt totam distinctio, dignissimos libero facere nemo voluptatem quibusdam.</p>
                </div>
                <div className={styles.quantityContainer}>
                    <button className={styles.quantityButton} onClick={() => {quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)}}>-</button>
                    <p className={styles.quantityText}>{quantity}</p>
                    <button className={styles.quantityButton} onClick={() => {quantity < 5 ? setQuantity(quantity+1) : setQuantity(quantity)}}>+</button>
                </div>
                <div className={styles.addCartContainer}>
                    <button className={styles.addCartButton} onClick={() => {
                                dispatch(addToCart({
                                    id: contentData.id,
                                    name: contentData.name,
                                    imageSrc: contentData.images.split('|')[0],
                                    price: contentData.price,
                                    quantity: quantity,
                                }))
                            }}>
                        <div className={styles.addCartButtonContainer}>
                            <MdOutlineAddShoppingCart className={styles.addCartButtonIcon}/>
                            <p className={styles.addCartButtonText}>Add To Cart</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
