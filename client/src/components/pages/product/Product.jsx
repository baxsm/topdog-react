import React from 'react'
import ImageCarousel from './imageCarousel/ImageCarousel'
import ProductContent from './productContent/ProductContent'
import {useLocation} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loading from '../../common/loading/Loading'

export default function Product() {

    const styles = {
        wrapper: 'min-h-[90vh] grid grid-cols-1 md:grid-cols-[45vw_auto] p-4',
        leftContainer: '',
        rightContainer: '',
    }

    const location = useLocation();
    const [productID, setProductID] = useState(location.pathname.split(/[/]+/).pop() || undefined)
    const [isLoading, setIsLoading] = useState(true)

    const [imageData, setImageData] = useState(null)
    const [contentData, setContentData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get(`http://localhost:8800/api/products/searchById/${productID}`)
                .then((res) => {
                    setImageData(res.data[0].images)
                    setContentData(res.data[0])
                    setIsLoading(false);
                })
            }catch(err) {
                setIsLoading(false);
            }
        }
        getData();
    }, [productID])


    return (
        <div className={isLoading ? 'min-h-[90vh] grid grid-cols-1 p-4' : styles.wrapper}>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className={styles.leftContainer}>
                            {
                                imageData ? (<ImageCarousel imageData={imageData}/>) : <></>
                            }
                        </div>
                        <div className={styles.rightContainer}>
                            {
                                contentData ? (<ProductContent contentData={contentData}/>) : <></>
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
