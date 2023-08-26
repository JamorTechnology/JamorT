import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-[#f9fbf7]">
      <nav className='w-11/12 m-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} className='w-20' alt="JamorTechnology Logo" />
        </Link>
        <div className="flex w-1/2 justify-around">
          <Link to='/'>Home</Link>
          <Link to='/'>About Us</Link>
          <Link to='/'>Services</Link>
          <Link to='/'>Projects</Link>
          <Link to='/'>Join Us</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header