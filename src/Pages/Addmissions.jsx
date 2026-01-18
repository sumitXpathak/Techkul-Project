import React, { useState } from 'react';
import { CheckCircle, Calendar, FileText, AlertCircle } from 'lucide-react';

const Admissions = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    percentage: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application Submitted for ${formData.fullName}!\nWe will contact you at ${formData.email}.`);
    // Reset form
    setFormData({ fullName: '', email: '', phone: '', course: '', percentage: '' });
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions 2026-27</h1>
          <p className="text-blue-200 text-lg">Join Anugrah Memorial College and shape your future.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Information & Guidelines */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="mr-2 text-blue-600" /> Admission Guidelines
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="font-semibold text-lg mb-4 text-blue-800">Eligibility Criteria</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Minimum 50% marks in 10+2 (Intermediate) for Undergraduate courses.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Valid Identification Proof (Aadhar Card/Voter ID).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Recent passport-sized photographs and scanned signature.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center text-blue-900">
              <Calendar className="mr-2" /> Important Dates
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-blue-200 pb-2">
                <span className="text-gray-700">Application Start Date</span>
                <span className="font-bold text-blue-900">May 15, 2026</span>
              </div>
              <div className="flex justify-between border-b border-blue-200 pb-2">
                <span className="text-gray-700">Last Date to Apply</span>
                <span className="font-bold text-red-600">June 30, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Entrance Exam</span>
                <span className="font-bold text-blue-900">July 10, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Application Form */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply Online</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                <select 
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="">-- Choose a Program --</option>
                  <option value="B.Sc Physics">B.Sc Physics (Honours)</option>
                  <option value="B.Sc Math">B.Sc Mathematics</option>
                  <option value="B.Com">B.Com Accounts</option>
                  <option value="B.A English">B.A English</option>
                  <option value="BCA">BCA (Vocational)</option>
                </select>
              </div>

              {/* Marks Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">12th Grade Percentage (%)</label>
                <input 
                  type="number" 
                  name="percentage"
                  min="0"
                  max="100"
                  required
                  placeholder="e.g. 85.5"
                  value={formData.percentage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg mt-4"
              >
                Submit Application
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                <AlertCircle className="inline h-3 w-3 mr-1" />
                By clicking submit, you agree to the college terms and privacy policy.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admissions;