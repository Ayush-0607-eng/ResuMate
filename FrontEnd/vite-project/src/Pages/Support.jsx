import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Support</h1>
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="space-y-4">
          <p>
            <span className="font-semibold px-1">📍 Address:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            <span className="font-semibold px-1">📞 Helpline:</span>
            +00 1234 567 890
          </p>
          <p>
            <span className="font-semibold px-1">✉️ Email:</span>
            lorem@ipsum.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
