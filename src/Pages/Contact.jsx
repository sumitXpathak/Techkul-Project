import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 1. Updated Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const object = {
      // REPLACE THIS WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS
      access_key: "YOUR_ACCESS_KEY_HERE", 
      ...formData
    };

    try {
      // 2. Send Data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });
      
      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-slate-900 pb-16 transition-colors duration-300">
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Admissions Cell</h1>
          <p className="text-blue-200 text-lg">
            Have questions? We are here to help you navigate your journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info (Left Side) */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Admissions Helpline</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 631 222 2222</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Visit Campus</h4>
                  <p className="text-gray-600 dark:text-gray-300">Katari Hill Road, Gaya, Bihar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form (Right Side) */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 transition-colors duration-300">
          
          {/* Success Message */}
          {isSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">We will get back to you at {formData.email} shortly.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Send a Query</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Not sure which course to pick? Ask us!</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question</label>
                  <textarea 
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;