import React, { useState } from 'react';
import { Mail, Phone, Search, User } from 'lucide-react';

// 1. MOCK DATA
const facultyMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Md. Nazir Akhtar",
    designation: "Principal",
    department: "Administration",
    email: "principal@amcollege.ac.in",
    // Agar image nahi hai to placeholder use karega
    image: "1755320413Prof.(Dr. ) Md.  Nazir Akhtar.png", 
  },
  {
    id: 2,
    name: "Malay Kumar",
    designation: "Assistant Professor",
    department: "Science",
    email: "anjali.v@amcollege.ac.in",
    image: "1616078820MALAY.jpeg",
  },
  {
    id: 3,
    name: "Gautam Kumar",
    designation: "Associate Professor",
    department: "Commerce",
    email: "vikram.s@amcollege.ac.in",
    image: "WhatsApp Image 2026-01-19 at 9.06.29 PM.jpeg",
  },
  {
    id: 4,
    name: "Prince Kumar",
    designation: "Professor, English",
    department: "Arts",
    email: "kavita.d@amcollege.ac.in",
    image: "image.png",
  },
  {
    id: 5,
    name: "Nidhi Kanchan",
    designation: "Lab Instructor",
    department: "Science",
    email: "amit.k@amcollege.ac.in",
    image: "WhatsApp Image 2026-01-19 at 9.13.39 PM.jpeg",
  },
];

const Faculty = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Search + Filter Logic
  const filteredFaculty = facultyMembers.filter(member => {
    const matchesDept = filter === 'All' || member.department === filter;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-16">
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Meet Our Faculty</h1>
          <p className="text-blue-200">The mentors shaping the future of our students.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Controls Section: Search Bar + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            
            {/* SEARCH BAR (Fixed Padding Issue) */}
            <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by name or role..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Science', 'Arts', 'Commerce', 'Administration'].map((dept) => (
                <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    filter === dept 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                >
                {dept}
                </button>
            ))}
            </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center p-8 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {e.target.src='https://via.placeholder.com/150'}} // Fallback image
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-50 mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.designation}</p>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-4">
                  {member.department}
                </span>
                
                <div className="w-full flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <a href={`mailto:${member.email}`} className="flex items-center text-gray-500 hover:text-blue-600 text-sm transition">
                    <Mail className="h-4 w-4 mr-1" /> Email
                  </a>
                  <button className="flex items-center text-gray-500 hover:text-green-600 text-sm transition">
                    <Phone className="h-4 w-4 mr-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No faculty members found matching your search.</p>
            <button 
                onClick={() => {setFilter('All'); setSearchTerm('')}}
                className="mt-4 text-blue-600 font-medium hover:underline"
            >
                Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Faculty;