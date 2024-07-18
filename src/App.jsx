import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Index from '../pages/Index';
import Show from '../pages/Show';
import New from '../pages/New';
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/vamps" element = {<Index/>}/>
          <Route path="/vamps/:id" element ={<Show/>}/>
          <Route path="/newVamps" element = {<New/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
