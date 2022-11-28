import React from 'react'

export default function Heading({ title, subtitle, reverse = false, textWhite = false }) {

    const styles = {
        container: 'flex place-items-center p-[2rem] my-[1rem] gap-[2rem]',
        init: 'flex-col md:flex-row',
        reverse: 'flex-col md:flex-row-reverse',
        titleContainer: 'md:px-[15rem]',
        title: 'text-[2rem] font-[600] tracking-[5px] uppercase',
        subtitleContainer: 'md:pr-[15rem]',
        subtitle: 'text-[1rem] text-[#858585] lowercase',
    }

    return (
        <div className={reverse ? styles.container + " " + styles.reverse : styles.container + " " + styles.init}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} style={{color: textWhite ? '#fff' : '#000'}}>{title}</h2>
            </div>
            <div className={styles.subtitleContainer}>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}
