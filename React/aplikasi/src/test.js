import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/about";



function Test(){
    return(

        <Router>
        <div>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        </Router>
    )
}
export default Test