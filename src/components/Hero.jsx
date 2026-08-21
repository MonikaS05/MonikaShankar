import { ArrowRight, Star, Sparkles, Pin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 40;
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

  const techTags = ['Innovation', 'Creativity', 'Analytic thinking', 'Problem-solving'];

  // Stagger animation triggers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = (delay = 0) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: delay
      }
    }
  });

  return (
    <section id="home" className="relative pt-2 pb-6 overflow-hidden select-none">
      
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Outer Portfolio Frame (Visual desktop box) */}
        <div className="bg-[#E5DBCC]/30 border-3 border-[#D6C7E2] rounded-[36px] p-6 md:p-10 shadow-cozy-lg relative overflow-hidden backdrop-blur-sm bg-[url('/cloud_bg.jpg')] bg-cover bg-center">
          
          {/* Soft white overlay for readability inside the frame */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none rounded-[32px]" />

          {/* Sparkles / Stars floating in the background frame */}
          <div className="absolute top-10 left-1/3 text-cozy-yellow select-none pointer-events-none animate-bounce duration-[4000ms]">
            <Sparkles size={16} />
          </div>
          <div className="absolute bottom-12 right-1/4 text-cozy-yellow select-none pointer-events-none animate-pulse">
            <Star size={14} className="fill-cozy-yellow stroke-cozy-dark" />
          </div>

          {/* Two-Column Grid Content (Rebalanced Column Spans) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10"
          >
            
            {/* COLUMN 1: LEFT INTRO CARD & GOAL NOTE (Spans 5 Columns) */}
            <div className="md:col-span-5 flex flex-col gap-6 relative">
              
              {/* Curved Hanging Pencil on Left Edge of the Intro Card (Sways back and forth) */}
              <motion.div 
                animate={{ rotate: [-2, 3, -2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "top center" }}
                className="absolute top-12 left-[-24px] z-20 pointer-events-none select-none hidden lg:block"
              >
                <svg width="25" height="120" viewBox="0 0 25 120" fill="none">
                  {/* Curved String using Bezier Q path */}
                  <path d="M12.5,0 Q2,40 12.5,80" stroke="#3B1F50" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                  {/* Pencil Clip */}
                  <rect x="11.5" y="78" width="2" height="6" fill="#3B1F50" />
                  {/* Pencil Body */}
                  <path d="M7 84h11v20l-5.5 10L7 104V84z" fill="#F6C875" stroke="#3B1F50" strokeWidth="1.5" />
                  {/* Eraser and Metal ring */}
                  <rect x="7" y="84" width="11" height="2" fill="#DEB89C" stroke="#3B1F50" strokeWidth="1.5" />
                  <rect x="7" y="81" width="11" height="3" fill="#E8DFF5" stroke="#3B1F50" strokeWidth="1.5" />
                  {/* Pencil Tip */}
                  <polygon points="12.5,120 9.5,114 15.5,114" fill="#3B1F50" />
                </svg>
              </motion.div>

              {/* Intro Card */}
              <motion.div 
                variants={cardVariants(0.15)}
                whileHover={{ y: -3 }}
                className="bg-white border-2.5 border-cozy-dark rounded-3xl p-6 md:p-7 shadow-cozy relative z-10 flex flex-col gap-4.5"
              >
                {/* Decorative Paperclip SVG inside Intro Card */}
                <div className="absolute top-3 right-4 transform rotate-12 opacity-80 select-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#70637A" strokeWidth="2.5">
                    <path d="M7 10v6a4 4 0 0 0 8 0v-8a2 2 0 0 0-4 0v7.5a.5.5 0 0 0 1 0V9" />
                  </svg>
                </div>

                {/* Yellow star decoration */}
                <div className="absolute top-[-14px] left-6 text-cozy-yellow filter drop-shadow-[1.5px_2px_0_#3B1F50] select-none">
                  <Star size={30} className="fill-cozy-yellow text-cozy-dark stroke-2" />
                </div>
                
                <div className="pt-3 flex flex-col gap-1">
                  <h1 className="text-2xl md:text-3xl font-serif font-extrabold text-cozy-dark leading-tight">
                    Hi, I'm Monika 👋
                  </h1>
                  <span className="text-[10px] font-sans font-extrabold text-cozy-accent tracking-wider uppercase">
                    COMPUTER SCIENCE ENGINEER
                  </span>
                </div>

                <p className="text-xs md:text-sm text-cozy-gray font-bold leading-relaxed">
                  I enjoy turning ideas into practical digital experiences and building applications that solve real problems.
                </p>

                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 py-1">
                  {techTags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-cozy-lavender/50 border border-cozy-accent/30 text-cozy-dark text-[9.5px] font-bold px-3 py-1 rounded-full shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleScrollToProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cozy-accent to-[#A798C4] hover:from-cozy-accent/95 hover:to-[#A798C4]/95 text-white font-extrabold py-3 px-5 rounded-2xl text-xs shadow-handdrawn hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer w-full mt-1.5"
                >
                  <span>View My Work</span>
                  <ArrowRight size={13} />
                  <Sparkles size={11} className="text-cozy-yellow fill-cozy-yellow" />
                </motion.button>
              </motion.div>

              {/* Peeking Chibi Character looking from behind the cards, placed in the gap on the left side */}
              <div className="absolute top-[270px] left-[-80px] md:left-[-125px] z-20 pointer-events-none select-none hidden lg:block">
                <img 
                  src="/chibi_peeking.png" 
                  alt="Chibi developer character peeking from behind cards" 
                  className="w-[140px] md:w-[195px] h-auto scale-x-[-1]"
                />
              </div>

              {/* Goal Note Sticky Card */}
              <motion.div 
                variants={cardVariants(0.35)}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-cozy-yellow/90 border-2.5 border-cozy-dark p-4 rounded-2xl shadow-cozy rotate-[-3deg] relative z-30 max-w-[220px] self-start cursor-default transition-all duration-300 ml-2"
              >
                {/* Red pushpin */}
                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 text-rose-500">
                  <Pin size={14} className="fill-rose-500 text-cozy-dark stroke-2 transform rotate-45" />
                </div>
                <h3 className="text-[11px] font-mono font-extrabold uppercase text-amber-950 tracking-wider">
                  Goal:
                </h3>
                <p className="text-xs font-bold text-amber-950 leading-snug mt-0.5">
                  Continuous Learning ✨
                </p>

                {/* Decorative sticker floating next to the Goal note */}
                <div className="absolute bottom-[-14px] right-[-32px] bg-cozy-pink border-2 border-cozy-dark text-[8.5px] font-extrabold py-0.5 px-2 rounded-full rotate-[12deg] shadow-sm text-cozy-dark whitespace-nowrap select-none">
                  ✿ study_mode
                </div>
              </motion.div>

            </div>

            {/* COLUMN 2: CENTER ILLUSTRATION - Spans 7 Columns (Widescreen Focal Centerpiece) */}
            <div className="md:col-span-7 flex items-center justify-center relative">
              <motion.div 
                variants={cardVariants(0.22)}
                className="bg-white border-2.5 border-cozy-dark rounded-[36px] p-2.5 shadow-cozy-lg h-[300px] md:h-[400px] lg:h-[460px] w-full overflow-hidden flex items-center justify-center relative group"
              >
                <img 
                  src="/developer_workspace.jpg" 
                  alt="Monika Shankar working at desk developer workspace illustration" 
                  className="w-full h-full object-cover rounded-[24px] select-none pointer-events-none transform group-hover:scale-102 transition-transform duration-700"
                  draggable="false"
                />
                
                {/* Floating sparkles over the illustration */}
                <div className="absolute top-4 right-4 text-cozy-yellow animate-pulse">
                  <Sparkles size={18} />
                </div>

                {/* Pinned animated Speech Bubble saying Hi */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 bg-[#FCFAF6] border-2 border-cozy-dark rounded-2xl py-2.5 px-3.5 shadow-md flex items-center z-20 max-w-[190px] select-none"
                >
                  <span className="font-handwritten text-[10px] md:text-xs font-bold text-cozy-dark leading-tight">
                    "Hi, I'm Monika Shankar, a software developer! 👩‍💻"
                  </span>
                  {/* Speech bubble tail pointer */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-6 border-l-cozy-dark" />
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-b-5 border-b-transparent border-l-5 border-l-[#FCFAF6]" />
                </motion.div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
