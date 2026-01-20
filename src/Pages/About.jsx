import React from 'react';
import { Link } from 'react-router-dom';
import { 
  History, Target, Eye, Award, User, BookOpen, Star, 
  TrendingUp, Users, Calendar, ChevronRight, Globe, 
  ShieldCheck, Zap, Microscope 
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1964", title: "Foundational Vision", desc: "Inaugurated by Dr. Anugrah Narayan Sinha to pioneer higher education in Magadh." },
    { year: "1980", title: "Constituent Milestone", desc: "Integrated as a premier constituent unit of Magadh University, expanding academic autonomy." },
    { year: "2010", title: "National Recognition", desc: "Awarded NAAC 'A' Grade, cementing our status as a center of regional excellence." },
    { year: "2026", title: "Global Horizon", desc: "Launching international research collaborations and AI-integrated pedagogy." }
  ];

  const corePillars = [
    { 
      icon: <Microscope className="h-7 w-7 text-indigo-500" />, 
      title: "Research Intensive", 
      desc: "Pushing boundaries in Science and Humanities through dedicated research wings." 
    },
    { 
      icon: <Globe className="h-7 w-7 text-blue-500" />, 
      title: "Global Citizenship", 
      desc: "Nurturing leaders who are culturally competent and globally competitive." 
    },
    { 
      icon: <ShieldCheck className="h-7 w-7 text-emerald-500" />, 
      title: "Ethical Leadership", 
      desc: "Rooting academic success in integrity and social responsibility." 
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-200 font-sans selection:bg-blue-100 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
             <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Est. 1964</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-8 leading-tight">
            Shaping the <span className="italic text-blue-300">Intellect</span> of Tomorrow.
          </h2>
          
          <p className="text-slate-200 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering students with knowledge, character, and integrity. Join a legacy that stands at the intersection of tradition and transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1">
              Explore Courses
            </button>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg transform hover:-translate-y-1">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE POWER IN NUMBERS */}
      <section className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-none grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 divide-x divide-slate-100 dark:divide-slate-700 border border-transparent dark:border-slate-700 transition-colors duration-300">
          {[
            { label: "Faculty Experts", val: "120+" },
            { label: "Research Papers", val: "450+" },
            { label: "Alumni Network", val: "25k" },
            { label: "Campus Acres", val: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl font-serif font-bold text-blue-900 dark:text-blue-400 mb-1">{stat.val}</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STRATEGIC PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {corePillars.map((pillar, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-slate-800 transition-all duration-500">
              <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE JOURNEY (Timeline) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">Our Timeline</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">Six decades of relentless pursuit of knowledge.</p>
            </div>
            <Link to="/archives" className="text-blue-600 dark:text-blue-400 font-bold flex items-center hover:gap-2 transition-all">
              View Full Archive <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative pt-8 border-t-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="absolute -top-3 left-0 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors px-3 py-1 text-xs font-bold rounded">
                  {m.year}
                </div>
                <h4 className="text-xl font-bold mb-3 mt-4 text-slate-900 dark:text-white">{m.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP STATEMENT */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full blur-xl opacity-50"></div>
            <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" 
            alt="Principal" 
            className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-slate-800 shadow-lg"
            />
        </div>
        <blockquote className="text-3xl md:text-4xl font-serif italic text-slate-800 dark:text-slate-200 mb-8 leading-tight">
          "Our goal is not just to confer degrees, but to ignite a curiosity that remains 
          insatiable throughout a student's life."
        </blockquote>
        <cite className="not-italic">
          <span className="block text-xl font-bold text-slate-900 dark:text-white">Dr. R.K. Sharma</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium tracking-widest uppercase text-sm">Principal, AM College</span>
        </cite>
      </section>

    </div>
  );
};

export default About;