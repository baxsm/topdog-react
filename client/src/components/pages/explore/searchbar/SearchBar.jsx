import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

export default function SearchBar() {

    const styles = {
        container: 'pt-[3rem] md:pt-[6rem] flex flex-col gap-[2rem] justify-center place-items-center',
        contentContainer: '',
        title: 'text-[2rem] font-[700] text-center [&>span]:text-primary2Color',
        subtitle: 'text-[#656565] my-[1.5rem] text-[0.8rem] text-center',
        searchContainer: '',
        inputContainer: 'relative flex place-items-center',
        input: 'min-w-[60vw] rounded-full p-4 text-center outline-none border-[1px] border-secondary2Color focus:border-secondary3Color text-[1.25rem] text-[#353535]',
        searchIcon: 'absolute right-[1rem] text-[2rem] text-[#555555] cursor-pointer',
    }

    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const switchNavigation = (_ref) => {
        navigate(`/explore?q=${_ref}`)
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleInputKeyPress = (key) => {
        if(key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        if(value.length > 2) {
            switchNavigation(value)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>
                        Over <span>46</span> Brand Shirts,<br />
                        Bags, Shoes, <span>Coats & Accessories</span>
                    </h2>
                </div>
                <div className={styles.subtitleContainer}>
                    <p className={styles.subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus nihil aut.</p>
                </div>
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                    <input className={styles.input} onKeyPress={(e) => {handleInputKeyPress(e.key)}} value={value} onChange={(e) => {handleInput(e)}} type="text" placeholder='Search Items e.g. Shoes, Bags, Jeans, Tshirt etc..'/>
                    <AiOutlineSearch className={styles.searchIcon} onClick={() => {handleSubmit()}}/>
                </div>
            </div>
        </div>
    )
}
