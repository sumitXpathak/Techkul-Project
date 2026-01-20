import React from 'react';
// CHANGE 1: Import HashRouter instead of BrowserRouter to fix GitHub Pages routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Admissions from './Pages/Addmissions';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Faculty from './Pages/Faculty';
import Academics from './Pages/Academics';
import Contact from './Pages/Contact';
import VirtualTour from './Pages/Tour';

const App = () => {
  return (
    // CHANGE 2: Use Router (which is now HashRouter)
    <Router>
      <ScrollToTop />
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
        
        {/* Added Footer here so it appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;