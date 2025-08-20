import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Skills = () => {
    const skillCategories = {
        "Technical Skills": ["Web Development", "Data Structures & Algorithms", "Machine Learning", "Cloud Computing", "Cybersecurity", "Mobile App Development"],
        "Financial Skills": ["Financial Analysis", "Budgeting", "Tax Planning", "Risk Management", "Investment Strategies"],
        "Business Skills": ["Business Strategy", "Project Management", "Entrepreneurship", "Negotiation", "Leadership"],
        "Communication Skills": ["Public Speaking", "Presentation Skills", "Email Writing", "Storytelling", "Active Listening"],
        "Design Skills": ["UI/UX Design", "Graphic Design", "3D Modeling", "Video Editing", "Prototyping"],
        "Marketing Skills": ["SEO", "Social Media Marketing", "Content Creation", "Email Campaigns", "Brand Management"],
        "Analytical Skills": ["Data Analysis", "Critical Thinking", "Problem Solving", "Research", "Statistical Analysis"],
        "Other Skills": [] // New category for anything else
    };

    const navigate = useNavigate();
    const handleNext = () => {
        localStorage.setItem("skills", JSON.stringify(selectedSkills));
        navigate("/Education");
    };

    const [selectedSkills, setSelectedSkills] = useState({});
    const [customSkill, setCustomSkill] = useState({});

    const addSkill = (category, skill) => {
        setSelectedSkills(prev => ({
            ...prev,
            [category]: [...(prev[category] || []), skill]
        }));
    };

    const removeSkill = (category, skill) => {
        setSelectedSkills(prev => ({
            ...prev,
            [category]: prev[category].filter(s => s !== skill)
        }));
    };

    const handleCustomSkillChange = (category, value) => {
        setCustomSkill(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const addCustomSkill = (category) => {
        if (customSkill[category] && customSkill[category].trim() !== "") {
            addSkill(category, customSkill[category].trim());
            setCustomSkill(prev => ({ ...prev, [category]: "" }));
        }
    };

    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className='mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500'>
                <h1 className='font-bold text-5xl mt-10 text-center text-white'>Build Your Perfect Resume</h1>
                <h2 className='text-2xl md:w-300 text-center mt-7 text-white pb-20'>
                    Select and add skills to showcase your expertise
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

            {/* Skills Section */}
            <div className="mt-15 mb-10 border border-gray-300 rounded-2xl p-8 flex flex-col gap-10 w-[90%] md:w-3/4 mx-auto">
                <h1 className='text-3xl text-center font-bold'>Skills</h1>

                {Object.entries(skillCategories).map(([category, suggestions]) => (
                    <div key={category} className='border border-gray-300 rounded-lg p-5'>
                        <h2 className='text-2xl font-semibold mb-4'>{category}</h2>

                        {/* Suggested Skills */}
                        {suggestions.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {suggestions.map(skill => (
                                    <button
                                        key={skill}
                                        onClick={() => addSkill(category, skill)}
                                        className='px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-blue-100'
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Selected Skills */}
                        {selectedSkills[category]?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedSkills[category].map(skill => (
                                    <span
                                        key={skill}
                                        className='px-3 py-1 bg-blue-500 text-white rounded-full flex items-center gap-2'
                                    >
                                        {skill}
                                        <button
                                            onClick={() => removeSkill(category, skill)}
                                            className='bg-white text-blue-500 rounded-full px-2'
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Add Custom Skill */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={customSkill[category] || ""}
                                onChange={(e) => handleCustomSkillChange(category, e.target.value)}
                                placeholder={`Add your own ${category.toLowerCase()}...`}
                                className='border border-gray-300 rounded flex-grow outline-none h-10 p-2'
                            />
                            <button
                                onClick={() => addCustomSkill(category)}
                                className='bg-purple-500 text-white px-4 rounded hover:bg-purple-400 hover:text-black'
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ))}

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                    <Link
                        to="/BuildResume"
                        className="border border-gray-300 px-6 py-2 rounded-3xl text-gray-700 hover:bg-gray-200"
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

export default Skills;



