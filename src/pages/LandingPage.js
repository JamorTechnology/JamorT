import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
                <div className="text-7xl font-bol w-1/4 text-center animate__animated animate__tada animate__slow">
                    The <span className='text-[#00451A]'>Future</span>  of Tech newbies.
                </div>
                <img src={illustration} alt="" className='w-1/2 animate__animated animate__zoomIn animate__slower' />
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
            <div className="w-11/12 m-auto mt-5 py-10 rounded-xl p-5 bg-[#cedec3] text-2xl">
                <ul className='list-disc list-inside font-bold text-center'>
                    <li>What We Do</li>
                </ul>
                <div className="text-center w-1/2 m-auto mt-5 mb-[10rem]">
                    We Create Innovative Solutions for Industries.
                    Here at JamorT, we know the importance of technology as a source of innovation and as a critical success factor for increased market competitiveness
                </div>
                <div className="flex mt-20 justify-around text-center">
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-[4rem] h-fit">
                        <img src={image1} alt="" className='w-full hover:-mt-10 transition-all duration-700' />
                        <p className='text-xl my-5'>We create customized, visually appealing, and user-friendly websites </p>
                    </div>
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-[4rem] mt-[10rem]">
                        <img src={image2} alt="" className='w-full hover:-mt-10 transition-all duration-700' />
                        <p className='text-xl my-5'>We invite businesses and individuals to embark on a transformative journey with JamorT to unlock their full potential in the digital age. </p>
                    </div>
                    <div className="p-5 bg-white w-1/4 flex flex-col rounded-[4rem] h-fit">
                        <img src={image3} alt="" className='w-full hover:-mt-10 transition-all duration-700' />
                        <p className='text-xl my-5'>We connect businesses with skilled tech professionals who are carefully vetted. </p>
                    </div>
                </div>
            </div>
            <div className="w-11/12 m-auto flex items-center justify-between my-10 py-10 rounded-xl bg-slate-100">
                <img src={illusThree} alt="" className='w-2/5 ml-5' />
                <form action="" className='w-1/2'>
                    <label htmlFor="email" className='text-4xl text-left text-[#250C77] font-semibold'>Subscribe to our Newsletter </label> <br />
                    <input type="email" name="email" id="email" placeholder='Email Address' className='w-3/4 outline outline-slate-300 h-10 rounded px-3 mt-5 mr-5' />
                    <input type="submit" value="Subscribe" className='bg-[#250C77] py-2 px-3 rounded-md text-white text-lg font-semibold' />
                </form>
            </div>
            <div className="w-11/12 m-auto my-10 py-10 rounded-xl bg-slate-100 text-2xl">
                <div className='font-bold text-center text-3xl'>
                    Contact Us
                </div>
                <div className="text-center w-1/3 m-auto mt-2 mb-10">
                    For enquiries or feedback, please feel free to contact us via this form
                </div>
                <form action="" className='w-3/5 m-auto text-slate-500 text-base'>
                    <label htmlFor="fname"></label>
                    <input type="text" name="fname" id="fname" placeholder='First Name' className='w-[49%] mr-[2%] outline outline-slate-300 h-12 rounded px-3' />
                    <label htmlFor="lname"></label>
                    <input type="text" name="lname" id="lname" placeholder='Last Name' className='w-[49%] outline outline-slate-300 h-12 rounded px-3' />
                    <label htmlFor="email"></label> <br />
                    <input type="email" name="email" id="email" placeholder='Email' className='w-full outline outline-slate-300 h-12 rounded px-3 my-5' />
                    <label htmlFor="tarea"></label>
                    <textarea name="tarea" id="tarea" rows="5" placeholder='Message' className='w-full outline outline-slate-300 rounded p-3'></textarea>
                    <input type="submit" value="Send Message" className='w-full bg-[#250C77] py-3 mt-5 rounded-md text-white text-lg' />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage