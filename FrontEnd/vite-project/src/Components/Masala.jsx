import React from 'react'
import { Link } from 'react-router-dom'

const Masala = () => {
    return (
        <div>

            <div className='m-2 mt-10 pb-5 flex flex-col gap-3 justify-center items-center'>
                <h1 className='font-bold text-5xl mt-10 text-center'>Build Your Perfect Resume with AI</h1>
                <h2 className='text-2xl text-gray-500 md:w-300 text-center mt-7'>Create ATS-friendly resumes that get noticed. Our AI analyzes job descriptions and suggests improvements to help you land your dream job.</h2>
                <button className='border-2 px-4.5 py-3 rounded-2xl cursor-pointer mt-7 text-lg text-white bg-blue-500 hover:bg-purple-400 hover:font-bold'><span className="inline-block w-[240px] hover:font-bold"><Link to="/BuildResume">Start Building Your Resume</Link></span></button>
                <ul className='flex gap-20 mt-7 text-gray-500'>
                    <li className='text-center'><div className='text-2xl font-bold text-blue-500'>500+</div> Companies</li>
                    <li className='text-center'><div className='text-2xl font-bold text-blue-500'>85%+</div> Success rate</li>
                    <li className='text-center'><div className='text-2xl font-bold text-blue-500'>5000+</div> Resume Created</li>
                </ul>
            </div>

            <div className='m-2 mt-10 pb-5 flex flex-col gap-3 justify-center items-center'>
                <h1 className='font-bold text-5xl mt-10 text-center'>Why Choose Smart Resume Builder?</h1>
                <h2 className='text-2xl text-gray-500 md:w-300 text-center mt-7'>Our platform combines cutting-edge AI technology with professional design to help you create resumes that stand out.</h2>
                <ul className='flex flex-col md:flex-row gap-6 md:gap-20 mt-10 text-gray-500'>
                    <li className='text-center flex flex-col gap-3 w-100 border-1 border-gray-100 p-5 rounded-2xl'><b className='text-lg'>AI-Powered Suggestions</b>Get personalized recommendations based on job descriptions to optimize your resume for applicant tracking systems.</li>
                    <li className='text-center flex flex-col gap-3 w-100 border-1 border-gray-100 p-5 rounded-2xl'><b className='text-lg'>ATS-Friendly Format</b>Ensure your resume passes through applicant tracking systems with our professionally designed templates.</li>
                    <li className='text-center flex flex-col gap-3 w-100 border-1 border-gray-100 p-5 rounded-2xl'><b className='text-lg'>Multiple Versions</b>Create and manage multiple resume versions tailored to different job applications and career paths.</li>
                </ul>
            </div>

            <div className='m-2 mt-10 pb-5 flex flex-col gap-3 justify-center items-center '>
                <h1 className='font-bold text-5xl mt-10 text-center'>How it Works?</h1>
                <h2 className='text-2xl text-gray-500 md:w-300 text-center mt-7'>Get your professional resume ready in just a few simple steps.</h2>
                <ul className='flex flex-col md:flex-row gap-6 md:gap-10 mt-10 text-gray-500'>
                    <li className='text-center flex flex-col gap-3 w-100 md:w-80 border-1 border-gray-100 p-5 rounded-2xl items-center'><span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>1</span><b className='text-lg'>Enter Your Information</b>Fill in your personal details, work experience, education, and skills.</li>
                    <li className='text-center flex flex-col gap-3 w-100 md:w-80 border-1 border-gray-100 p-5 rounded-2xl items-center'><span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>2</span><b className='text-lg'>Add Job Description</b>Paste the job description you're applying for to get tailored suggestions.</li>
                    <li className='text-center flex flex-col gap-3 w-100 md:w-80 border-1 border-gray-100 p-5 rounded-2xl items-center'><span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>3</span><b className='text-lg'>Get AI Suggestions</b>Review AI-powered recommendations to enhance your resume content.</li>
                    <li className='text-center flex flex-col gap-3 w-100 md:w-80 border-1 border-gray-100 p-5 rounded-2xl items-center'><span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>4</span><b className='text-lg'>Download & Apply</b>Download your professional resume and start applying to your dream jobs.</li>
                </ul>
            </div>

            <div className='mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500'>
                <h1 className='font-bold text-5xl mt-10 text-center text-white'>Ready to Land Your Dream Job?</h1>
                <h2 className='text-2xl md:w-300 text-center mt-7 text-white'>Join thousands of professionals who have successfully improved their job search with our AI-powered resume builder.</h2>
                <button className='border-2 px-4.5 py-3 rounded-2xl cursor-pointer mt-7 text-lg text-white bg-purple-500 border-purple-600 hover:font-bold'><span className="inline-block w-[240px] hover:font-bold"><Link to="/BuildResume">Get Started Now</Link></span></button>
            </div>

        </div>
    )
}

export default Masala
