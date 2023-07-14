import React from 'react'
import { BsGlobe } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function About() {
    return (
        <div style={{ background: "url('about.png') no-repeat center center/cover" }} className=' side flex flex-col rounded-3xl items-start justify-between p-6'>
            <img src="exo.png" alt="" />
            <div>
                <h1 className='flex text-white text-3xl font-bold'>100% Uptime<img src="emoji.png" width={"40px"} alt="" /></h1>
                <h3 className='text-slate-300 text-lg '>Zero Infrastructure</h3>
                <h3 className='text-slate-300 text-lg '>Management</h3>
            </div>
            <div className='text-white flex items-center justify-between w-full'>
                <div className='flex items-center justify-center text-slate-400'>
                    <BsGlobe />
                    <h2 className=''>aesthisia.com</h2>
                </div>
                <div className='text-white flex items-center justify-around gap-3'>
                    <FaLinkedinIn />
                    <FaFacebookF />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}
