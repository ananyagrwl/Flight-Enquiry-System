import React from 'react'
import About from './about'
import Form from './form'

export default function Login() {
    return (
        <div className='w-screen display items-center justify-center gap-1 h-screen flex-wrap '>
            <About />
            <Form />
        </div>
    )
}
