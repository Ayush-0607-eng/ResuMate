import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

const Education = () => {
    const [formData, setFormData] = useState({
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        gpa: ""
    });
    const [educationList, setEducationList] = useState([]);

    const navigate = useNavigate();
    const handleNext = () => {
        // Save both education and certifications to localStorage
        localStorage.setItem("education", JSON.stringify(educationList));
        localStorage.setItem("certifications", JSON.stringify(certifications));

        navigate("/Experience");
    };

    const [certificationData, setCertificationData] = useState({
        name: "",
        year: ""
    });
    const [certifications, setCertifications] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCertificationChange = (e) => {
        setCertificationData({ ...certificationData, [e.target.name]: e.target.value });
    };

    const addEducation = () => {
        if (formData.degree && formData.institution && formData.startYear && formData.endYear) {
            setEducationList([...educationList, formData]);
            setFormData({ degree: "", institution: "", startYear: "", endYear: "", gpa: "" });
        }
    };

    const removeEducation = (index) => {
        setEducationList(educationList.filter((_, i) => i !== index));
    };

    const addCertification = () => {
        if (certificationData.name && certificationData.year) {
            setCertifications([...certifications, certificationData]);
            setCertificationData({ name: "", year: "" });
        }
    };

    const removeCertification = (index) => {
        setCertifications(certifications.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className='mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500'>
                <h1 className='font-bold text-5xl mt-10 text-center text-white'>Build Your Perfect Resume</h1>
                <h2 className='text-2xl md:w-300 text-center mt-7 text-white pb-20'>
                    Follow our step-by-step guide to create an ATS-friendly resume that gets you noticed
                </h2>
            </div>

            {/* Step Indicator */}
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

            {/* Education Section */}
            <div className="mt-15 mb-10 border border-gray-500 rounded-2xl p-10 flex flex-col gap-6 w-[90%] md:w-1/2 mx-auto">
                <h1 className='text-3xl text-center font-bold'>Education</h1>

                {/* Degree */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        placeholder="e.g., B.Tech in Computer Science"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2'
                    />
                </div>

                {/* Institution */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">Institution</label>
                    <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="e.g., IIT Delhi"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2'
                    />
                </div>

                {/* Start Year */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">Start Year</label>
                    <input
                        type="number"
                        name="startYear"
                        value={formData.startYear}
                        onChange={handleChange}
                        placeholder="e.g., 2020"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2 appearance-none'
                    />
                </div>

                {/* End Year */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">End Year</label>
                    <input
                        type="number"
                        name="endYear"
                        value={formData.endYear}
                        onChange={handleChange}
                        placeholder="e.g., 2024"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2 appearance-none'
                    />
                </div>

                {/* GPA */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">GPA</label>
                    <input
                        type="text"
                        name="gpa"
                        value={formData.gpa}
                        onChange={handleChange}
                        placeholder="e.g., 3.8 / 4.0"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2'
                    />
                </div>

                {/* Add Education */}
                <button
                    onClick={addEducation}
                    className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-400 hover:text-black w-fit mx-auto'
                >
                    Add Education
                </button>

                {/* Education List */}
                {educationList.length > 0 && (
                    <div className="mt-4 flex flex-col gap-2">
                        {educationList.map((edu, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                                <span>{edu.degree} - {edu.institution} ({edu.startYear} - {edu.endYear}) | GPA: {edu.gpa}</span>
                                <button onClick={() => removeEducation(index)} className="text-red-500 font-bold">×</button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certification Section */}
                <h2 className='text-2xl font-bold mt-8 mx-auto mb-5'>Certifications</h2>

                {/* Certification Name */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">Certification</label>
                    <input
                        type="text"
                        name="name"
                        value={certificationData.name}
                        onChange={handleCertificationChange}
                        placeholder="e.g., AWS Certified Solutions Architect"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2'
                    />
                </div>

                {/* Certification Year */}
                <div className="flex gap-3 items-center justify-between">
                    <label className="w-1/3">Year</label>
                    <input
                        type="number"
                        name="year"
                        value={certificationData.year}
                        onChange={handleCertificationChange}
                        placeholder="e.g., 2023"
                        className='border rounded border-gray-400 w-80 md:w-100 outline-none h-10 p-2 appearance-none'
                    />
                </div>

                {/* Add Certification */}
                <button
                    onClick={addCertification}
                    className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-400 hover:text-black w-fit mx-auto'
                >
                    Add Certification
                </button>

                {/* Certifications List */}
                {certifications.length > 0 && (
                    <div className="mt-4 flex flex-col gap-2">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                                <span>{cert.name} ({cert.year})</span>
                                <button onClick={() => removeCertification(index)} className="text-red-500 font-bold">×</button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                    <Link
                        to="/Skills"
                        className="border px-6 py-2 rounded-3xl text-gray-700 hover:bg-gray-200"
                    >
                        Back
                    </Link>
                    <button
                        onClick={handleNext}
                        className="border px-6 py-2 rounded-3xl bg-purple-500 text-white hover:bg-purple-400 hover:text-black"
                    >
                        Next
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Education

