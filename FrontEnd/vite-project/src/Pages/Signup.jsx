import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!fullName || !dob || !age || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        const firstName = fullName.trim().split(" ")[0];
        const userData = { firstName, fullName, dob, age, email, password };

        try {
            // Use env variable for backend URL
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (res.status === 201) {
                alert("Account created successfully!");
                navigate("/login"); // go to loginpage
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
            alert("Server error. Try again later.");
        }
    };



    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-[80vh] px-4 mt-10">
                <div className="border border-gray-300 rounded-2xl p-8 w-full max-w-md shadow-lg bg-white">
                    <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

                    <form className="flex flex-col gap-5" onSubmit={handleSignup}>
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        {/* DOB */}
                        <div className="flex flex-col gap-2">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        {/* Age */}
                        <div className="flex flex-col gap-2">
                            <label>Age</label>
                            <input
                                type="number"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-2">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-400 hover:text-black transition"
                        >
                            Create Account
                        </button>

                        <p className="text-center text-gray-600 text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="text-purple-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
