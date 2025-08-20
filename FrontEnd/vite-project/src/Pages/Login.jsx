import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        // Save user info in localStorage
        localStorage.setItem("user", JSON.stringify({ ...data.user, loggedIn: true }));
        navigate("/"); // go to home
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
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <div className="border border-gray-300 rounded-2xl p-8 w-full max-w-md shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
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

            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 hover:text-black transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
