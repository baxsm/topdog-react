import React from 'react'
import SearchBar from './searchbar/SearchBar'
import Results from './results/Results'
import SideBar from './sidebar/SideBar'

export default function Explore() {

    const styles = {
        wrapper: 'flex',
        left: 'max-w-[200px] min-w-[200px]',
        right: 'flex flex-col place-items-center w-full',
    }

    return (
        <>
            <main className={styles.wrapper}>
                <div className={styles.left}>
                    <SideBar />
                </div>
                <div className={styles.right}>
                    <SearchBar />
                    <Results />
                </div>
            </main>
        </>
    )
}
