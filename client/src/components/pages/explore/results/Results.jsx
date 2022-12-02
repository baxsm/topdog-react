import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { RiLoader5Fill } from 'react-icons/ri'

export default function Results() {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const location = useLocation();

    useEffect(() => {
        setQuery(location.search.split('=')[1])
        if(location.search.split('=')[1]) {
            setLoading(true)
        }
    }, [location])


    const styles = {
        wrapper: '',
        loaderContainer: 'p-4 mt-[4rem]',
        loader: 'text-[3rem] loader',
    }

    return (
        <div className={styles.wrapper}>
            {
                loading ? (
                    <div className={styles.loaderContainer}>
                        <RiLoader5Fill className={styles.loader} />
                    </div>
                ) : <></>
            }
        </div>
    )
}
