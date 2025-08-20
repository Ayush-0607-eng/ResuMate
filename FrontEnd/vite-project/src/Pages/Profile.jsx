import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    hobbies: "",
    score10: "",
    score12: "",
    collegeScore: "",
    achievements: "",
  });

  useEffect(() => {
    // get logged in user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      fetch(`http://localhost:5000/api/profile/${storedUser.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setFormData({
            hobbies: data.hobbies || "",
            score10: data.score10 || "",
            score12: data.score12 || "",
            collegeScore: data.collegeScore || "",
            achievements: data.achievements || "",
          });
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center text-xl">Loading profile...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-28 h-28 rounded-full border flex items-center justify-center text-white text-4xl font-bold bg-pink-400">
            {user.fullName?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-3xl font-bold">{user.fullName}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <p><span className="font-semibold">Age:</span> {user.age}</p>
          <p>
            <span className="font-semibold">Date of Birth:</span>{" "}
            {user.dob ? new Date(user.dob).toLocaleDateString("en-GB") : ""}
          </p>

          <div>
            <label className="font-semibold">Hobbies:</label>
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">10th Score:</label>
            <input
              type="text"
              name="score10"
              value={formData.score10}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">12th Score:</label>
            <input
              type="text"
              name="score12"
              value={formData.score12}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">College Score:</label>
            <input
              type="text"
              name="collegeScore"
              value={formData.collegeScore}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Achievements:</label>
            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              rows="3"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
