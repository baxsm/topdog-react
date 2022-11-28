import React from 'react'
import Heading from '../../../common/heading/Heading'
import TopSellerCard from './TopSellerCard'


export default function TopSeller() {

    const styles = {
        wrapper: 'bg-secondary3Color text-[#fff] py-[2rem]',
        container: 'flex flex-col justify-center place-items-center text-center',
        toggleContainer: 'flex flex-col md:flex-row justify-center place-items-center gap-[2rem]',
        toggleButton: 'uppercase bg-primary2Color h-[40px] min-w-[160px] rounded-full',
        dataContainer: 'mt-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-[1rem]',
    }

    return (
        <div className={styles.wrapper}>
            <Heading title='top selling products' textWhite={true}/>
            <div className={styles.container}>
                <div className={styles.toggleContainer}>
                    <button className={styles.toggleButton}>All</button>
                    <button className={styles.toggleButton}>Jacket</button>
                    <button className={styles.toggleButton}>TShirt</button>
                    <button className={styles.toggleButton}>Shoes</button>
                    <button className={styles.toggleButton}>Extra</button>
                </div>
                <div className={styles.dataContainer}>
                    <TopSellerCard />
                    <TopSellerCard />
                    <TopSellerCard />
                    <TopSellerCard />
                    <TopSellerCard />
                </div>
            </div>
        </div>
    )
}
