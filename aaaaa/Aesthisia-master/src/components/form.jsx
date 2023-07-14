import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [type, settype] = useState("password")
    const EmailVal = (mail) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (reg.test(mail))
    }
    const clicked = (e) => {
        e.preventDefault()
        if (!EmailVal(email)) { alert("type correct email address..") }
        else if (email !== "exo@aesthisia.com") { alert("invalid email...") }
        else if (pass !== "exo") { alert("invalid Password") }
        else { navigate("/home") }
    }
    return (
        <div className=' form-side flex rounded-3xl items-start justify-center p-6'>
            <form className='w-full'>
                <div style={{ height: "100%" }} className='flex flex-col mb-10 items-center justify-center w-full'>
                    <img src="logo.png" width={"50px"} height={"50px"} alt="" />
                    <h2 className='text-3xl flex gap-2 font-bold'>Welcome <p style={{ color: "#08A593" }}>Back!</p></h2>
                    <h3 className='text-slate-500 text-sm'>Glad to see you, Again!</h3>
                </div>
                <div className='input mb-4 flex flex-col items-center justify-center  w-full'>
                    <input autoComplete='false' value={email} onChange={e => setemail(e.target.value)} className='p-4 mb-4' placeholder='Enter Your email' type="email" />
                    <div className='input2 flex items-center justify-between p-4'><input autoComplete='false' value={pass} onChange={e => setpass(e.target.value)} placeholder='Enter Your password' className='w-4/5' type={type} /><AiOutlineEye onClick={e => type === "text" ? settype("password") : settype("text")} className='ml-1' /></div>
                    <div style={{ width: "60%" }} className='text-end'><h3 className='text-slate-400 text-sm'>Forgot Password?</h3></div>
                </div>
                <div className='input flex flex-col items-center justify-center  w-full'>
                    <button onClick={clicked} style={{ width: "60%", height: "40px" }} className='text-white mt-8 bg-black rounded-lg'>Log In</button>
                </div>
                <div>
                    <h2 className='text-sm mt-10 flex items-center gap-1 justify-center text-slate-500'>Don't have an account yet? <a href='#' className='text-blue-500 '>Sign Up</a></h2>
                </div>
            </form>
        </div>
    )
}
