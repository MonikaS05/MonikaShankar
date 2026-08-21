import { useRef, useState, useEffect } from 'react';
import { GraduationCap, Heart, Rocket, Coffee, Palette, Compass, Zap, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
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
  const funFacts = [
    { icon: <Palette size={18} className="text-[#C71585]" />, text: "Runner-up in collage-making, loves crafting visual layouts." },
    { icon: <Compass size={18} className="text-[#4682B4]" />, text: "Mysore native, passionate about heritage architectural sites." },
    { icon: <Zap size={18} className="text-[#FFA500]" />, text: "Ranked 2nd in Karnataka State Mathematics Talent Search." }
  ];

  return (
    <section ref={sectionRef} id="about" className="pt-8 pb-24 bg-transparent relative dots-bg overflow-hidden">
      {/* Dynamic colorful blur spot */}
      <div className="absolute top-1/3 left-[-100px] w-80 h-80 bg-cozy-lavender/35 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Decorative math symbol doodles */}
      <div className="absolute top-16 left-[8%] text-cozy-accent/15 rotate-12 select-none pointer-events-none text-3xl font-handwritten hidden md:block">
        f(x) = ∫ x² dx
      </div>
      <div className="absolute bottom-20 right-[6%] text-cozy-pink/20 -rotate-12 select-none pointer-events-none text-4xl font-handwritten hidden md:block">
        ∑ n = n(n+1)/2
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            A Little About Me
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">Extracts from my developer journal</p>
        </div>

        {/* Parent Container with Stacked Pages (Avoiding overflow-hidden clipping) */}
        <div className="relative">
          {/* Stacked Pages thickness underneath to simulate a real open book stack */}
          <div className="absolute inset-0 bg-[#FAF8F5] border-3 border-cozy-dark rounded-3xl rotate-[0.6deg] translate-y-1.5 translate-x-1 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[#F5F2EC] border-3 border-cozy-dark rounded-3xl rotate-[-0.6deg] translate-y-0.5 translate-x-[-1px] z-0 pointer-events-none" />



          {/* Notebook Frame Container */}
          <div className="relative bg-white border-3 border-cozy-dark rounded-3xl shadow-cozy-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[540px] z-10">
          
          {/* Notebook Center Spiral Binding (Realistic 3D look) */}
          <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex-col justify-around py-6 z-30 pointer-events-none">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="flex items-center justify-center relative">
                {/* Silver Metal Coil */}
                <div className="w-10 h-6 bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 rounded-full border border-gray-600/35 shadow-md transform -rotate-12" />
                {/* Spiral Holes on pages */}
                <div className="absolute left-[-20px] w-2.5 h-2.5 bg-cozy-dark/20 rounded-full" />
                <div className="absolute right-[-20px] w-2.5 h-2.5 bg-cozy-dark/20 rounded-full" />
              </div>
            ))}
          </div>

          {/* LEFT PAGE: Ruled Bio & Fun Facts */}
          <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r border-cozy-notebook-ring/30 flex flex-col justify-between relative bg-[#FCFAF6] paper-line md:rounded-l-3xl rounded-r-[30px_100%]">
            {/* Center spine depth gradient shadow */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/[0.04] to-transparent pointer-events-none z-20" />
            
            {/* Paper vertical margins (Red Line) */}
            <div className="absolute left-10 top-0 bottom-0 border-r border-red-400/30 pointer-events-none" />

            <div className="relative pl-6">
              {/* Notebook Title Sticker */}
              <div className="absolute top-[-44px] right-[-20px] rotate-6 bg-cozy-yellow border-2 border-cozy-dark text-cozy-dark text-[10px] font-extrabold px-3 py-1 shadow-sm rounded-lg flex items-center gap-1">
                <Sparkles size={10} />
                <span>journal_log_2026.txt</span>
              </div>
              
              <h3 className="text-2xl font-serif font-extrabold text-cozy-dark mb-6">Behind the pixels ♡</h3>
              
              <div className="text-cozy-text leading-relaxed space-y-2.5 font-sans text-sm md:text-base font-semibold">
                <p>Curious about almost everything.</p>
                <p>Always collecting ideas.</p>
                <p>Usually building something.</p>
                <p>Occasionally wondering why the code worked yesterday.</p>
                
                <div className="pt-4 mt-4 border-t border-dashed border-cozy-lavender/30">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-cozy-accent tracking-wider block mb-1">Current mission:</span>
                  <p className="text-cozy-dark font-extrabold font-serif text-sm md:text-base">
                    Build things I'm proud of & keep getting better. ✦
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Facts area */}
            <div className="mt-8 pt-6 border-t border-dashed border-cozy-lavender/60 relative pl-6">
              <h4 className="font-serif font-bold text-cozy-accent text-base mb-4">A Few Highlights:</h4>
              <ul className="space-y-3">
                {funFacts.map((fact, index) => (
                  <motion.li 
                    whileHover={{ x: 6 }}
                    key={index} 
                    className="flex items-start gap-3 text-xs md:text-sm text-cozy-gray font-medium"
                  >
                    <span className="mt-0.5 bg-white p-1 rounded-md border border-cozy-lavender/50 shadow-sm">{fact.icon}</span>
                    <span className="leading-tight">{fact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT PAGE: Structured Colored Notes (Notebook Rule) */}
          <div className="p-8 md:p-12 bg-[#FAF8F4] relative paper-line flex flex-col justify-between overflow-hidden md:rounded-r-3xl rounded-l-[30px_100%]">
            {/* Center spine depth gradient shadow */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/[0.04] to-transparent pointer-events-none z-20" />
            
            {/* Paper vertical margins (Red Line) */}
            <div className="absolute left-10 top-0 bottom-0 border-r border-red-400/30 pointer-events-none" />

            <div className="space-y-6 pl-6 relative z-10">
              
              {/* Note 1: Education */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                className="bg-white border-2 border-cozy-dark p-4.5 rounded-2xl shadow-cozy flex gap-4 relative rotate-[-1deg]"
              >
                <div className="p-2.5 bg-cozy-lavender text-cozy-dark rounded-xl h-fit border border-cozy-dark/10">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-cozy-accent tracking-wider uppercase">Education</span>
                  <h4 className="text-sm md:text-base font-bold text-cozy-dark">B.E. Computer Science & Eng.</h4>
                  <p className="text-xs text-cozy-gray font-semibold">Mysore College of Engineering & Management</p>
                  <p className="text-xs font-bold text-cozy-accent mt-0.5">CGPA: 9.07 / 10 (2022 — 2026)</p>
                </div>
              </motion.div>

              {/* Note 2: Interests */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="bg-white border-2 border-cozy-dark p-4.5 rounded-2xl shadow-cozy flex gap-4 relative rotate-[0.5deg]"
              >
                <div className="p-2.5 bg-cozy-pink text-cozy-dark rounded-xl h-fit border border-cozy-dark/10">
                  <Heart size={22} />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-rose-700 tracking-wider uppercase">Core Interests</span>
                  <h4 className="text-sm md:text-base font-bold text-cozy-dark">Tech Focus Areas</h4>
                  <p className="text-xs text-cozy-gray font-semibold">Web Applications, Automation & Manual Testing, Databases (SQL/Mongo), Rest API Verification, AI Integrations</p>
                </div>
              </motion.div>

              {/* Note 3: Currently */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="bg-white border-2 border-cozy-dark p-4.5 rounded-2xl shadow-cozy flex gap-4 relative rotate-[-0.5deg]"
              >
                <div className="p-2.5 bg-cozy-yellow text-cozy-dark rounded-xl h-fit border border-cozy-dark/10">
                  <Rocket size={22} />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-amber-700 tracking-wider uppercase">Active Work</span>
                  <h4 className="text-sm md:text-base font-bold text-cozy-dark">Focus & Learning</h4>
                  <p className="text-xs text-cozy-gray font-semibold">Strengthening Selenium + Java testing architectures and building robust full-stack apps.</p>
                </div>
              </motion.div>

            </div>

            {/* Doodles at the bottom */}
            <div className="flex justify-between items-center mt-8 pl-6 text-xs text-cozy-gray font-handwritten select-none relative z-10">
              <span className="text-sm font-semibold opacity-75">"Write testable code daily"</span>
              <span className="text-cozy-accent text-xl tracking-widest font-sans font-bold">✦ ✿ ✦</span>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
