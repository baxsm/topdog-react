import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ fontSize = '1.5rem' }) {
    return (
        <>
            <Link to='/'>
                <h2 className='text-[#000] font-[700]' style={{ fontSize: fontSize }}>Top
                    <span className='text-primary2Color'>Dog</span>
                </h2>
            </Link>
        </>
    )
}
