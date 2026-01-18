import React from 'react';
import { History, Target, Eye, Award, User } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      
      {/* 1. PAGE HEADER */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A legacy of educational excellence in Gaya, fostering knowledge and character since inception.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        
        {/* 2. OUR HISTORY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Old College Building" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <History className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-bold uppercase tracking-wide">Our History</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Tradition of Excellence</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Anugrah Memorial College, established in the heart of Gaya, has been a beacon of higher education for decades. Named after the visionary leader Anugrah Narayan Sinha, the college was founded with the noble aim of bringing quality education to the youth of Bihar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we have grown from a small institution into a premier center of learning, offering a wide array of undergraduate and vocational courses. Our alumni hold distinguished positions across the globe, a testament to the strong foundation laid within these walls.
            </p>
          </div>
        </div>

        {/* 3. MISSION & VISION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower students from diverse backgrounds with quality education, critical thinking skills, and ethical values, preparing them to contribute effectively to society and the nation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-teal-500">
            <Eye className="h-12 w-12 text-teal-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be a center of academic excellence that nurtures innovation, leadership, and social responsibility, creating global citizens rooted in Indian values.
            </p>
          </div>
        </div>

        {/* 4. PRINCIPAL'S MESSAGE */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-blue-800 p-8 text-white flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 bg-blue-700 rounded-full flex items-center justify-center mb-4 text-4xl">
                <User className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold">Prof. (Dr.) Md. Nazir Akhtar</h3>
              <p className="text-blue-200">Principal</p>
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message from the Desk</h3>
              <blockquote className="text-gray-600 italic mb-6 border-l-4 border-blue-600 pl-4">
                "Education is not just about filling a bucket, but lighting a fire. At Anugrah Memorial College, we strive to ignite that spark of curiosity and ambition in every student. We believe in holistic development where academic pursuit meets character building."
              </blockquote>
              <p className="text-gray-600">
                We welcome you to join our vibrant community and embark on a journey of lifelong learning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;