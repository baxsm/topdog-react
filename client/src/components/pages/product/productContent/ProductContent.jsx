import React from 'react'

export default function ProductContent() {

    const styles = {
        wrapper: 'p-4',
        container: 'flex flex-col gap-[1rem]',
        titleContainer: '',
        title: 'text-[2rem] font-[700] text-[#454545]',
        subtitleContainer: '',
        subtitle: 'text-[1rem] text-[#656565]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Lorem Ipsum</h2>
                </div>
                <div className={styles.subtitleContainer}>
                    <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque ad, vel ab at vero corrupti nobis? Ratione, sunt explicabo. Veniam sunt totam distinctio, dignissimos libero facere nemo voluptatem quibusdam.</p>
                </div>
            </div>
        </div>
    )
}
