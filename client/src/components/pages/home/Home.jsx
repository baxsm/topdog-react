import React from 'react'
import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Featured from './featured/Featured'
import TopSeller from './topseller/TopSeller'

export default function Home() {
    return (
        <main>
            <Banner />
            <Featured />
            <Categories />
            <TopSeller />
        </main>
    )
}
