import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, FileText, Download } from 'lucide-react';

// Mock Data for Courses
const coursesData = {
  Science: [
    { title: "B.Sc (Physics Honours)", duration: "3 Years", seats: 60, code: "PHY-101", desc: "Classical mechanics, quantum physics, and electronics." },
    { title: "B.Sc (Mathematics)", duration: "3 Years", seats: 80, code: "MAT-102", desc: "Calculus, algebra, and advanced statistical methods." },
    { title: "B.Sc (Chemistry)", duration: "3 Years", seats: 60, code: "CHE-103", desc: "Organic, inorganic, and physical chemistry labs." },
    { title: "BCA (Vocational)", duration: "3 Years", seats: 45, code: "BCA-201", desc: "Software development, web technologies, and database management." },
  ],
  Arts: [
    { title: "B.A (English Honours)", duration: "3 Years", seats: 120, code: "ENG-101", desc: "Literature, linguistics, and creative writing." },
    { title: "B.A (History)", duration: "3 Years", seats: 100, code: "HIS-102", desc: "Ancient, medieval, and modern Indian history." },
    { title: "B.A (Political Science)", duration: "3 Years", seats: 100, code: "POL-103", desc: "Political theory, international relations, and public admin." },
  ],
  Commerce: [
    { title: "B.Com (Accounts)", duration: "3 Years", seats: 150, code: "COM-101", desc: "Financial accounting, taxation, and business law." },
    { title: "B.Com (Management)", duration: "3 Years", seats: 60, code: "MGT-102", desc: "Principles of management, marketing, and HR." },
  ]
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('Science');

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-12">
      
      {/* 1. Header Section */}
      <div className="bg-blue-900 text-white py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-blue-200 text-lg">
            Comprehensive undergraduate and vocational courses designed for excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* 2. Department Tabs */}
        <div className="flex justify-center mb-12 space-x-2 md:space-x-4 overflow-x-auto">
          {['Science', 'Arts', 'Commerce'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab} Stream
            </button>
          ))}
        </div>

        {/* 3. Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {coursesData[activeTab].map((course, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                  {course.code}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{course.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                  {course.seats} Seats
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                  Syllabus
                </button>
                <Link to="/admissions" className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Academic Resources Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-2 text-blue-600" /> Academic Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-800">Exam Schedule 2026</h4>
                  <p className="text-xs text-gray-500">Updated: Jan 10, 2026</p>
                </div>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-800">Academic Calendar</h4>
                  <p className="text-xs text-gray-500">Session 2026-27</p>
                </div>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-800">Scholarship Guide</h4>
                  <p className="text-xs text-gray-500">Bihar Govt. Schemes</p>
                </div>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academics;