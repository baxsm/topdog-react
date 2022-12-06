import React from 'react'
import ImageCarousel from './imageCarousel/ImageCarousel'
import ProductContent from './productContent/ProductContent'

export default function Product() {

    const styles = {
        wrapper: 'min-h-[90vh] grid grid-cols-1 md:grid-cols-[45vw_auto] p-4',
        leftContainer: '',
        rightContainer: '',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContainer}>
                <ImageCarousel />
            </div>
            <div className={styles.rightContainer}>
                <ProductContent />
            </div>
        </div>
    )
}
