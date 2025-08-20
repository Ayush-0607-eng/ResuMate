import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage';
import BuildResume from './Pages/BuildResume';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Support from './Pages/Support';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Review from './Pages/Review';
import AISuggest from './Pages/AISuggest';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage/>
    },
    {
      path:"/About",
      element: <About/>
    },
    {
      path:"/AISuggest",
      element: <AISuggest/>
    },
    {
      path:"/BuildResume",
      element: <BuildResume/>
    },
    {
      path:"/Support",
      element: <Support/>
    },
    {
      path:"/Profile",
      element: <Profile/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/Signup",
      element: <Signup/>
    },
    {
      path:"/Skills",
      element: <Skills/>
    },
    {
      path:"/Education",
      element: <Education/>
    },
    {
      path:"/Experience",
      element: <Experience/>
    },
    {
      path:"/Review",
      element: <Review/>
    },
    {
      path:"*",
      element: <Error/>
    }
  ]);

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
