import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BuildResume = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNext = () => {
    const personalInfoData = {
      name: firstName + " " + lastName,
      email,
      phone,
      address
    };
    localStorage.setItem("personalInfo", JSON.stringify(personalInfoData));
    navigate("/Skills");
  };

  return (
    <div>
      <Navbar />

      <div className='mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500'>
        <h1 className='font-bold text-5xl mt-10 text-center text-white'>Build Your Perfect Resume</h1>
        <h2 className='text-2xl md:w-300 text-center mt-7 text-white pb-20'>Enter Your Persional Information</h2>
      </div>

      <ul className='flex gap-6 md:gap-20 mt-10 text-gray-500 items-center justify-center'>
        <li className='flex flex-col text-center gap-1 items-center'>
          <span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>1</span>
          <span>Personal Info</span>
        </li>
        <li className='flex flex-col text-center gap-1 items-center'>
          <span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>2</span>
          <span>Skills</span>
        </li>
        <li className='flex flex-col text-center gap-1 items-center'>
          <span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>3</span>
          <span>Education</span>
        </li>
        <li className='flex flex-col text-center gap-1 items-center'>
          <span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>4</span>
          <span>Experience</span>
        </li>
        <li className='flex flex-col text-center gap-1 items-center'>
          <span className='inline-flex items-center justify-center rounded-full w-12 h-12 text-lg text-white bg-blue-500 font-bold'>5</span>
          <span>Review</span>
        </li>
      </ul>

      <div className="mt-15 mb-10 border border-gray-500 rounded-2xl p-10 flex gap-4 flex-col w-[90%] md:w-1/2 mx-auto">
        <h1 className='text-3xl flex item-center justify-center font-bold mb-10'>Personal Information</h1>

        <div className="flex gap-3 items-center justify-between">
          <label>First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className='border-1 rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2' />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className='border-1 rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2' />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='border-1 rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2' />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <label>Phone Number</label>
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className='border-1 rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2' />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className='border-1 rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2' />
        </div>

        <button
          onClick={handleNext}
          className='border-2 w-1/6 py-1 flex item-center justify-center rounded-3xl mx-auto cursor-pointer mt-7 text-lg text-white bg-purple-500 border-purple-600 hover:font-bold hover:bg-purple-400 hover:text-black hover:border-black'
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default BuildResume;

