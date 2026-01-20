import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, Users, FileText, Download, 
  Microscope, Palette, Calculator, ChevronRight, 
  GraduationCap, Monitor, Award, Library 
} from 'lucide-react';

const coursesData = {
  Science: [
    { title: "B.Sc (Physics Honours)", duration: "3 Years", seats: 60, code: "PHY-101", desc: "Explore classical mechanics, quantum physics, and advanced electronics with hands-on lab work." },
    { title: "B.Sc (Mathematics)", duration: "3 Years", seats: 80, code: "MAT-102", desc: "Master calculus, algebra, and statistical methods applicable in data science and research." },
    { title: "B.Sc (Chemistry)", duration: "3 Years", seats: 60, code: "CHE-103", desc: "In-depth study of organic and inorganic chemistry with extensive industrial laboratory training." },
    { title: "BCA (Vocational)", duration: "3 Years", seats: 45, code: "BCA-201", desc: "A professional course in software development, web technologies, and database management." },
  ],
  Arts: [
    { title: "B.A (English Honours)", duration: "3 Years", seats: 120, code: "ENG-101", desc: "Dive into world literature, linguistics, and creative writing to master the global language." },
    { title: "B.A (History)", duration: "3 Years", seats: 100, code: "HIS-102", desc: "Analyze ancient, medieval, and modern history to understand the roots of civilization." },
    { title: "B.A (Political Science)", duration: "3 Years", seats: 100, code: "POL-103", desc: "Understand political theory, international relations, and public administration governance." },
  ],
  Commerce: [
    { title: "B.Com (Accounts)", duration: "3 Years", seats: 150, code: "COM-101", desc: "Comprehensive training in financial accounting, taxation, auditing, and business law." },
    { title: "B.Com (Management)", duration: "3 Years", seats: 60, code: "MGT-102", desc: "Learn the principles of management, marketing strategies, and human resource development." },
  ]
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('Science');

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'Science': return <Microscope className="w-5 h-5" />;
      case 'Arts': return <Palette className="w-5 h-5" />;
      case 'Commerce': return <Calculator className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900 pb-16 font-sans transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Students Studying" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-800/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="flex justify-center items-center gap-2 text-sm text-blue-200 mb-6">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Academics</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Academic <span className="text-blue-300">Excellence</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                Fostering critical thinking, innovation, and practical skills through our comprehensive undergraduate and vocational programs.
            </p>
        </div>
      </div>

      {/* 2. KEY HIGHLIGHTS BAR */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm relative z-20 -mt-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-100 dark:divide-slate-700">
                <div className="flex flex-col items-center">
                    <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="font-bold text-gray-800 dark:text-white text-lg">20+ Courses</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Across 3 Streams</span>
                </div>
                <div className="flex flex-col items-center">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="font-bold text-gray-800 dark:text-white text-lg">15:1 Ratio</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Student to Faculty</span>
                </div>
                <div className="flex flex-col items-center">
                    <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="font-bold text-gray-800 dark:text-white text-lg">Smart Labs</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Digital Learning</span>
                </div>
                <div className="flex flex-col items-center">
                    <Library className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="font-bold text-gray-800 dark:text-white text-lg">50k+ Books</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Central Library</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* 3. TABS SECTION */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Programs</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Choose your path to success</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-md border border-gray-100 dark:border-slate-700">
            {['Science', 'Arts', 'Commerce'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600'
                }`}
              >
                {getTabIcon(tab)}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4. COURSE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {coursesData[activeTab].map((course, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 group-hover:w-2 transition-all"></div>
              
              <div className="flex justify-between items-start mb-4 pl-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <span className="bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                  {course.code}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 pl-4 leading-relaxed">{course.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pl-4">
                <div className="flex items-center bg-gray-50 dark:bg-slate-700 p-2 rounded-lg">
                  <Clock className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                  {course.duration}
                </div>
                <div className="flex items-center bg-gray-50 dark:bg-slate-700 p-2 rounded-lg">
                  <Users className="h-4 w-4 mr-2 text-green-500 dark:text-green-400" />
                  {course.seats} Seats Available
                </div>
              </div>

              <div className="flex gap-4 pl-4">
                <button className="flex-1 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-600 transition">
                  View Syllabus
                </button>
                <Link to="/admissions" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-700 shadow-md hover:shadow-lg transition">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 5. WHY CHOOSE US */}
        <div className="bg-blue-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12 mb-20 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">Why Study at Anugrah Memorial?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="bg-blue-200 dark:bg-blue-900/50 p-1 rounded-full mr-3 mt-1"><Award className="w-4 h-4 text-blue-800 dark:text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-white">Holistic Development</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">We focus on character building alongside academic grades.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-blue-200 dark:bg-blue-900/50 p-1 rounded-full mr-3 mt-1"><Monitor className="w-4 h-4 text-blue-800 dark:text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-white">Digital Classrooms</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Modern projection systems and e-learning resources.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-blue-200 dark:bg-blue-900/50 p-1 rounded-full mr-3 mt-1"><Users className="w-4 h-4 text-blue-800 dark:text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-white">Seminars & Workshops</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Regular industry interaction and guest lectures.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                     <img src="https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Library" className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition duration-500" />
                </div>
            </div>
        </div>

        {/* 6. DOWNLOADS SECTION */}
        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <BookOpen className="mr-3 text-blue-600 dark:text-blue-400" /> Student Resources
            </h2>
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline mt-2 md:mt-0">
                Need help finding something?
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: "Exam Schedule 2026", sub: "Updated Jan 15", color: "text-red-500" },
                { title: "Academic Calendar", sub: "Session 2026-27", color: "text-green-500" },
                { title: "Scholarship Guide", sub: "Bihar Govt Schemes", color: "text-blue-500" }
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 border border-gray-200 dark:border-slate-600 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-blue-200 cursor-pointer group transition-all">
                    <div className="flex items-center">
                        <FileText className={`h-10 w-10 ${item.color} bg-gray-50 dark:bg-slate-700 p-2 rounded-lg mr-4`} />
                        <div>
                        <h4 className="font-bold text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition">{item.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-600 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                        <Download className="h-4 w-4 dark:text-white" />
                    </div>
                </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academics;