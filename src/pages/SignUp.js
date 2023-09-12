import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import image from './../assets/image.png'
import twitter from './../assets/Twitter.png'
import facebook from './../assets/Facebook.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'

function SignUp() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-2/5">
          <img src={image} alt="" className="h-[150vh] w-full sticky top-0" />
        </div>
        <div className="bg-[#f9fbf7] w-3/5 pt-10">
          <h2 className='text-center text-5xl heading tracking-wider mb-10'>Welcome to the
            <span className='text-green-800'> FUTURE</span>
          </h2>
          <form action="" className='w-3/4 m-auto text-slate-500'>
            <label htmlFor="fname"> First Name</label> <br />
            <input type="text" name="fname" id="fname" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="lname"> Last Name</label> <br />
            <input type="text" name="lname" id="lname" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="uname"> Username </label> <br />
            <input type="text" name="uname" id="uname" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" id="email" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="tel">Phone Number</label> <br />
            <input type="tel" name="tel" id="tel" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="School"> Tech school you graduated from </label> <br />
            <input type="text" name="School" id="School" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="skill"> Skill Set </label> <br />
            <input type="text" name="skill" id="skill" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' required/> <br /><br />
            <label htmlFor="cert"> Certificate Earned </label> <br />
            <input type="file" name="cert" id="cert" accept='.pdf' className='w-full outline outline-slate-300 h-10 rounded px-2 pt-[0.34rem] mt-2' /> <br /><br />
            <label htmlFor="package">Internship Package</label> <br />
            <select name="package" id="package" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2 mb-5'>
              <option value=" "></option>
              <option value="product managment">Product Managment</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <label htmlFor="tarea">Why should we onboard you to our internship training program?</label>
            <textarea name="tarea" id="tarea" rows="5" className='w-full outline outline-slate-300 rounded p-3 mt-2 mb-4'></textarea>
            {/* <label htmlFor="password">Create Password</label> <br />
            <input type="password" name="password" id="password" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /> <br />
            <label htmlFor="cPassword">Confirm Password</label> <br />
            <input type="password" name="cPassword" id="cPassword" className='w-full outline outline-slate-300 h-10 rounded px-2 mt-2' /> <br /> <br /> */}
            <input type="checkbox" name="agreement" id="agreement" className='w-5 h-5 mr-2' />
            <label htmlFor="agreement" className='text-xl'>I agree to the&nbsp;
              <span className='text-[#250C77]'>
                Terms of Service
              </span> and&nbsp;
              <span className='text-[#250C77]'>
                Privacy Policy
              </span>
            </label>
            <p className='text-center text-lg my-10'>Already have an account?
              <span className='text-[#250C77] font-semibold'>
                <Link to='/login'> Sign In</Link>
              </span>
            </p>
            <input type="submit" value="Sign Up" className='w-full bg-[#250C77] py-3 rounded-md text-white text-lg' />
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

export default SignUp