import React from 'react';
import { Link } from 'react-router-dom';
import { History, Target, Eye, Award, User, BookOpen, Star, TrendingUp, Users, Calendar, ChevronRight } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1960", title: "Inception", desc: "Established under the visionary leadership of Anugrah Narayan Sinha." },
    { year: "1985", title: "Expansion", desc: "Launched Post-Graduate wings for Science and Arts streams." },
    { year: "2010", title: "NAAC 'A' Grade", desc: "Recognized nationally for academic excellence and infrastructure." },
    { year: "2025", title: "Digital Era", desc: "Implementation of Smart Classrooms and Vocational Tech courses." }
  ];

  const values = [
    { icon: <BookOpen className="h-8 w-8 text-blue-600" />, title: "Academic Excellence", desc: "Pursuing the highest standards in teaching and research." },
    { icon: <Star className="h-8 w-8 text-yellow-500" />, title: "Integrity", desc: "Upholding honesty and ethical behavior in all endeavors." },
    { icon: <TrendingUp className="h-8 w-8 text-green-600" />, title: "Innovation", desc: "Fostering creativity and critical thinking in students." },
    { icon: <Users className="h-8 w-8 text-purple-600" />, title: "Inclusivity", desc: "Creating a welcoming environment for students of all backgrounds." }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      
      {/* 1. UPGRADED HERO HEADER */}
      <div className="relative bg-blue-900 text-white py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="College Library" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-800/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">About Us</span>
          </div>

          <span className="bg-blue-800 text-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Est. 1960
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our Legacy of <span className="text-blue-400">Excellence</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            For over 60 years, Anugrah Memorial College has been a beacon of hope, knowledge, and character building in the heart of Bihar.
          </p>
        </div>
      </div>

      {/* 2. QUICK STATS BAR (New "Thing") */}
      <div className="bg-blue-800 text-white py-8 border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-700/50">
            <div>
              <div className="text-3xl font-bold">60+</div>
              <div className="text-blue-300 text-sm">Years History</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-300 text-sm">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">120+</div>
              <div className="text-blue-300 text-sm">Expert Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-300 text-sm">Courses</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
        {/* 3. MILESTONE TIMELINE */}
        <div>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">History</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">A Journey Through Time</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  <div className="z-10 bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-blue-100 shadow-sm">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 mt-4 md:mt-0 relative group">
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-blue-600 ${index % 2 === 0 ? '-right-4' : '-left-4'}`}></div>
                    <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 rounded-2xl text-white shadow-xl relative overflow-hidden group">
            <Target className="absolute -bottom-4 -right-4 text-blue-700 h-40 w-40 opacity-20 group-hover:scale-110 transition duration-500" />
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Target className="mr-3" /> Our Mission</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              To empower students from diverse backgrounds with quality education, critical thinking skills, and ethical values, preparing them to contribute effectively to society.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-700 to-teal-600 p-10 rounded-2xl text-white shadow-xl relative overflow-hidden group">
            <Eye className="absolute -bottom-4 -right-4 text-teal-500 h-40 w-40 opacity-20 group-hover:scale-110 transition duration-500" />
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Eye className="mr-3" /> Our Vision</h3>
            <p className="text-teal-50 leading-relaxed text-lg">
              To be a center of academic excellence that nurtures innovation, leadership, and social responsibility, creating global citizens rooted in Indian values.
            </p>
          </div>
        </div>

        {/* 5. CORE VALUES */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-500 mt-2">The principles that guide our every action.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100 text-center">
                <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. PRINCIPAL'S DESK & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-100 h-32 flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6 text-center -mt-12">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-md border-4 border-white">
                         <img src="1755320413Prof.(Dr. ) Md.  Nazir Akhtar.png" alt="Principal" className="rounded-full w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">Md. Nazir Akhtar</h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">Principal</p>
                    <p className="text-gray-500 text-sm italic">"Education is the kindling of a flame, not the filling of a vessel."</p>
                </div>
            </div>

            {/* CTA Box */}
            <div className="lg:col-span-2 bg-blue-600 rounded-2xl shadow-lg p-10 text-white flex flex-col justify-center items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
                
                <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to start your journey?</h2>
                <p className="text-blue-100 mb-8 max-w-lg relative z-10">
                    Join thousands of successful alumni who started their path to success at Anugrah Memorial College. Applications are now open.
                </p>
                <div className="flex gap-4 relative z-10">
                    <Link to="/admissions" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                        Apply Now
                    </Link>
                    <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;