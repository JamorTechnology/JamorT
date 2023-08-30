import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-[#f9fbf7] headin">
      <nav className='w-11/12 m-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} className='w-20' alt="JamorTechnology Logo" />
        </Link>
        <div className="flex w-1/3 justify-around">
          <Link to='/'>Home</Link>
          <Link to='/'>About Us</Link>
          <Link to='/'>Services</Link>
          <Link to='/'>Projects</Link>
          <Link to='/'>Join Us</Link>
        </div>
        <div className="flex heading">
          <Link to='/' className="border-2 border-[#250C77] py-2 px-4 rounded-md text-[#250C77] text-lg">Sign In</Link>
          <Link to='/signup' className="bg-[#250C77] py-2 px-4 rounded-md text-white text-lg ml-2">Get Started</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header