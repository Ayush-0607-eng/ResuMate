import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to our AI Resume Builder! 
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our platform helps job seekers create professional resumes in just a few minutes.
          Using the power of Artificial Intelligence, we analyze your inputs and generate
          tailored resume formats that highlight your skills, experiences, and achievements.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you’re a fresher or an experienced professional, our tool ensures your
          resume stands out in today’s competitive job market. No more struggling with
          formatting or wording – we’ve got you covered.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Start building your AI-powered resume today and land your dream job with ease! 
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
