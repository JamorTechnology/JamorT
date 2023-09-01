import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-[#f9fbf7] sticky top-0 z-20 headin">
      <nav id='header' className='w-11/12 m-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} className='w-20' alt="JamorTechnology Logo" />
        </Link>
        <div className="flex w-1/3 justify-around">
          <Link to='/'  className='hover:text-slate-500'>Home</Link>
          <Link to='/'  className='hover:text-slate-500'>About Us</Link>
          <Link to='/'  className='hover:text-slate-500'>Services</Link>
          <Link to='/'  className='hover:text-slate-500'>Projects</Link>
          <Link to='/'  className='hover:text-slate-500'>Join Us</Link>
        </div>
        <div className="flex heading">
          <Link to='/' className="border-2 border-[#250C77] hover:bg-[#250C77] hover:text-white py-2 px-4 rounded-md text-[#250C77] text-lg">Sign In</Link>
          <Link to='/signup' className="bg-[#250C77] hover:bg-white hover:outline hover:outline-[#250C77] hover:text-[#250C77] py-2 px-4 rounded-md text-white text-lg ml-2">Get Started</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header