import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Trophy, GraduationCap, ArrowRight, Video } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <div className="relative pt-16 pb-12 md:pt-32 md:pb-24 flex items-center min-h-[85vh] bg-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Anugrah Memorial College Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Welcome to <span className="text-blue-400">Anugrah Memorial College</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Empowering students with knowledge, character, and integrity. Join a legacy of excellence in education.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* LINK 1: ACADEMICS */}
            <Link 
              to="/academics" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg inline-block"
            >
              Explore Courses
            </Link>
            
            {/* LINK 2: VIRTUAL TOUR */}
            <Link 
              to="/tour" 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg border border-transparent inline-block"
            >
              Virtual Tour
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STATISTICS SECTION */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-xl hover:-translate-y-1 transition duration-300">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">5k+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl hover:-translate-y-1 transition duration-300">
              <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">40+</h3>
              <p className="text-gray-600">Courses Offered</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl hover:-translate-y-1 transition duration-300">
              <Trophy className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">A+</h3>
              <p className="text-gray-600">NAAC Accreditation</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl hover:-translate-y-1 transition duration-300">
              <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">60+</h3>
              <p className="text-gray-600">Years of Legacy</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. POPULAR COURSES */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Departments</h2>
            <p className="mt-4 text-gray-600">Anugrah Memorial College offers a diverse range of undergraduate and postgraduate programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Science & Technology", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", desc: "Physics, Chemistry, Mathematics, and Computer Applications." },
              { title: "Humanities & Arts", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", desc: "History, Political Science, Economics, and Literature." },
              { title: "Commerce & Management", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", desc: "Accountancy, Business Studies, and Management Principles." }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <Link to="/academics" className="flex items-center text-blue-600 font-semibold hover:text-blue-800">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. ADMISSIONS CALL-TO-ACTION */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Anugrah Memorial College?</h2>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-10">
            Admissions for the academic year 2026-27 are now open. Secure your spot today in one of Bihar's premier institutions.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            
            <Link 
              to="/admissions" 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg text-center"
            >
              Apply Online Now
            </Link>
            
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition text-center"
            >
              Contact Admissions
            </Link>

            <Link
              to="/tour"
              className="px-8 py-4 bg-blue-800 text-blue-100 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center"
            >
              <Video className="w-5 h-5 mr-2" /> Virtual Tour
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;