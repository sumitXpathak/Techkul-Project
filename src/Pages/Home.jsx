import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, Trophy, GraduationCap, 
  ArrowRight, Video, Calendar, MapPin, 
  ChevronRight, Star, Bell 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      
      {/* 1. HERO SECTION WITH MODERN GRADIENT OVERLAY */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Anugrah Memorial College Campus" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 border border-blue-300/30 rounded-full bg-blue-800/30 backdrop-blur-sm text-blue-100 text-sm font-medium tracking-wide">
            ESTD. 1964 • GAYA, BIHAR
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
            Excellence in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Education & Character
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Anugrah Memorial College empowers the next generation of leaders through 
            academic rigor, innovative research, and holistic development.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link 
              to="/admissions" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center"
            >
              Apply for 2026 <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              to="/tour" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <Video className="mr-2 w-5 h-5" /> Virtual Tour
            </Link>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-100 to-transparent pt-20"></div>
      </div>

      {/* 2. NOTICE BOARD & NEWS TICKER (New Feature) */}
      <div className="bg-blue-900 text-white overflow-hidden flex items-center h-12">
        <div className="bg-blue-800 px-6 h-full flex items-center font-bold text-sm uppercase tracking-wider z-10 shadow-md">
          <Bell className="w-4 h-4 mr-2" /> Latest Updates
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap pl-4">
            <span className="mx-8">• Admission Forms for B.Sc. Part I are now available online.</span>
            <span className="mx-8">• Annual Sports Day scheduled for Feb 20th.</span>
            <span className="mx-8">• Result declared for M.A. Semester III Examination.</span>
          </div>
        </div>
      </div>

      {/* 3. REFINED STATISTICS */}
      <div className="py-20 bg-gray-50 relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, count: "5,000+", label: "Active Students" },
              { icon: BookOpen, count: "40+", label: "Courses Offered" },
              { icon: Trophy, count: "A Grade", label: "NAAC Accredited" },
              { icon: GraduationCap, count: "60 Yrs", label: "Educational Legacy" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center hover:transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.count}</h3>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE US (New Section) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
              <img 
                src="WhatsApp Image 2026-01-20 at 3.09.36 PM.jpeg" 
                alt="Library" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <Star className="w-5 h-5 text-yellow-600" fill="currentColor" />
                  </div>
                  <span className="font-bold text-gray-800">Top Ranked</span>
                </div>
                <p className="text-sm text-gray-600">Consistently ranked among the best constituent colleges in Magadh University.</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Why Anugrah Memorial</h4>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                A Hub of Innovation & <br/>Traditional Values
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located in the historic city of Gaya, our campus blends modern infrastructure with a serene learning environment. We focus on holistic development beyond textbooks.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Expert Faculty", desc: "Learn from Ph.D. holders and industry experts." },
                  { title: "Modern Labs", desc: "State-of-the-art computer and science laboratories." },
                  { title: "Placement Cell", desc: "Dedicated career guidance and recruitment drives." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">{item.title}</h5>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ACADEMIC DEPARTMENTS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Pillars</h2>
            <p className="text-gray-600 text-lg">
              Explore our diverse range of undergraduate and postgraduate programs designed to build careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Science & Technology", 
                img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", 
                tags: ["Physics", "Comp. App", "Maths"]
              },
              { 
                title: "Humanities & Social Sciences", 
                img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", 
                tags: ["History", "Pol. Sci", "Economics"]
              },
              { 
                title: "Commerce & Management", 
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
                tags: ["Accounts", "Business", "Management"]
              }
            ].map((course, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/academics" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/link">
                    View Department <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. MODERN CTA / ADMISSIONS */}
      <div className="relative py-24 bg-blue-900 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-800 rounded-full opacity-50 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 text-blue-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Future Starts Here</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Admissions for the academic year 2026-27 are now open. Secure your spot today in one of Bihar's premier institutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20"
            >
              Apply Online
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-blue-400 text-blue-100 rounded-lg font-bold text-lg hover:bg-blue-800/50 hover:border-blue-300 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center items-center text-blue-300 text-sm">
             <MapPin className="w-4 h-4 mr-2" /> Katari Hill Road, Gaya, Bihar - 823001
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;