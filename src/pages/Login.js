import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import image from './../assets/imagee.png'
import twitter from './../assets/Twitter.png'
import facebook from './../assets/Facebook.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'

function Login() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-2/5">
                    <img src={image} alt="" className="h-screen w-full sticky top-0" />
                </div>
                <div className="bg-[#f9fbf7] w-3/5 pt-10">
                    <h2 className='text-center text-5xl heading tracking-wider mb-10'>
                        Sign In
                    </h2>
                    <form action="" className='w-3/4 m-auto text-slate-500'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required /> <br /><br />

                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required /> <br /> <br />
                        <p className='text-center text-lg my-5'>Forgot Password?
                            <span className='text-[#250C77] font-semibold'>
                                <Link to='/'> Click here</Link>
                            </span>
                        </p>
                        <p className='text-center text-lg my-5'>Don't have an account?
                            <span className='text-[#250C77] font-semibold'>
                                <Link to='/signup'> Sign Up</Link>
                            </span>
                        </p>
                        <input type="submit" value="Sign In" className='w-full bg-[#250C77] py-3 rounded-md text-white text-lg' />
                    </form>
                    <div className="flex mt-28 mb-5 ml-10">
                        <a href="http://" className='mr-5'>
                            <img src={twitter} alt="" />
                        </a>
                        <a href="http://" className='mr-5'>
                            <img src={facebook} alt="" />
                        </a>
                        <a href="http://" className='mr-5'>
                            <img src={instagram} alt="" />
                        </a>
                        <a href="http://" className='mr-5'>
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-[0.1rem] w-full bg-slate-300"></div>
            <div className="text-center py-5">
                JamorTech Corporation © 2023
            </div>
        </>
    )
}

export default Login