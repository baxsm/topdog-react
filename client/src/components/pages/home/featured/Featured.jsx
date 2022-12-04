import React, { useEffect, useState } from 'react'
import Heading from '../../../common/heading/Heading'
import FeaturedCard from './FeaturedCard'
import axios from 'axios'
import Loading from '../../../common/loading/Loading'

export default function Featured() {

    const [isLoading, setIsLoading] = useState(true);
    const [featuredData, setFeaturedData] = useState([])

    const getFeaturedData = async () => {
        await axios.get(`http://localhost:8800/api/products/featured`)
        .then((res) => {
            setFeaturedData(res.data);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getFeaturedData()
    }, [])

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
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className={styles.cardContainer}>
                            {
                                featuredData.map((item, index) => {
                                    return (
                                        <FeaturedCard featuredData={item}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
