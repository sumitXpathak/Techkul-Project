import React, { useState } from 'react';
import { Mail, Phone, Search } from 'lucide-react';

// 1. MOCK DATA (In a real app, this comes from a database)
const facultyMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Md. Nazir Akhtar",
    designation: "Principal",
    department: "Administration",
    email: "principal@amcollege.ac.in",
  },
  {
    id: 2,
    name: "Malay Kumar",
    designation: "Assistant Professor",
    department: "Science",
    email: "anjali.v@amcollege.ac.in",
  },
  {
    id: 3,
    name: "Gautam Kumar",
    designation: "Associate Professor",
    department: "Commerce",
    email: "vikram.s@amcollege.ac.in",
  },
  {
    id: 4,
    name: "Prince Kumar",
    designation: "Professor, English",
    department: "Arts",
    email: "kavita.d@amcollege.ac.in",
  },
  {
    id: 5,
    name: "Nidhi Kanchan",
    designation: "Lab Instructor",
    department: "Science",
    email: "amit.k@amcollege.ac.in",
  },
];

const Faculty = () => {
  const [filter, setFilter] = useState('All');

  // Logic to filter the list based on the button clicked
  const filteredFaculty = filter === 'All' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === filter);

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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Science', 'Arts', 'Commerce', 'Administration'].map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                filter === dept 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center p-8 text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
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

        {/* Empty State (If no faculty found in filter) */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No faculty members found in this department.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Faculty;