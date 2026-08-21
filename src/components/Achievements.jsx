import { useState, useRef, useEffect } from 'react';
import { Trophy, Award, Palette, GraduationCap, X, Star } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Achievements() {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chibiOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

  const badges = [
    {
      id: 1,
      title: 'Project Expo Winner',
      meta: 'College Level (Won 2+ times)',
      icon: <Trophy className="text-[#B8860B]" size={36} />,
      colorClass: 'bg-amber-100 border-amber-400 text-amber-950',
      description: 'Awarded 1st place in multiple college-level Project Expos for engineering and software prototypes. Validated our engineering methodologies, user experience, and practical application viability.',
      year: '2024 — 2025'
    },
    {
      id: 2,
      title: 'Innovation Model Award',
      meta: 'MYCEM Model Competition',
      icon: <Award className="text-[#4B0082]" size={36} />,
      colorClass: 'bg-purple-100 border-purple-400 text-purple-950',
      description: 'Awarded the Consolation Prize in the Innovation Project & Model Competition hosted by MYCEM in 2023. Our prototype tackled localized problem statements and presented a feasible full-stack solution.',
      year: '2023'
    },
    {
      id: 3,
      title: 'State Math Search 2nd Rank',
      meta: 'Karnataka State Level',
      icon: <Star className="text-[#1E40AF]" size={36} />,
      colorClass: 'bg-blue-100 border-blue-400 text-blue-950',
      description: 'Secured State 2nd Rank in the Karnataka State Mathematics Talent Search. Highlights strong analytical, logical, and computational foundations, which translate directly to debugging and programming.',
      year: '2019'
    },
    {
      id: 4,
      title: 'Collage Making Runner-up',
      meta: 'Creative Arts Competition',
      icon: <Palette className="text-[#9D174D]" size={36} />,
      colorClass: 'bg-pink-100 border-pink-400 text-pink-950',
      description: 'Awarded Runner-up in the collage-making competition. Showcases a creative side, appreciation for design composition, color harmony, and visual communication, supporting front-end crafting.',
      year: '2023'
    },
    {
      id: 5,
      title: 'Hackathon Prototypes',
      meta: '3+ Hackathons Completed',
      icon: <GraduationCap className="text-[#065F46]" size={36} />,
      colorClass: 'bg-emerald-100 border-emerald-400 text-emerald-950',
      description: 'Successfully participated in 3+ intense hackathons, creating, styling, and coding software prototypes under strict 24-48 hour deadlines.',
      year: '2023 — 2026'
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-24 bg-transparent relative dots-bg overflow-hidden select-none">
      
      {/* Glow Blur Spot */}
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-cozy-yellow/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            Unlocked Achievements
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">Interactive trophy shelf. Click on a badge to inspect details.</p>
        </div>

        {/* Shelf Showcase Layout (Oak Shelf Styling) */}
        <div className="relative py-14 flex flex-col gap-16 bg-[#FDFBF7] border-3 border-cozy-dark rounded-3xl p-6 md:p-12 shadow-cozy-lg">
          
          {/* Cozy Armchair Chibi Sitting on the Achievements shelf card */}
          <motion.div
            style={{ 
              opacity: chibiOpacity,
              scale: isMobile ? 0.65 : 0.9,
              transformOrigin: "bottom right"
            }}
            className="absolute top-[-125px] md:top-[-155px] right-2 md:right-8 z-30 pointer-events-none select-none"
          >
            <img
              src="/chibi_chair.png"
              alt="Chibi software developer sitting in armchair"
              className="w-[150px] md:w-[170px] h-auto"
            />
          </motion.div>
          
          {/* Row 1 (3 Badges) */}
          <div className="relative w-full">
            <div className="flex flex-wrap justify-center gap-14 md:gap-20 pb-3 z-10 relative">
              {badges.slice(0, 3).map((badge, idx) => (
                <motion.button
                  key={badge.id}
                  onClick={() => setSelectedBadge(badge)}
                  whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0], y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`w-30 h-30 rounded-full border-4 border-cozy-dark ${badge.colorClass} shadow-cozy flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group`}
                >
                  <div className="transform group-hover:scale-110 transition-transform">{badge.icon}</div>
                  <span className="text-[9px] font-extrabold text-center mt-1.5 px-3 line-clamp-2 leading-none uppercase">
                    {badge.title}
                  </span>
                  
                  {/* Glowing hover light */}
                  <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-pulse" />
                  </div>
                </motion.button>
              ))}
            </div>
            
            {/* 3D Oak Wooden Shelf Representation */}
            <div className="relative mt-5 w-full">
              {/* Shelf Top */}
              <div className="h-5 bg-gradient-to-r from-[#DDB892] via-[#E6CCB2] to-[#DDB892] rounded-full border-2 border-cozy-dark shadow-sm relative z-20 flex items-center justify-center font-handwritten text-[10px] text-amber-950 font-bold tracking-wider select-none">
                ★ SHELF_01_INNOVATIONS ★
              </div>
              {/* Shelf Underside Shadow */}
              <div className="h-3 bg-[#9C6644] rounded-b-xl border-x-2 border-b-2 border-cozy-dark shadow-md mx-4 mt-[-4px] relative z-10" />
            </div>
          </div>

          {/* Row 2 (2 Badges) */}
          <div className="relative w-full mt-4">
            <div className="flex flex-wrap justify-center gap-14 md:gap-20 pb-3 z-10 relative">
              {badges.slice(3, 5).map((badge, idx) => (
                <motion.button
                  key={badge.id}
                  onClick={() => setSelectedBadge(badge)}
                  whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0], y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`w-30 h-30 rounded-full border-4 border-cozy-dark ${badge.colorClass} shadow-cozy flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group`}
                >
                  <div className="transform group-hover:scale-110 transition-transform">{badge.icon}</div>
                  <span className="text-[9px] font-extrabold text-center mt-1.5 px-3 line-clamp-2 leading-none uppercase">
                    {badge.title}
                  </span>
                  
                  {/* Glowing hover light */}
                  <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-pulse" />
                  </div>
                </motion.button>
              ))}
            </div>
            
            {/* 3D Oak Wooden Shelf Representation */}
            <div className="relative mt-5 w-full">
              {/* Shelf Top */}
              <div className="h-5 bg-gradient-to-r from-[#DDB892] via-[#E6CCB2] to-[#DDB892] rounded-full border-2 border-cozy-dark shadow-sm relative z-20 flex items-center justify-center font-handwritten text-[10px] text-amber-950 font-bold tracking-wider select-none">
                ★ SHELF_02_ACADEMICS ★
              </div>
              {/* Shelf Underside Shadow */}
              <div className="h-3 bg-[#9C6644] rounded-b-xl border-x-2 border-b-2 border-cozy-dark shadow-md mx-4 mt-[-4px] relative z-10" />
            </div>
          </div>

        </div>

        {/* Modal Dialog */}
        <AnimatePresence>
          {selectedBadge && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Modal Backdrop */}
              <motion.button
                onClick={() => setSelectedBadge(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-cozy-dark/60 backdrop-blur-md cursor-default"
                aria-label="Close modal"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-[#FCFAF6] border-3 border-cozy-dark rounded-[32px] p-6 md:p-10 max-w-md w-full shadow-cozy-lg relative z-10 flex flex-col items-center text-center gap-5"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="absolute top-5 right-5 text-cozy-gray hover:text-cozy-accent transition-colors p-1.5 rounded-lg border-2 border-transparent hover:border-cozy-lavender cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                {/* Badge Large Icon */}
                <div className={`w-24 h-24 rounded-full border-4 border-cozy-dark ${selectedBadge.colorClass} shadow-cozy flex items-center justify-center mb-1`}>
                  {selectedBadge.icon}
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-extrabold text-cozy-accent uppercase tracking-wider">
                    {selectedBadge.year}
                  </span>
                  <h3 className="text-2xl font-serif font-extrabold text-cozy-dark leading-tight">
                    {selectedBadge.title}
                  </h3>
                  <p className="text-xs font-bold text-cozy-gray">
                    {selectedBadge.meta}
                  </p>
                </div>

                <p className="text-sm text-cozy-gray leading-relaxed mt-2 pt-5 border-t-2 border-dashed border-cozy-lavender/40 w-full font-medium">
                  {selectedBadge.description}
                </p>

                <button
                  onClick={() => setSelectedBadge(null)}
                  className="mt-3 bg-cozy-dark text-white text-xs font-extrabold py-3.5 px-8 rounded-xl shadow-handdrawn hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                >
                  Done
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
