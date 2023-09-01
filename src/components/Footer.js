import React from 'react'
import logo from './../assets/logo.png'
// import { Link } from 'react-router-dom'
import twitter from './../assets/Twitter.png'
import facebook from './../assets/Facebook.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'
import arrow from './../assets/Arrow.png'

function Footer() {
    return (
        <footer className='text-lg bg-[#f3f8f0] pt-10'>
            <div className="flex items-start justify-between w-11/12 m-auto mb-20">
                <div className="w-1/5">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <div className="font-bold mb-2 text-xl">
                        Specializations
                    </div>
                    <p>Frontend Engineering</p>
                    <p>Backend Engineering</p>
                    <p>Product Design</p>
                    <p>Product Management</p>
                    <p>Data Analysis</p>
                </div>
                <div className="">
                    <div className="font-bold mb-2 text-xl">
                        Resources
                    </div>
                    <p>Help Center</p>
                    <p>Partners</p>
                    <p>FAQs</p>
                    <p>Utility</p>
                </div>
                <div className="">
                    <div className="font-bold mb-2 text-xl">
                        Services
                    </div>
                    <p>Internships</p>
                    <p>Mentorships</p>
                    <p>Tech Contractors</p>
                    <p>Enquiries</p>
                </div>
                <div className="">
                    <div className="font-bold mb-2 text-xl">
                        Quicklinks
                    </div>
                    <p>Partnerships & Sponsorships</p>
                    <p>Privacy and Terms</p>
                    <p>Products</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="w-11/12 m-auto flex justify-between">
                <div className="flex my-7">
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
                <div className="flex items-center">
                    <p className='text-center text-slate-500'>Back To <br />Top</p>
                    <a href="#header">
                        <img src={arrow} alt="" />
                    </a>
                </div>
            </div>
            <div className="h-[0.1rem] w-full bg-slate-300"></div>
            <div className="text-center py-5">
                JamorTech Corporation © 2023
            </div>
        </footer>
    )
}

export default Footer