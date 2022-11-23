import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {

    const styles = {
        wrapper: 'w-full h-[100vh] hidden md:block',
        container: 'grid grid-cols-1 lg:grid-cols-2 gap-[6rem] lg:gap-[0]',
        left: 'w-full h-full pt-[4rem] lg:pt-0 relative p-8',
        contentContainer: 'w-full h-full flex flex-col gap-[2rem] justify-center',
        titleContainer: 'lg:absolute top-0 right-[-10rem]',
        title: 'bannerTitle flex justify-center',
        buttonContainer: '',
        button: 'border-2 border-secondary2Color bg-[transparent] text-[1.25rem] uppercase px-12 py-2 rounded-full hover:bg-secondary2Color hover:text-[#fff]',
        right: '',
        imageContainer: '',
        image: 'h-[90vh] w-full object-cover',
    }

  return (
    <section id='throwback' className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                  <h2 className={styles.title}>Throwback<span>Collection</span></h2>
                </div>
                <div className={styles.buttonContainer}>
                  <Link to='/explore' className={styles.button}>Explore</Link>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imageContainer}>
                <img src="/images/banner.jpg" alt="" className={styles.image} style={{objectPosition: '50% 15%', borderRadius: '5px 5px 5px 50%'}}/>
              </div>
            </div>
        </div>
    </section>
  )
}
