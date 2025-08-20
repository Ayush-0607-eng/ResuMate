import React from 'react'
import Navbar from '../Components/Navbar'
import Masala from '../Components/Masala'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Masala />
      <Footer />
    </div>
  )
}

export default Homepage


// style={{
//       backgroundImage: "url('https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148236823.jpg?t=st=1755200491~exp=1755204091~hmac=907b3679f53f6b92e73754e3392855e549333af574551c404ec304ad4db87ff0&w=1480')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}