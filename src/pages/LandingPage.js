import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import illustration from './../assets/pana.png'
import illusTwo from './../assets/amico.png'
import illusThree from './../assets/bro.png'
import image1 from './../assets/image-1.png'
import image2 from './../assets/image-2.png'
import image3 from './../assets/image-3.png'

function LandingPage() {
    return (
        <div>
            <Header />
            <div className="w-11/12 m-auto mt-5 rounded-xl flex justify-evenly items-center p-5 bg-[#cedec3] heading">
                <div className="text-7xl font-bol w-1/4 text-center">
                    The <span className='text-[#00451A]'>Future</span>  of Tech newbies.
                </div>
                <img src={illustration} alt="" className='w-1/2' />
            </div>
            <div className="flex justify-center my-10 heading">
                <Link to='/signup' className="bg-[#250C77] py-2 px-4 rounded-md text-white text-lg">Get Started</Link>
            </div>
            <div className="flex items-center justify-evenly text-center">
                <img src={illusTwo} alt="" className='w-1/3' />
                <div className="w-1/4 text-2xl">
                    <ul className='list-disc list-inside font-bold'>
                        <li>Who We Are</li>
                    </ul>
                    <div className="">
                        JamorTech is a Team Focused on Innovation and Improving Business Processes, People and Systems
                    </div>
                </div>
            </div>
            <div className="w-11/12 m-auto mt-5 rounded-xl p-5 bg-[#cedec3] text-2xl">
                <ul className='list-disc list-inside font-bold text-center'>
                    <li>What We Do</li>
                </ul>
                <div className="text-center w-1/2 m-auto mt-5 mb-[10rem]">
                    We Create Innovative Solutions for Industries.
                    Here at JamorT, we know the importance of technology as a source of innovation and as a critical success factor for increased market competitiveness
                </div>
                <div className="flex mt-20 justify-around text-center">
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-3xl h-fit">
                        <img src={image1} alt="" className='w-full -mt-20' />
                        <p className='text-xl my-5'>We create customized, visually appealing, and user-friendly websites </p>
                    </div>
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-3xl mt-[10rem]">
                        <img src={image2} alt="" className='w-full -mt-20' />
                        <p className='text-xl my-5'>We invite businesses and individuals to embark on a transformative journey with JamorT to unlock their full potential in the digital age. </p>
                    </div>
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-3xl h-fit">
                        <img src={image3} alt="" className='w-full -mt-20' />
                        <p className='text-xl my-5'>We connect businesses with skilled tech professionals who are carefully vetted </p>
                    </div>
                </div>
            </div>
            <div className="w-11/12 m-auto flex items-center justify-between my-10">
                <img src={illusThree} alt="" className='w-2/5' />
                <form action=""  className='w-1/2'>
                    <label htmlFor="email" className='text-4xl text-left text-[#250C77] font-semibold'>Subscribe to our Newsletter </label> <br />
                    <input type="email" name="email" id="email" placeholder='Email Address' className='w-3/4 outline outline-slate-300 h-10 rounded px-2 mt-5 mr-5' />
                    <input type="submit" value="Subscribe" className='bg-[#250C77] py-2 px-3 rounded-md text-white text-lg font-semibold' />
                </form>
            </div>
        </div>
    )
}

export default LandingPage