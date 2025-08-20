import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='mt-10 pb-5 pt-10 flex flex-col gap-3 justify-center items-center bg-gray-300 relative'>
                <div className='md:flex justify-between md:gap-40 space-y-10'>
                    <div className='flex-col gap-2 '>
                        <div className='text-2xl font-bold'>ResuMate</div>
                        <div className='text-gray-500 w-100 mt-2'>Create ATS-friendly resumes with AI-powered suggestions tailored to your dream job.</div>
                    </div>
                    <div className='flex gap-15'>
                        <ul>
                            <b className='mb-2'>Product</b>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/BuildResume">Build Resume</Link></li>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/AISuggest">AI Suggestions</Link></li>
                        </ul>
                        <ul>
                            <b className='mb-2'>Account</b>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/Profile">Profile</Link></li>
                        </ul>
                        <ul>
                            <b className='mb-2'>Support</b>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/About">About us</Link></li>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/Support">Help Center</Link></li>
                            <li className='text-gray-500 cursor-pointer hover:font-bold'><Link to="/Support">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div>© 2025 ResuMate. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer
