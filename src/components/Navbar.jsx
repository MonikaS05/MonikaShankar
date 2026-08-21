import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, Code, FolderGit2, Calendar, Trophy, Mail, Laptop, Star } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { 
      name: 'About', 
      id: 'about', 
      icon: <Info size={13} />, 
      activeClass: 'bg-rose-200 text-rose-900 border-rose-400',
      hoverClass: 'hover:bg-rose-100/60 hover:text-rose-900 hover:border-rose-400' 
    },
    { 
      name: 'Skills', 
      id: 'skills', 
      icon: <Code size={13} />, 
      activeClass: 'bg-indigo-200 text-indigo-900 border-indigo-400',
      hoverClass: 'hover:bg-indigo-100/60 hover:text-indigo-900 hover:border-indigo-400'
    },
    { 
      name: 'Projects', 
      id: 'projects', 
      icon: <FolderGit2 size={13} />, 
      activeClass: 'bg-emerald-200 text-emerald-900 border-emerald-400',
      hoverClass: 'hover:bg-emerald-100/60 hover:text-emerald-900 hover:border-emerald-400'
    },
    { 
      name: 'Experience', 
      id: 'experience', 
      icon: <Calendar size={13} />, 
      activeClass: 'bg-amber-200 text-amber-900 border-amber-400',
      hoverClass: 'hover:bg-amber-100/60 hover:text-amber-900 hover:border-amber-400'
    },
    { 
      name: 'Achievements', 
      id: 'achievements', 
      icon: <Trophy size={13} />, 
      activeClass: 'bg-purple-200 text-purple-900 border-purple-400',
      hoverClass: 'hover:bg-purple-100/60 hover:text-purple-900 hover:border-purple-400'
    },
    { 
      name: 'Contact', 
      id: 'contact', 
      icon: <Mail size={13} />, 
      activeClass: 'bg-blue-200 text-blue-900 border-blue-400',
      hoverClass: 'hover:bg-blue-100/60 hover:text-blue-900 hover:border-blue-400'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy logic for active highlights
      const scrollPosition = window.scrollY + 140;
      const sections = ['home', ...navLinks.map(l => l.id)];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Sticky header padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`sticky z-50 w-full px-4 transition-all duration-300 ${
      scrolled ? 'top-3' : 'top-5'
    }`}>
      {/* Sticky Floating Header Capsule */}
      <header className="max-w-5xl mx-auto bg-[#FCFAF6]/95 border-2.5 border-cozy-dark rounded-[24px] md:rounded-full p-2.5 flex flex-col md:flex-row items-center justify-between gap-3 shadow-cozy relative">
        
        {/* Star highlight decoration */}
        <div className="absolute top-[-8px] right-8 text-cozy-yellow select-none animate-pulse hidden md:block">
          <Star size={16} className="fill-cozy-yellow text-cozy-dark stroke-2" />
        </div>

        {/* Left Side: Elevated Profile Name capsule */}
        <motion.button
          onClick={() => handleScrollTo('home')}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-1.5 bg-white border-2 border-cozy-dark rounded-full py-1.5 px-4 shadow-sm hover:shadow-cozy cursor-pointer transition-all duration-200 flex-shrink-0"
        >
          <Laptop size={14} className="text-cozy-accent" />
          <span className="font-serif font-extrabold text-xs text-cozy-dark tracking-wide">
            Monika S
          </span>
          <span className="text-cozy-yellow font-bold text-xs select-none">✦</span>
        </motion.button>

        {/* Right Side: Navigation Buttons (Pill links with scroll spy and responsive wrap) */}
        <nav className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                whileHover={{ y: -1.5 }}
                className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-[10px] md:text-[11px] font-extrabold border-2 transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? `${link.activeClass} border-cozy-dark shadow-[inset_1.5px_2px_0px_rgba(59,31,80,0.25)] scale-98 translate-y-0.5`
                    : `bg-white border-cozy-lavender text-cozy-gray ${link.hoverClass}`
                }`}
              >
                <span className="opacity-95">{link.icon}</span>
                <span>{link.name}</span>
              </motion.button>
            );
          })}
        </nav>

      </header>
    </div>
  );
}
