import React, { useEffect, useState } from 'react'
import Heading from '../../../common/heading/Heading'
import axios from 'axios'
import Loading from '../../../common/loading/Loading'
import ProductCard from '../../../common/productCard/ProductCard'

export default function Featured() {

    const [isLoading, setIsLoading] = useState(true);
    const [featuredData, setFeaturedData] = useState([])

    const getFeaturedData = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/products/featured`)
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
                                featuredData.slice(0,8).map((item, index) => {
                                    return <ProductCard content={item} darkText={true} key={index}/>
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
