import React from 'react'
import Logo from '../logo/Logo'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping, AiOutlineDelete } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/cartReducer'

export default function Header() {

    const navigationList = [
        {
            title: 'Home',
            ref: '/'
        },
        {
            title: 'Explore',
            ref: '/explore/?q=new'
        },
        {
            title: 'Men',
            ref: '/explore/?q=men'
        },
        {
            title: 'Women',
            ref: '/explore/?q=women'
        },
    ]

    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        function scrollHeader() {
            if (this.scrollY >= 100) {
                setIsFixed(true);
            }
            else {
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll', scrollHeader);
    }, [])

    const styles = {
        container: 'bg-[#fff] flex absolute top-0 w-full z-[10] justify-between place-items-center py-[1rem] px-[4rem] text-[1.125rem] headerShadow',
        fixedContainer: 'bg-[rgba(255,255,255,0.9)] top-0 fixed w-full z-[10] flex justify-between place-items-center py-[1rem] px-[4rem] text-[1.125rem] headerShadow',
        logoContainer: '',
        navigationContainer: '',
        navigationUl: 'flex justify-between place-items-center gap-[2rem]',
        navigationLink: 'cursor-pointer duration-300 hover:text-secondary2Color uppercase text-[1rem] font-[600]',
        contentContainer: 'flex justify-center place-items-center gap-[2rem]',
        loginContainer: '',
        loginButtonContainer: 'text-[1.125rem]',
        loginIcon: 'text-[1.25rem] cursor-pointer hover:text-secondary2Color',
        favoriteContainer: '',
        favoriteIcon: 'text-[1.25rem] cursor-pointer hover:text-secondary2Color',
        cartContainer: 'relative',
        cartButtonContainer: 'flex justify-center place-items-center gap-[0.5rem] text-[#fff] rounded-full py-[8px] px-[15px] cursor-pointer bg-secondary3Color hover:bg-secondary2Color',
        cartButtonIcon: 'text-[1.5rem]',
        cartText: 'text-[1rem]',
        cartDataContainer: 'absolute bg-[#fff] top-[4rem] right-[0rem] w-[450px] max-w-[450px] rounded-lg z-10',
        cartDataEmptyContainer: 'p-8 text-center',
        cartDataEmptyText: 'text-[1rem] text-[#757575]',
        cartWrapper: '',
        productCartContainer: 'productCartContainer max-h-[400px] overflow-auto',
        card: 'flex justify-between place-items-center p-4',
        cardImageContainer: '',
        cardImage: 'w-[100px] h-[100px] object-cover',
        cardContentContainer: 'flex flex-col gap-4 w-[250px]',
        cardName: 'text-[1.25rem] text-[#454545]',
        cardPrice: 'text-[1rem] text-secondary2Color',
        cardDeleteIcon: 'text-[1.5rem] text-primary2Color cursor-pointer',
        subtotalContainer: 'p-4 flex justify-between font-[600]'
    }

    const [isOpenCartMenu, setIsOpenCartMenu] = useState(false)

    const products = useSelector((state) => state.cart.products);

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch();

    useEffect(() => {
        var total = 0;
        for (var x = 0; x < products.length; x++) {
            total += parseFloat(products[x].price) * products[x].quantity;
        }
        setTotalPrice(total);
    }, [products])

    return (
        <header>
            <div className={isFixed ? styles.fixedContainer : styles.container}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.navigationContainer}>
                    <ul className={styles.navigationUl}>
                        {
                            navigationList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.ref} className={styles.navigationLink}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
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
                            <p className={styles.cartText}>MY CART ({products ? products.length : 0})</p>
                        </div>
                        <div className={isOpenCartMenu ? styles.cartDataContainer : 'hidden'}>
                            {
                                products.length ? (
                                    <div className={styles.cartWrapper}>
                                        <div className={styles.productCartContainer}>
                                            {
                                                products.map((item, index) => {
                                                    return (
                                                        <div className={styles.card} key={index}>
                                                            <div className={styles.cardImageContainer}>
                                                                <img src={item.imageSrc} alt="" className={styles.cardImage} />
                                                            </div>
                                                            <div className={styles.cardContentContainer}>
                                                                <h2 className={styles.cardName}>{item.name}</h2>
                                                                <p className={styles.cardPrice}>{item.quantity} x ${item.price}</p>
                                                            </div>
                                                            <AiOutlineDelete
                                                                className={styles.cardDeleteIcon}
                                                                onClick={() => {
                                                                    dispatch(removeFromCart(item.id))
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={styles.subtotalContainer}>
                                            <h5 className='uppercase'>Subtotal</h5>
                                            <h5>${totalPrice}</h5>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.cartDataEmptyContainer}>
                                        <p className={styles.cartDataEmptyText}>Your cart is empty</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
