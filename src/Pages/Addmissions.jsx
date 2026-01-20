import React, { useState } from 'react';
import { 
  CheckCircle, FileText, Calendar, DollarSign, 
  HelpCircle, ChevronRight, UploadCloud, AlertCircle 
} from 'lucide-react';

const Addmissions = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'Select Course',
    dob: ''
  });

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep((prev) => prev + 1);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-slate-900 pb-16 font-sans transition-colors duration-300">
      
      {/* 1. HERO HEADER */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions 2026-27</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Take the first step towards a bright future. Fill out the application form below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. PROGRESS SIDEBAR */}
        <div className="lg:col-span-1 space-y-6">
          {/* Progress Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-slate-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Application Progress</h3>
            <div className="space-y-0">
              {['Personal Details', 'Academic History', 'Document Upload', 'Fee Payment'].map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeStep === stepNum;
                const isCompleted = activeStep > stepNum;

                return (
                  <div key={index} className="flex items-center relative pb-8 last:pb-0">
                    {/* Vertical Line */}
                    {index < 3 && (
                      <div className={`absolute left-3.5 top-8 w-0.5 h-full ${isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-slate-600'}`}></div>
                    )}
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 font-bold text-sm ${
                      isCompleted ? 'bg-green-500 text-white' : 
                      isActive ? 'bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900' : 'bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : stepNum}
                    </div>
                    <span className={`ml-4 font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : isCompleted ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Card */}
          <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 border border-blue-100 dark:border-slate-700">
            <h4 className="flex items-center font-bold text-blue-900 dark:text-white mb-2">
              <HelpCircle className="w-5 h-5 mr-2" /> Need Help?
            </h4>
            <p className="text-sm text-blue-800 dark:text-gray-300 mb-3">
              Facing issues with the form? Contact our admission cell.
            </p>
            <div className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              📞 +91 631 222 2222 <br/>
              📧 admissions@amcollege.ac.in
            </div>
          </div>
        </div>

        {/* 3. MAIN FORM AREA */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="mr-2 text-blue-600 dark:text-blue-400" /> 
              {activeStep === 1 && "Personal Details"}
              {activeStep === 2 && "Academic History"}
              {activeStep === 3 && "Document Upload"}
              {activeStep === 4 && "Review & Pay"}
            </h2>

            <form onSubmit={handleNext}>
              {/* STEP 1: PERSONAL DETAILS */}
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Course</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    >
                      <option>Select Course</option>
                      <option>B.Sc (Physics)</option>
                      <option>B.Sc (Maths)</option>
                      <option>B.A (English)</option>
                      <option>B.Com (Accounts)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: PLACEHOLDER FOR DEMO */}
              {activeStep > 1 && (
                <div className="text-center py-10">
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg inline-flex items-center mb-4">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Demo Mode: Only Step 1 is functional</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">In a real app, you would continue filling details here.</p>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex justify-end">
                {activeStep > 1 && (
                  <button 
                    type="button"
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="px-6 py-3 mr-4 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-md flex items-center"
                >
                  {activeStep === 4 ? "Submit Application" : "Save & Next"}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Addmissions;