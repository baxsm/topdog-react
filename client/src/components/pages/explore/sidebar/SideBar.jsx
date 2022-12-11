import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    const styles = {
        container: 'min-h-[89vh] h-full bg-[#fff]',
        links: 'flex flex-col p-4 gap-[1rem]',
        link: 'text-center capitalize text-[1.25rem] text-[#353535] hover:text-[#656565]',
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:8800/api/products/getCategories`)
                .then((res) => {
                    var __array = [];
                    for(var x = 0; x < res.data.length; x++) {
                        if(res.data[x].category.includes(',')) {
                            __array.push(res.data[x].category.split(',')[0])
                        }
                        else {
                            __array.push(res.data[x].category)
                        }
                    }
                    setData([...new Set(__array)]);
                })
        }
        getData();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    data ? (
                        <>
                            {
                                data.map((item, index) => {
                                    return (
                                        <p key={index} className={styles.link}>
                                            <Link to={`/explore/?q=${item}`}>{item}</Link>
                                        </p>
                                    )
                                })
                            }
                        </>
                    ) : <></>
                }
            </div>
        </div>
    )
}
