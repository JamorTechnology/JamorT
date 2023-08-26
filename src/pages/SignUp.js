import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <Header />
      <div className="bg-[#f9fbf7] my-10 py-10">
        <h2 className='text-center text-5xl heading tracking-widest mb-10'>Welcome to the
          <span className='text-green-800'> FUTURE</span>
        </h2>
        <form action="" className='w-1/2 m-auto text-slate-500'>
          <label htmlFor="fname"> First Name</label> <br />
          <input type="text" name="fname" id="fname" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /><br />
          <label htmlFor="lname"> Last Name</label> <br />
          <input type="text" name="lname" id="lname" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /><br />
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="email" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /><br />
          <label htmlFor="phone">Phone Number</label> <br />
          <input type="number" name="phone" id="phone" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /><br />
          <label htmlFor="password">Create Password</label> <br />
          <input type="password" name="password" id="password" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /> <br />
          <label htmlFor="cPassword">Confirm Password</label> <br />
          <input type="password" name="cPassword" id="cPassword" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /> <br />

          <p className='text-center mt-5 mb-10'>Already have an account?
            <span className='text-[#250C77] font-semibold'>
              <Link to='/'> Sign In</Link>
            </span></p>
          <input type="submit" value="Sign Up" className='w-full bg-[#250C77] py-3 rounded-md text-white text-lg' />
        </form>

      </div>
    </>
  )
}

export default SignUp