import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Edit from '../pages/Edit';
import './App.css'

function App() {
 

  return (
    <>
      {/* <Router> */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vamps" element={<Index />} />
            {/* <Route path="/vamps/new" element={<New />} /> */}
            <Route path="/vamps/:id" element={<Show />} />
            <Route path="/vamps/:id/edit" element={<Edit />} />
          </Routes>
        </div>
      {/* </Router> */}
    </>
  )
}

export default App
