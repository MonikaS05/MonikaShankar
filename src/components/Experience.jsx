import { useRef, useState, useEffect } from 'react';
import { Briefcase, BookOpen, Trophy, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Experience() {
  const journeyItems = [
    {
      id: 1,
      type: 'internship',
      title: 'Java Full Stack Intern',
      company: 'Pentagon Space, Bengaluru',
      date: 'Feb 2026 — Present',
      icon: <Briefcase size={16} />,
      pinColor: 'bg-rose-400 border-rose-600',
      colorClass: 'bg-rose-50 border-rose-200',
      bullets: [
        'Developed full-stack web modules using Java, HTML, CSS, JavaScript, and SQL.',
        'Assisted in integrating REST APIs and designing relational database tables.',
        'Collaborated on git workflows, developer code reviews, and manual system testing.'
      ]
    },
    {
      id: 2,
      type: 'academic',
      title: 'Mathematics Tutor',
      company: 'NeoGurukul Vidya Sthala',
      date: 'June 2024 — Dec 2025',
      icon: <BookOpen size={16} />,
      pinColor: 'bg-amber-400 border-amber-600',
      colorClass: 'bg-amber-50 border-amber-200',
      bullets: [
        'Taught mathematics to grade school students from Grade 1 to Grade 9.',
        'Simplified abstract mathematical ideas using drawings and hands-on examples.',
        'Managed progress assessments and helped students build confidence in problem-solving.'
      ]
    },
    {
      id: 3,
      type: 'hackathon',
      title: 'Hackathons & Prototypes Developer',
      company: 'Academic Projects & Competitions',
      date: '2023 — 2026',
      icon: <Trophy size={16} />,
      pinColor: 'bg-emerald-400 border-emerald-600',
      colorClass: 'bg-emerald-50 border-emerald-200',
      bullets: [
        'Participated in 3+ hackathons, delivering functional software mockups within 24-48 hours.',
        'Collaborated with designers and engineers to formulate business models & tech architectures.',
        'Built rapid prototypes using React.js, Python, Flask, and Firebase.'
      ]
    }
  ];

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 80%"]
  });

  const [activeMilestone, setActiveMilestone] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active milestone based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveMilestone(1);
    } else if (latest < 0.75) {
      setActiveMilestone(2);
    } else {
      setActiveMilestone(3);
    }
  });

  const [offsets, setOffsets] = useState([12, 280, 560]);

  useEffect(() => {
    const updateOffsets = () => {
      if (timelineRef.current) {
        const containerRect = timelineRef.current.getBoundingClientRect();
        const pins = timelineRef.current.querySelectorAll('.milestone-pin');
        if (pins.length >= 3) {
          const y1 = pins[0].getBoundingClientRect().top - containerRect.top + 12;
          const y2 = pins[1].getBoundingClientRect().top - containerRect.top + 12;
          const y3 = containerRect.height; // End exactly where the dotted line ends
          setOffsets([y1, y2, y3]);
        }
      }
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    const timer = setTimeout(updateOffsets, 300);
    return () => {
      window.removeEventListener('resize', updateOffsets);
      clearTimeout(timer);
    };
  }, []);

  // Y-axis path dynamically mapped to physical pin positions on screen
  const y = useTransform(scrollYProgress, (latest) => {
    if (latest <= 0) return `${offsets[0]}px`;
    if (latest >= 1) return `${offsets[2]}px`;
    if (latest < 0.5) {
      const t = latest / 0.5;
      return `${offsets[0] + t * (offsets[1] - offsets[0])}px`;
    } else {
      const t = (latest - 0.5) / 0.5;
      return `${offsets[1] + t * (offsets[2] - offsets[1])}px`;
    }
  });

  // Straight line vertical parameters (no curve weaving, no tilts)
  const x = 0;
  const rotate = 0;

  // Fade out avatar when timeline leaves/enters screen
  const opacity = useTransform(scrollYProgress, [-0.1, 0, 1, 1.1], [0, 1, 1, 0]);

  return (
    <section id="experience" className="py-24 bg-transparent relative dots-bg overflow-hidden select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/10 w-72 h-72 bg-cozy-lavender/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative stars */}
      <div className="absolute top-20 right-[15%] text-cozy-pink/40 animate-pulse duration-[6000ms] hidden md:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            My Journey
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">A vertical timeline of my experience and growth</p>
        </div>

        {/* Timeline Path */}
        <div ref={timelineRef} className="relative border-l-3 border-dashed border-cozy-dark/20 ml-4 md:ml-36 pl-8 md:pl-12 space-y-12">
          
          {/* Animated Travelling Chibi Face Avatar */}
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              x: x,
              y: y,
              rotate: rotate,
              opacity: opacity,
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 30
            }}
            className="pointer-events-none w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full border-3.5 border-cozy-dark overflow-hidden bg-white shadow-cozy flex items-center justify-center"
          >
            <img 
              src="/chibi_face.png" 
              alt="Chibi winking avatar face milestone indicator" 
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable="false"
            />
          </motion.div>

          {journeyItems.map((item, index) => {
            const isActive = activeMilestone === item.id;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 75, delay: index * 0.15 }}
                className="relative"
              >
                
                {/* Pushpin Point on the timeline */}
                <div className="absolute left-[-45.5px] md:left-[-61.5px] top-2 z-10 flex items-center justify-center milestone-pin">
                  {/* 3D Pushpin visual style - scales up slightly and adds accent ring when active */}
                  <div className={`w-6 h-6 rounded-full ${item.pinColor} border-3 border-cozy-dark shadow-md cursor-default transition-all duration-300 ${
                    isActive ? 'scale-120 ring-4 ring-cozy-accent/40' : 'scale-100'
                  }`} title="Milestone pin" />
                  {/* Visual pin shadow */}
                  <div className="absolute top-5 left-2 w-4 h-1.5 bg-black/15 blur-[1px] rounded-full transform rotate-12" />
                </div>

                {/* Date Card (Desktop left-offset placement, mobile inline) */}
                <div className={`md:absolute md:left-[-190px] md:top-2.5 md:w-36 flex items-center gap-1.5 mb-3 md:mb-0 text-xs md:text-sm font-mono font-extrabold transition-colors duration-300 ${
                  isActive ? 'text-cozy-accent-light' : 'text-cozy-accent'
                }`}>
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>

                {/* Experience Details Card - scales slightly and changes border color when active */}
                <div className={`border-2 rounded-3xl p-6.5 transition-all duration-300 bg-[#FCFAF6] relative ${
                  isActive 
                    ? 'border-cozy-accent shadow-cozy-lg translate-x-1' 
                    : 'border-cozy-dark shadow-cozy hover:shadow-cozy-lg'
                }`}>
                  
                  {/* Page count marker */}
                  <div className="absolute top-4 right-5 text-cozy-gray/40 font-mono text-[10px] font-bold select-none">
                    log_0{item.id}.md
                  </div>

                  <div className="flex flex-col gap-1.5 mb-4">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-cozy-accent">
                      {item.type}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif font-extrabold text-cozy-dark">
                      {item.title}
                    </h3>
                    <h4 className="text-xs md:text-sm font-bold text-cozy-gray">
                      {item.company}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-cozy-text leading-relaxed font-medium">
                        <span className="text-cozy-accent font-extrabold mt-0.5">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
