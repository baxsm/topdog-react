import React from 'react'
import { VscLoading } from 'react-icons/vsc';
import './loading.css'

function Loading() {
    return (
        <div className='mainLoading p-4 text-[4rem] text-[#959595] flex justify-center place-items-center'>
            <VscLoading />
        </div>
    )
}

export default Loading