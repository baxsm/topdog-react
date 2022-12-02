import React from 'react'

export default function SideBar() {

    const styles = {
        container: 'min-h-[89vh] bg-[#fff]',
        links: 'flex flex-col p-4 gap-[1rem]'
    }

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
        </div>
    )
}
