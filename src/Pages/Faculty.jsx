import React, { useState } from 'react';
import { Mail, Phone, Search, Users, Award, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. MOCK DATA
const facultyMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Md. Nazir Akhtar",
    designation: "Principal",
    department: "Administration",
    email: "principal@amcollege.ac.in",
    image: "1755320413Prof.(Dr. ) Md.  Nazir Akhtar.png",
  },
  {
    id: 2,
    name: "Malay Kumar",
    designation: "Assistant Professor",
    department: "Science",
    email: "malay.k@amcollege.ac.in",
    image: "1616078820MALAY.jpeg",
  },
  {
    id: 3,
    name: "Gautam Kumar",
    designation: "Associate Professor",
    department: "Commerce",
    email: "gautam.k@amcollege.ac.in",
    image: "WhatsApp Image 2026-01-19 at 9.06.29 PM.jpeg",
  },
  {
    id: 4,
    name: "Prince Kumar",
    designation: "Professor, English",
    department: "Arts",
    email: "prince.k@amcollege.ac.in",
    image: "image.png",
  },
  {
    id: 5,
    name: "Nidhi Kanchan",
    designation: "Lab Instructor",
    department: "Science",
    email: "nidhi.k@amcollege.ac.in",
    image: "WhatsApp Image 2026-01-19 at 9.13.39 PM.jpeg",
  },
];

const Faculty = () => {
  const [filter, setFilter] = useState('All');

  // Logic to filter the list
  const filteredFaculty = filter === 'All' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === filter);

  return (
    <div className="pt-16 min-h-screen bg-gray-50 pb-16">
      
      {/* 1. UPGRADED HERO HEADER */}
      <div className="relative bg-blue-900 text-white py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Faculty Meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/95 to-blue-800/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Faculty</span>
          </div>

          <span className="bg-blue-800 border border-blue-600 text-blue-100 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
            Academic Excellence
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Meet the Minds <br /> <span className="text-blue-300">Shaping the Future</span>
          </h1>
          
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Our distinguished faculty members are dedicated mentors, researchers, and industry experts committed to student success.
          </p>
        </div>
      </div>

      {/* 2. STATS STRIP (Fills the gap between header and list) */}
      <div className="bg-white border-b border-gray-200 -mt-1 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mt-1">Ph.D. Holders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">120+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mt-1">Total Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">20+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mt-1">Departments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">15:1</div>
                <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mt-1">Student Ratio</div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        
        {/* 3. SEARCH & FILTER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Faculty Directory</h2>
                <p className="text-gray-500 text-sm mt-1">Browse our professors by department</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Science', 'Arts', 'Commerce', 'Administration'].map((dept) => (
                <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    filter === dept 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                >
                {dept}
                </button>
            ))}
            </div>
        </div>

        {/* 4. FACULTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full border-2 border-white">
                        <Award className="w-4 h-4" />
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.designation}</p>
                
                <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                  <BookOpen className="w-3 h-3" />
                  {member.department}
                </span>
                
                <div className="w-full flex justify-center space-x-3 pt-6 mt-6 border-t border-gray-100">
                  <a href={`mailto:${member.email}`} className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2 rounded-lg text-sm font-semibold hover:bg-green-100 transition">
                    <Phone className="h-4 w-4" /> Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">No Faculty Found</h3>
            <p className="text-gray-500">Try selecting a different department.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Faculty;