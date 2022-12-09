import React from 'react'
import { useState } from 'react'
import Heading from '../../../common/heading/Heading'
import TopSellerCard from './TopSellerCard'
import Loading from '../../../common/loading/Loading'
import axios from 'axios'
import { useEffect } from 'react'


export default function TopSeller() {

    const styles = {
        wrapper: 'bg-secondary3Color text-[#fff] py-[2rem]',
        container: 'flex flex-col justify-center place-items-center text-center',
        toggleContainer: 'flex flex-col md:flex-row justify-center place-items-center gap-[2rem]',
        toggleButton: 'uppercase bg-primary2Color h-[40px] min-w-[160px] rounded-full',
        dataContainer: 'mt-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-[1rem]',
    }

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [query, setQuery] = useState('all');
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:8800/api/products/topSelling`)
                .then((res) => {
                    setData(res.data);
                    setFilterData(res.data);
                    setIsLoading(false);
                })
        }
        getData();
    }, [])

    const handleFilter = (cat) => {
        if (cat === "all") {
            setFilterData(data)
            return
        }
        const newItem = data.filter((item) => item.category.includes(cat))
        setFilterData(newItem)
    }

    return (
        <div className={styles.wrapper}>
            <Heading title='top selling products' textWhite={true} />
            <div className={styles.container}>
                <div className={styles.toggleContainer}>
                    <button className={styles.toggleButton} onClick={() => {handleFilter('all')}}>All</button>
                    <button className={styles.toggleButton} onClick={() => {handleFilter('jacket')}}>Jacket</button>
                    <button className={styles.toggleButton} onClick={() => {handleFilter('shirt')}}>Shirts</button>
                    <button className={styles.toggleButton} onClick={() => {handleFilter('shoes')}}>Shoes</button>
                    <button className={styles.toggleButton} onClick={() => {handleFilter('accessories')}}>Extra</button>
                </div>
                <div className={isLoading ? 'p-10' : styles.dataContainer}>
                    {
                        isLoading ? (
                            <Loading />
                        ) : (
                            <>
                                {
                                    filterData ?
                                        (
                                            filterData.map((item, index) => {
                                                return (
                                                    <TopSellerCard topSellerData={item} key={index}/>
                                                )
                                            })
                                        ) :
                                        <></>
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
