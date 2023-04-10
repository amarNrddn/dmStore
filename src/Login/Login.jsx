import React from 'react'
import './login.css'
import LoginRoutes from './LoginRoutes'
import Register from '../Components/Register'
import { Route, Routes,Link } from 'react-router-dom'

import { MdOutlineLocalPhone } from 'react-icons/md'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'

const Login = () => {
    const showPassword = () => {
        const none = document.getElementById('none')
        const show = document.getElementById('show')
        const password = document.getElementById('password')

        if (password.type === 'password') {
            password.type = 'text'
            none.style.display = "none"
            show.style.display = "block"
        } else {
            password.type = 'password'
            none.style.display = "block"
            show.style.display = "none"
        }
    }

    return (
        <div className="w-full h-full flex justify-center relative">
            <div className="cover w-[540px] h-[100vh]  bg-[#4338ca] absolut z-10">
                <div className="">
                    <div className='pl-[29px] pt-[4rem]'>
                        <div className="">
                            <h1 className='text-white font-bold text-[30px] mr-[10px]' >Welcome Back!</h1>
                            <div className="text-white text-[1rem] ml-[10px] w-[227px]">
                                <p className=''>Fill your details or continue with social media</p>
                            </div>
                        </div>

                        <div className="pt-[2rem]">
                            <form action="submit">
                                <div className="flex items-center mb-10">
                                    <div className="relatife">
                                        <input
                                            type='text'
                                            placeholder='Phone Number'
                                            required
                                            className='w-[300px] h-[54px] rounded-[12px] pl-[3rem] text-gray-500 outline-none'
                                        />
                                    </div>
                                    <div className="absolute pl-[20px]">
                                        <MdOutlineLocalPhone className='text-[20px] text-gray-500' />
                                    </div>
                                </div>

                                <div className="flex items-center mb-10">
                                    <div className="relatife">
                                        <input
                                            type='password'
                                            id='password'
                                            placeholder='Password'
                                            required
                                            className='w-[300px] h-[54px] rounded-[12px] pl-[3rem] text-gray-500 outline-none  '
                                        />

                                    </div>
                                    <div className="absolute pl-[20px]">
                                        <CiLock className='text-[20px] text-gray-500' />
                                    </div>

                                    <div className="absolute right-[3.8rem]" onClick={showPassword}>
                                        <AiOutlineEyeInvisible id='none' className='text-[20px] text-gray-500' />
                                        <AiOutlineEye id='show' style={{ display: 'none' }} className='text-[20px] text-gray-500' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className='text-center mt-[-30px] text-[12px] text-white w-full cursor-pointer'>Forget Password?</p>

                    <div className="pl-[29px]">
                        <button
                            className='bg-[#4CA6A8] w-[300px] h-[54px] rounded-[12px] text-white text-[16px] mt-[40px]'
                        >
                            Login
                        </button>
                    </div>

                    <div className="text-center relative mt-[20px]">
                        <p className='continue text-white'>Or Continue with</p>
                    </div>

                    <div className="flex justify-center gap-3 mt-[20px]">
                        <div className="w-[60px] h-[60px] bg-white items-center flex justify-center rounded-[20px]">
                            <FcGoogle className='text-[30px]' />
                        </div>
                        <div className="w-[60px] h-[60px] bg-[#4460A0] items-center flex justify-center rounded-[20px]">
                            <ImFacebook className='text-white text-[25px]' />
                        </div>
                    </div>

                    <div className="text-center mt-[15px]">
                        <p className='text-white text-[16px]'>New User?
                            <Link to="/register"
                                className='cursor-pointer text-gray-400 ml-[4px]'
                            >
                                Create Accoun
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login