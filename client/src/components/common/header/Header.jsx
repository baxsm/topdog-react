import React from 'react'
import Logo from '../logo/Logo'

export default function Header() {

    const styles = {
        container: 'bg-[#fff] flex justify-between place-items-center py-[1rem] px-[2rem] text-[1.125rem]',
        logoContainer: '',
        navigationContainer: '',

        loginContainer: '',
        loginButtonContainer: 'text-[1.125rem]',
        loginButton: '',
        signupButton: '',
    }

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
                <div className={styles.loginContainer}>
                    <div className={styles.loginButtonContainer}>
                        <button className={styles.loginButton}>Sign in</button>
                    </div>
                    <div className={styles.loginButtonContainer}>
                        <button className={styles.signupButton}>Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
