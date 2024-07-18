import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Index from '../pages/Index';
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/vamps" element = {<Index/>}/>
          <Route path="/vamps/:id" element ={<Show/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
