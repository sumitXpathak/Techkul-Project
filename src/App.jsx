import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Correct import for Navbar (Capital 'N', correct folder)
import Navbar from './components/Navbar';
import Admissions from './Pages/Addmissions'; // Note: File name should match exactly
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Faculty from './Pages/Faculty';
import Academics from './Pages/Academics';
import Contact from './Pages/Contact';
import VirtualTour from './Pages/Tour';




const App = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour" element={<VirtualTour />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;