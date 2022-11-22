import React from 'react'
import Logo from '../logo/Logo'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {

    const styles = {
        container: 'bg-[#fff] flex justify-between place-items-center py-[1rem] px-[2rem] text-[1.125rem]',
        logoContainer: '',
        navigationContainer: '',

        contentContainer: 'flex justify-center place-items-center gap-[2rem]',
        loginContainer: '',
        loginButtonContainer: 'text-[1.125rem]',
        loginIcon: 'text-[1.25rem] cursor-pointer hover:text-secondary2Color',
        favoriteContainer: '',
        favoriteIcon: 'text-[1.25rem] cursor-pointer hover:text-secondary2Color',
        cartContainer: 'relative',
        cartButtonContainer: 'flex justify-center place-items-center gap-[0.5rem] rounded-full py-[8px] px-[15px] cursor-pointer gradientButton',
        cartButtonIcon: 'text-[1.5rem]',
        cartText: 'text-[1rem]',
        cartDataContainer: 'absolute bg-[#fff] top-[4rem] right-[0rem] w-[350px] max-w-[350px] rounded-lg',
        cartDataEmptyContainer: 'p-8 text-center',
        cartDataEmptyText: 'text-[1rem] text-[#757575]',
    }

    const [isOpenCartMenu, setIsOpenCartMenu] = useState(false)

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.navigationContainer}>
                    <ul>
                        <li>Data</li>
                    </ul>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.loginContainer}>
                        <Link to='/login'>
                            <AiOutlineUser className={styles.loginIcon} />
                        </Link>
                    </div>
                    <div className={styles.favoriteContainer}>
                        <Link to='/favorites'>
                            <AiOutlineHeart className={styles.favoriteIcon} />
                        </Link>
                    </div>
                    <div className={styles.cartContainer}>
                        <div className={styles.cartButtonContainer} onClick={() => isOpenCartMenu ? setIsOpenCartMenu(false) : setIsOpenCartMenu(true)}>
                            <AiOutlineShopping className={styles.cartButtonIcon} />
                            <p className={styles.cartText}>MY CART (0)</p>
                        </div>
                        <div className={isOpenCartMenu ? styles.cartDataContainer : 'hidden'}>
                            <div className={styles.cartDataEmptyContainer}>
                                <p className={styles.cartDataEmptyText}>Your cart is empty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
