import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Initialize Theme State
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  // 2. Apply the Theme to HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // 3. Toggle Function
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-700 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white transition-colors">
              Anugrah Memorial
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors">About Us</Link>
            <Link to="/academics" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors">Academics</Link>
            <Link to="/faculty" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors">Faculty</Link>
            <Link to="/admissions" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors">Admissions</Link>
            
            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>

            <Link 
              to="/admissions" 
              className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">About Us</Link>
            <Link to="/academics" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">Academics</Link>
            <Link to="/faculty" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">Faculty</Link>
            <Link to="/admissions" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">Admissions</Link>
            <Link to="/admissions" className="block w-full text-left px-3 py-2 text-blue-700 dark:text-blue-400 font-bold">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;