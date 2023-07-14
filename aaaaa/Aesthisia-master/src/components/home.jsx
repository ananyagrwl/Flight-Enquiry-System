import React from 'react'
import About from './about'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center h-screen justify-start'>
            <AiOutlineArrowLeft onClick={e => navigate("/")} className='absolute top-4 left-4 bg-black rounded-full text-white text-4xl' />
            <h1 className='text-2xl mt-3 font-bold'>Home</h1>
            <div style={{ height: "80vh" }} className='flex items-center justify-center w-sscreen'>
                <About />
            </div>
        </div>
    )
}
