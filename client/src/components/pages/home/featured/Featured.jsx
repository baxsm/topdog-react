import React from 'react'
import Heading from '../../../common/heading/Heading'
import FeaturedCard from './FeaturedCard'

export default function Featured() {
    const styles = {
        wrapper: '',
        container: '',
        cardContainer: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem] my-[2rem] mx-[2rem] md:mx-[8rem]'
    }

    return (
        <div className={styles.wrapper}>
            <Heading
                title='Featured Products'
                subtitle='Lorem ipsum dolor sit consectetur adipisicing elit. Rem aliquid magni expedita reiciendis, tempora nulla! Dolore veritatis atque nam dolorem facere? Totam earum harum accusantium impedit dolor iste in fuga!'
            />
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                </div>
            </div>
        </div>
    )
}
