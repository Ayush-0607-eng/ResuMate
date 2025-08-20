import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Experience = () => {
    const [experienceType, setExperienceType] = useState("Fresher");
    const [experiences, setExperiences] = useState([
        { jobTitle: "", company: "", startDate: "", endDate: "", current: false, description: "" }
    ]);

    const handleChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        setExperiences([...experiences, { jobTitle: "", company: "", startDate: "", endDate: "", current: false, description: "" }]);
    };

    const removeExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    const navigate = useNavigate();
    const handleNext = () => {
        const experienceData = {
            type: experienceType,
            list: experiences
        };
        localStorage.setItem("experience", JSON.stringify(experienceData));
        navigate("/Review");
    };


    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className='mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500'>
                <h1 className='font-bold text-5xl mt-10 text-center text-white'>Build Your Perfect Resume</h1>
                <h2 className='text-2xl md:w-300 text-center mt-7 text-white pb-20'>
                    Add your work experience details below
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

            {/* Experience Form */}
            <div className="mt-15 mb-10 border border-gray-500 rounded-2xl p-8 flex flex-col gap-10 w-[90%] md:w-3/4 mx-auto">
                <h1 className='text-3xl text-center font-bold'>Work Experience</h1>

                {/* Experience Type Selector */}
                <div className="flex flex-col gap-2">
                    <label>Experience Type</label>
                    <select
                        value={experienceType}
                        onChange={(e) => setExperienceType(e.target.value)}
                        className="border rounded border-gray-300 w-full outline-none h-10 p-2"
                    >
                        <option value="Fresher">Fresher</option>
                        <option value="Intern">Intern</option>
                        <option value="Experienced">Experienced</option>
                    </select>
                </div>

                {/* Show experience fields only for Intern or Experienced */}
                {experienceType !== "Fresher" && (
                    <>
                        {experiences.map((exp, index) => (
                            <div key={index} className='border border-gray-300 rounded-lg p-5 flex flex-col gap-4 relative'>
                                <div className="flex flex-col gap-2">
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        value={exp.jobTitle}
                                        onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
                                        placeholder="e.g. Software Engineer"
                                        className='border rounded border-gray-300 w-full outline-none h-10 p-2'
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        value={exp.company}
                                        onChange={(e) => handleChange(index, "company", e.target.value)}
                                        placeholder="e.g. Google"
                                        className='border rounded border-gray-300 w-full outline-none h-10 p-2'
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label>Start Date</label>
                                        <input
                                            type="month"
                                            value={exp.startDate}
                                            onChange={(e) => handleChange(index, "startDate", e.target.value)}
                                            className='border rounded border-gray-300 w-full outline-none h-10 p-2'
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label>End Date</label>
                                        <input
                                            type="month"
                                            value={exp.endDate}
                                            onChange={(e) => handleChange(index, "endDate", e.target.value)}
                                            disabled={exp.current}
                                            className={`border rounded border-gray-300 w-full outline-none h-10 p-2 ${exp.current ? 'bg-gray-100' : ''}`}
                                        />
                                    </div>
                                </div>

                                {/* Currently Working Checkbox */}
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        checked={exp.current}
                                        onChange={(e) => {
                                            handleChange(index, "current", e.target.checked);
                                            if (e.target.checked) handleChange(index, "endDate", "");
                                        }}
                                    />
                                    <label>Currently Working Here</label>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Job Description</label>
                                    <textarea
                                        value={exp.description}
                                        onChange={(e) => handleChange(index, "description", e.target.value)}
                                        placeholder="Describe your responsibilities and achievements..."
                                        className='border rounded border-gray-300 w-full outline-none p-2 h-24 resize-none'
                                    />
                                </div>

                                {experienceType === "Experienced" && experiences.length > 1 && (
                                    <button
                                        onClick={() => removeExperience(index)}
                                        className="absolute top-3 right-3 text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add New Experience - only for Experienced */}
                        {experienceType === "Experienced" && (
                            <button
                                onClick={addExperience}
                                className="border-2 border-dashed border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            >
                                + Add Another Experience
                            </button>
                        )}
                    </>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                    <Link
                        to="/Education"
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
    );
};

export default Experience;
