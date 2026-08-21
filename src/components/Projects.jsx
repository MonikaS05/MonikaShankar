import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, HeartPulse, Recycle, CheckCircle2, HardHat } from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// LEFT PAGE SUB-COMPONENT: Icon, Title, Abstract, Problem & Solution
function LeftPage({ project, activeIdx }) {
  return (
    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-cozy-notebook-ring/30 bg-[#FCFAF6] flex flex-col justify-between h-full relative">
      {/* Center spine depth gradient shadow */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/[0.04] to-transparent pointer-events-none z-20" />
      
      {/* Paper vertical margin red line */}
      <div className="absolute left-10 top-0 bottom-0 border-r border-red-400/30 pointer-events-none" />

      <div>
        {/* Project Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2.5 bg-white rounded-2xl shadow-cozy-sm border border-cozy-dark/10">
            {project.icon}
          </div>
          <div>
            <span className="text-[10px] font-bold text-cozy-accent tracking-wider uppercase">Project Workspace 0{activeIdx + 1}</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-cozy-dark leading-tight mt-0.5">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description abstract */}
        <div className="relative text-sm text-cozy-text leading-relaxed mb-6 font-sans">
          <p className="font-semibold text-cozy-dark/95 mb-2">Abstract:</p>
          <p>{project.desc}</p>
        </div>

        {/* Problem & Solution Card stack */}
        <div className="space-y-4">
          <div className="p-4 bg-rose-50/70 border border-rose-100 rounded-xl">
            <span className="text-[9px] font-extrabold text-rose-700 tracking-wider uppercase block mb-1">📌 The Problem Statement</span>
            <p className="text-xs text-cozy-text/90 leading-relaxed font-sans">{project.problem}</p>
          </div>
          <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-xl">
            <span className="text-[9px] font-extrabold text-emerald-700 tracking-wider uppercase block mb-1">✨ The Technical Solution</span>
            <p className="text-xs text-cozy-text/90 leading-relaxed font-sans">{project.solution}</p>
          </div>
        </div>
      </div>

      {/* Footer Page Counter */}
      <div className="mt-8 pt-4 border-t border-dashed border-cozy-lavender/40 text-[10px] font-mono text-cozy-gray">
        0{activeIdx * 2 + 1} / Notebook Pages
      </div>
    </div>
  );
}

// RIGHT PAGE SUB-COMPONENT: Tech Tags, Verification & Features, Actions
function RightPage({ project, activeIdx, GithubIcon }) {
  return (
    <div className="p-8 md:p-10 bg-[#FCFAF6] paper-line flex flex-col justify-between h-full relative">
      {/* Center spine depth gradient shadow */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/[0.04] to-transparent pointer-events-none z-20" />

      <div>
        {/* Build Stack */}
        <div className="mb-6">
          <span className="text-[10px] font-bold text-cozy-accent tracking-wider uppercase block mb-3">🛠️ Build Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span 
                key={t}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${project.badgeColor}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Card */}
        <div className="bg-white/90 border border-cozy-notebook-ring/30 p-5 rounded-2xl shadow-cozy-sm mb-6">
          <h4 className="text-xs font-bold text-cozy-dark uppercase tracking-wider mb-3 flex items-center gap-1.5 border-b border-cozy-lavender/30 pb-2">
            <ShieldCheck size={14} className="text-cozy-accent" />
            <span>Verification & Features</span>
          </h4>
          <ul className="space-y-2.5 text-xs text-cozy-gray">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-cozy-accent font-bold mt-0.5">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Actions and Metadata */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-cozy-cream border-2 border-cozy-dark/15 text-cozy-dark font-semibold py-2.5 px-4 rounded-xl text-xs shadow-cozy hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <GithubIcon size={14} />
              <span>Source Code</span>
            </a>
          )}
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-cozy-accent hover:bg-cozy-accent/90 text-white font-semibold py-2.5 px-4 rounded-xl text-xs shadow-handdrawn hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-cozy-gray pt-2 border-t border-dashed border-cozy-lavender/40">
          <span>monika_shankar_be_cse</span>
          <span>0{activeIdx * 2 + 2} / Notebook Pages</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1: prev, 1: next
  const [isFlipping, setIsFlipping] = useState(false);
  const [oldIdx, setOldIdx] = useState(0);

  const projects = [
    {
      title: 'FitMe: AI-Based Fabric Estimation & Trial Room',
      icon: <HeartPulse className="text-cozy-accent" size={32} />,
      desc: 'An AI-powered fashion tech platform that estimates fabric requirements using body measurements and provides a virtual trial room experience with smart outfit suggestions.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vertex AI API', 'MediaPipe'],
      problem: 'Online shopping for custom tailoring suffers from inaccurate size estimations, leading to high returns, fabric waste, and customer dissatisfaction.',
      solution: 'Developed a computer-vision app that captures body landmarks to calculate exact fabric volume/requirements and overlays clothing items on users for a virtual try-on.',
      features: [
        'AI-based body landmark & measurement capture via MediaPipe.',
        'Intelligent fabric yardage estimation using Vertex AI API.',
        'Virtual trial room try-on using browser-based overlays.',
        'Node.js & Express.js REST API with MongoDB database schemas.'
      ],
      github: '#',
      demo: 'https://fit-me-1wqp.vercel.app',
      tabColor: 'bg-rose-200 border-rose-300 text-rose-800',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
      title: 'Better Planet: Plastic Consumption Platform',
      icon: <Recycle className="text-cozy-green" size={32} />,
      desc: 'A green-tech community platform that gamifies plastic waste reductions, manages localized waste-collection events, and displays sustainability impact metrics.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google Maps API', 'Chart.js'],
      problem: 'Difficulty tracking daily plastic footprints and lack of a structured, rewarding way for local communities to organize cleanup activities.',
      solution: 'Developed a dashboard to log waste, integrate Google Maps for waste drop-off locations, and use Chart.js to visualize community-wide ecological savings.',
      features: [
        'Daily plastic usage log & carbon footprint calculators.',
        'Interactive map displaying municipal collection bins.',
        'Community forum for hosting clean-up challenges.',
        'Gamified reward points redeemable at eco-partner stores.'
      ],
      github: '#',
      demo: '#',
      tabColor: 'bg-emerald-200 border-emerald-300 text-emerald-800',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: 'PetHub: Pet Care & Veterinary Management',
      icon: <CheckCircle2 className="text-[#DA70D6]" size={32} />,
      desc: 'A full-stack clinic and boarding portal that lets pet owners book veterinary consultations, track medical logs, and manage pet profiles.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'JUnit', 'Manual Testing'],
      problem: 'Pet clinics often use disjointed software for appointments, medical charts, and billing, resulting in communication gaps and scheduling issues.',
      solution: 'Unified operations under a robust Spring Boot REST backend and verified application integrity with rigorous Manual Testing and system-level validation.',
      features: [
        'Automated slot booking for veterinary consultations.',
        'Electronic Health Record (EHR) pipelines for pets.',
        'System testing: designed test cases verifying booking logic.',
        'Interactive owner & doctor dashboard pipelines.'
      ],
      github: '#',
      demo: '#',
      tabColor: 'bg-purple-200 border-purple-300 text-purple-800',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      title: 'VendorLink: Blue-Collar & Street Vendor Directory',
      icon: <HardHat className="text-[#DEB89C]" size={32} />,
      desc: 'A community booking platform built to connect local street vendors and blue-collar service workers directly with customers in their vicinity.',
      tech: ['React.js', 'Node.js', 'Express.js', 'SQL', 'Git', 'Bootstrap'],
      problem: 'Micro-vendors and independent daily wage laborers lack online discovery, leaving them dependent on intermediaries or physical foot-traffic.',
      solution: 'Developed a location-based directory that publishes service cards, prices, and contact lines, enabling friction-free local bookings.',
      features: [
        'Location-based search filter for local services.',
        'Worker registration portal with skill catalog lists.',
        'Direct customer-to-vendor calling and messaging lines.',
        'Customer review, rating, and feedback modules.'
      ],
      github: '#',
      demo: '#',
      tabColor: 'bg-amber-200 border-amber-300 text-amber-800',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
    }
  ];

  const flipTo = (newIdx) => {
    if (isFlipping || newIdx === activeIdx) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setOldIdx(activeIdx);
    setActiveIdx(newIdx);
    setIsFlipping(true);
  };

  const handleNext = () => {
    flipTo((activeIdx + 1) % projects.length);
  };

  const handlePrev = () => {
    flipTo((activeIdx - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  // Left page flips only when going Prev (dir < 0)
  const leftPageVariants = {
    enter: (dir) => ({
      rotateY: dir < 0 ? -120 : 0,
      opacity: dir < 0 ? 0 : 1,
      transformOrigin: "right center"
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir) => ({
      rotateY: dir < 0 ? 120 : 0,
      opacity: dir < 0 ? 0 : 1,
      transformOrigin: "right center",
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  // Right page flips only when going Next (dir > 0)
  const rightPageVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 120 : 0,
      opacity: dir > 0 ? 0 : 1,
      transformOrigin: "left center"
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -120 : 0,
      opacity: dir > 0 ? 0 : 1,
      transformOrigin: "left center",
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  return (
    <section id="projects" className="py-20 bg-transparent relative dots-bg overflow-hidden select-none">
      {/* Background illustrations */}
      <div className="absolute top-10 left-10 text-cozy-accent/10 pointer-events-none hidden md:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="40" strokeDasharray="4,4" />
          <path d="M50 10v80M10 50h80" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            Things I've Built
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">Browse my workspace notebook. Flip pages to see different projects.</p>
        </div>

        {/* Notebook Outer Container */}
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-stretch book-perspective">
          
          {/* Side Tabs/Dividers (Sticking out of the book frame on the right) */}
          <div className="hidden lg:flex flex-col gap-4 absolute top-12 right-[-45px] z-0">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => flipTo(idx)}
                disabled={isFlipping}
                className={`w-12 py-3.5 pl-3 rounded-r-xl border-y border-r border-cozy-dark/15 text-[10px] font-bold tracking-wider uppercase writing-mode-vertical text-left transition-all duration-300 shadow-sm cursor-pointer hover:pl-4 ${
                  activeIdx === idx 
                    ? `${proj.tabColor} font-extrabold translate-x-1 shadow-md border-l-0` 
                    : 'bg-white hover:bg-cozy-cream text-cozy-gray'
                }`}
              >
                Proj_0{idx + 1}
              </button>
            ))}
          </div>

          {/* Book Wrapper with Spine */}
          <div className="w-full bg-[#E5DBCC] p-3 md:p-4 rounded-3xl border-2 border-cozy-dark/20 book-shadow flex relative z-10 min-h-[560px]" style={{ perspective: '2000px' }}>
            
            {/* The Book Content Container */}
            <div className="w-full bg-[#FCFAF6] rounded-2xl overflow-hidden relative min-h-[520px]" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Notebook Spine Rings in the center (visible on desktop) */}
              <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex-col justify-around py-6 z-50 pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {/* Metal binder ring */}
                    <div className="w-9 h-5 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 rounded-full border border-gray-600/30 shadow-md transform -rotate-6 -mx-4.5" />
                  </div>
                ))}
              </div>

              {/* RENDER MODE STATE MACHINE */}
              {!isFlipping ? (
                // STATIC STATE: Standard Flat Layout
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full rounded-2xl overflow-hidden">
                  <LeftPage project={projects[activeIdx]} activeIdx={activeIdx} />
                  <RightPage project={projects[activeIdx]} activeIdx={activeIdx} GithubIcon={GithubIcon} />
                </div>
              ) : (
                // 3D PAGE FLIP STATE: Active Sheet Simulation
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative rounded-2xl overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Underlay Left Page (New Content) */}
                  <div className="w-full h-full">
                    <LeftPage project={projects[activeIdx]} activeIdx={activeIdx} />
                  </div>
                  {/* Underlay Right Page (New Content) */}
                  <div className="w-full h-full">
                    <RightPage project={projects[activeIdx]} activeIdx={activeIdx} GithubIcon={GithubIcon} />
                  </div>

                  {/* ACTIVE 3D FOLDING SHEET */}
                  <motion.div
                    key={`${oldIdx}_to_${activeIdx}`}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: direction > 0 ? -180 : 180 }}
                    transition={{ duration: 0.85, ease: [0.25, 1, 0.36, 1] }}
                    onAnimationComplete={() => setIsFlipping(false)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: direction > 0 ? '50%' : '0%',
                      width: '50%',
                      height: '100%',
                      transformOrigin: direction > 0 ? 'left center' : 'right center',
                      transformStyle: 'preserve-3d',
                      zIndex: 40,
                      pointerEvents: 'none'
                    }}
                  >
                    {/* FRONT SIDE OF SHEET */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        backfaceVisibility: 'hidden', 
                        transformStyle: 'preserve-3d',
                        zIndex: 2
                      }}
                    >
                      {direction > 0 ? (
                        <RightPage project={projects[oldIdx]} activeIdx={oldIdx} GithubIcon={GithubIcon} />
                      ) : (
                        <LeftPage project={projects[oldIdx]} activeIdx={oldIdx} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none" />
                    </div>

                    {/* BACK SIDE OF SHEET */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        backfaceVisibility: 'hidden', 
                        transformStyle: 'preserve-3d',
                        transform: direction > 0 ? 'rotateY(180deg)' : 'rotateY(-180deg)',
                        zIndex: 1
                      }}
                    >
                      {direction > 0 ? (
                        <LeftPage project={projects[activeIdx]} activeIdx={activeIdx} />
                      ) : (
                        <RightPage project={projects[activeIdx]} activeIdx={activeIdx} GithubIcon={GithubIcon} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-black/10 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Notebook Pagination Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={isFlipping}
            className="flex items-center justify-center gap-2 bg-white hover:bg-cozy-cream border-2 border-cozy-dark/10 p-3 rounded-full text-cozy-dark shadow-cozy hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50"
            aria-label="Previous project"
          >
            <ArrowLeft size={18} />
          </button>
          
          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => flipTo(idx)}
                disabled={isFlipping}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === idx ? 'w-6 bg-cozy-accent' : 'w-2.5 bg-cozy-lavender border border-cozy-dark/10'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isFlipping}
            className="flex items-center justify-center gap-2 bg-white hover:bg-cozy-cream border-2 border-cozy-dark/10 p-3 rounded-full text-cozy-dark shadow-cozy hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50"
            aria-label="Next project"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
