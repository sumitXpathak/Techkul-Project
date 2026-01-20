import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo - Linked to Home */}
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-gray-800">Anugrah Memorial College</span>
          </Link>

          {/* Desktop Menu (Visible on Laptop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-700 font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-700 font-medium">About Us</Link>
            
            {/* --- THIS CONNECTS THE FACULTY PAGE --- */}
            <Link to="/faculty" className="text-gray-600 hover:text-blue-700 font-medium">Faculty</Link>
            {/* -------------------------------------- */}

            <Link to="/academics" className="text-gray-600 hover:text-blue-700 font-medium">Academics</Link>
            <Link to="/admissions" className="text-gray-600 hover:text-blue-700 font-medium">Admissions</Link>
            
            {/* Main CTA Button */}
            <Link 
              to="/admissions" 
              className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button (Visible on Phone) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About Us</Link>
            
            {/* --- FACULTY LINK FOR MOBILE --- */}
            <Link to="/faculty" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Faculty</Link>
            
            <Link to="/academics" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Academics</Link>
            <Link to="/admissions" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Admissions</Link>
            <Link to="/admissions" className="block w-full text-left px-3 py-2 text-blue-700 font-bold">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;