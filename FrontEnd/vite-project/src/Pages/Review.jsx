import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Review = () => {
    const [personalInfo, setPersonalInfo] = useState({});
    const [skills, setSkills] = useState({});
    const [education, setEducation] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [experience, setExperience] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")) || {});
        setSkills(JSON.parse(localStorage.getItem("skills")) || {});
        setEducation(JSON.parse(localStorage.getItem("education")) || []);
        setCertifications(JSON.parse(localStorage.getItem("certifications")) || []);
        setExperience(JSON.parse(localStorage.getItem("experience")) || {});
    }, []);

    const handleBuildResume = async () => {
        const resumeData = { personalInfo, skills, education, certifications, experience };

        try {
            setLoading(true);

            // Save to DB
            await fetch("http://localhost:5000/api/resume/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(resumeData),
            });

            // Generate Resume PDF (now from Ollama instead of OpenAI)
            const res = await fetch("http://localhost:5000/api/resume/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(resumeData),
            });

            if (!res.ok) throw new Error("Resume generation failed");

            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "My-Resume.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("❌ Error:", err);
            alert("Something went wrong while building your resume!");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className="mt-10 pb-5 flex flex-col gap-3 justify-center items-center bg-blue-500">
                <h1 className="font-bold text-5xl mt-10 text-center text-white">
                    Review Your Details
                </h1>
                <h2 className="text-2xl md:w-300 text-center mt-7 text-white pb-20">
                    Make sure everything looks good before creating your resume
                </h2>
            </div>

            {/* Review Section */}
            <div className="w-[90%] md:w-3/4 mx-auto mt-10 mb-16 flex flex-col gap-8">
                {/* Personal Info */}
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                    <p><strong>Name:</strong> {personalInfo.name}</p>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <p><strong>Address:</strong> {personalInfo.address}</p>
                </div>

                {/* Skills */}
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    {Object.keys(skills).length > 0 ? (
                        Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="mb-2">
                                <strong>{category}:</strong> {skillList.join(", ")}
                            </div>
                        ))
                    ) : (
                        <p>No skills added.</p>
                    )}
                </div>

                {/* Education */}
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <strong>{edu.degree}</strong> - {edu.institution} ({edu.startYear} - {edu.endYear})
                                {edu.gpa && <span> | GPA: {edu.gpa}</span>}
                            </div>
                        ))
                    ) : (
                        <p>No education details added.</p>
                    )}
                </div>

                {/* Certifications */}
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                    {certifications.length > 0 ? (
                        certifications.map((cert, index) => (
                            <div key={index} className="mb-2">
                                <strong>{cert.name}</strong> - {cert.year}
                            </div>
                        ))
                    ) : (
                        <p>No certifications added.</p>
                    )}
                </div>

                {/* Experience */}
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                    {experience.type ? (
                        <>
                            <p><strong>Type:</strong> {experience.type}</p>
                            {experience.title && <p><strong>Title:</strong> {experience.title}</p>}
                            {experience.company && <p><strong>Company:</strong> {experience.company}</p>}
                            {experience.duration && <p><strong>Duration:</strong> {experience.duration}</p>}
                            {experience.description && <p><strong>Description:</strong> {experience.description}</p>}
                        </>
                    ) : (
                        <p>No experience details added.</p>
                    )}
                </div>

                {/* Build Resume Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleBuildResume}
                        className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 hover:text-black text-lg disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "⏳ Building Resume..." : "Build My Resume"}
                    </button>
                </div>
            </div>

            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4"></div>
                        <p className="text-lg font-medium">Your resume is getting created...</p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Review;
