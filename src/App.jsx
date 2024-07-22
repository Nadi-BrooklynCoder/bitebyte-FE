import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Index from './Pages/Index';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import New from './Pages/New'
import FourOFour from './Pages/FourOFour'
import NavBar from './Components/NavBar'
import './App.css'

function App() {
 

  return (
    <>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vamps" element={<Index />} />
            <Route path="/vamps/new" element={<New />} />
            <Route path="/vamps/:id" element={<Show />} />
            <Route path="/vamps/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/vamps/404" element={<FourOFour/>}/>
          </Routes>
        </div>

    </>
  )
}

export default App
