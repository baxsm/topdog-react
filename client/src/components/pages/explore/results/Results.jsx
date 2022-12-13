import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { RiLoader5Fill } from 'react-icons/ri'
import axios from 'axios'
import ProductCard from '../../../common/productCard/ProductCard';

export default function Results() {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(true)

    const location = useLocation();

    const [data, setData] = useState([])

    useEffect(() => {
        setQuery(location.search.split('=')[1])
        if (location.search.split('=')[1]) {
            setLoading(true)
        }

        const getData = async () => {
            await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/products/exploreProduct/${location.search.split('=')[1]}`)
                .then((res) => {
                    setData(res.data);
                    setLoading(false)
                })
        }
        getData();
    }, [location])


    const styles = {
        wrapper: 'mb-[4rem]',
        loaderContainer: 'p-4 mt-[4rem]',
        loader: 'text-[5rem] loader text-primary2Color',
        cardContainer: 'grid grid-cols-1 md:grid-cols-3 p-8 gap-[2rem] my-[2rem]'
    }

    return (
        <div className={styles.wrapper}>
            {
                loading ? (
                    <div className={styles.loaderContainer}>
                        <RiLoader5Fill className={styles.loader} />
                    </div>
                ) : (
                    <div className={styles.cardContainer}>
                        {
                            data ? (
                                <>
                                    {
                                        data.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <ProductCard content={item} darkText={true} key={index}/>
                                            )
                                        })
                                    }
                                </>
                            ) : <></>
                        }
                    </div>
                )
            }
        </div>
    )
}
