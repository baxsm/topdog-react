import React from 'react'
import Logo from '../logo/Logo'

export default function Footer() {

    const styles = {
        wrapper: 'w-full h-full p-[2rem] bg-[#fff]',
        container: 'grid grid-cols-1 md:grid-cols-2 place-items-center gap-[2rem]',
        logoContainer: '',
        textContainer: 'text-[#656565] text-[1rem] font-[500] pr-0 md:pr-[10rem] text-center',
        copyContainer: 'p-[2rem] text-center bg-[#858585] text-[#fff] font-[700] text-[1.25rem]'
    }

    return (
        <>
            <footer className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.logoContainer}>
                        <Logo fontSize='2rem'/>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam, natus labore, aperiam minima hic officiis rem facilis repellendus eius nemo perspiciatis fuga veritatis cum autem voluptas porro. Ipsam, aliquam.</p>
                    </div>
                </div>
            </footer>
            <div className={styles.copyContainer}>
                <a href='https://github.com/baxsm' rel="noreferrer" target='_blank'>&copy; B A X S M</a>
            </div>
        </>
    )
}
