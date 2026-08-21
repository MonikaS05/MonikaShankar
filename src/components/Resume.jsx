import { FileDown, FileSpreadsheet, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-transparent relative overflow-hidden select-none">
      
      {/* Background circles */}
      <div className="absolute top-1/4 right-[25%] text-cozy-accent/15 hidden md:block animate-pulse duration-[5000ms]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-[#FCFAF6] border-3 border-cozy-dark rounded-3xl p-8 md:p-12 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          
          {/* Top border decorative ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cozy-pink via-cozy-lavender to-cozy-yellow opacity-75" />

          {/* Decorative Sparkle */}
          <div className="absolute top-6 right-6 text-cozy-yellow animate-pulse">
            <Sparkles size={24} />
          </div>

          {/* Left Block: Description & CTA */}
          <div className="flex-1 flex flex-col gap-4.5 text-center md:text-left">
            <span className="text-[10px] font-extrabold text-cozy-accent tracking-wider uppercase">Full Portfolio Summary</span>
            <h2 className="text-3xl font-serif font-extrabold text-cozy-dark">
              Want the full story?
            </h2>
            <p className="text-sm md:text-base text-cozy-gray leading-relaxed max-w-md font-medium">
              Take a closer look at my technical skills, academic projects, educational credentials, and internship experience in a standard A4 format.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              <motion.a
                href="/Monika_Testing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-cozy-dark text-white font-bold px-6 py-3.5 rounded-xl shadow-handdrawn hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all text-sm cursor-pointer"
              >
                <FileSpreadsheet size={16} />
                <span>View Resume</span>
              </motion.a>
              
              <motion.a
                href="/Monika_Testing.pdf"
                download="Monika_Shankar_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white hover:bg-cozy-cream border-2 border-cozy-dark text-cozy-dark font-bold px-6 py-3.5 rounded-xl shadow-cozy transition-all text-sm"
              >
                <FileDown size={16} />
                <span>Download PDF</span>
              </motion.a>
            </div>
          </div>

          {/* Right Block: Interactive Tilted A4 Document Mockup */}
          <div className="flex-shrink-0 relative hidden sm:block">
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.08, y: -6 }}
              className="w-52 h-68 bg-white border-2 border-cozy-dark rounded-xl shadow-cozy-lg p-5 rotate-[-5deg] transition-all duration-300 flex flex-col justify-between cursor-pointer relative group"
            >
              {/* Paper header representation */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between border-b-2 border-cozy-lavender/30 pb-2">
                  {/* Name banner representation */}
                  <div className="w-20 h-3 bg-cozy-dark/80 rounded" />
                  <div className="w-5 h-5 rounded-full bg-cozy-accent/40" />
                </div>
                
                {/* Rule lines mockups */}
                <div className="space-y-2 mt-2">
                  <div className="w-full h-1.5 bg-cozy-gray/20 rounded" />
                  <div className="w-5/6 h-1.5 bg-cozy-gray/20 rounded" />
                  <div className="w-11/12 h-1.5 bg-cozy-gray/20 rounded" />
                  <div className="w-4/5 h-1.5 bg-cozy-gray/20 rounded" />
                </div>
                
                <div className="space-y-2 mt-3.5">
                  <div className="w-full h-1.5 bg-cozy-gray/20 rounded" />
                  <div className="w-3/4 h-1.5 bg-cozy-gray/20 rounded" />
                  <div className="w-5/6 h-1.5 bg-cozy-gray/20 rounded" />
                </div>
              </div>

              {/* Paper footer representation */}
              <div className="flex items-center justify-between border-t border-cozy-lavender/30 pt-2">
                <div className="w-12 h-2 bg-cozy-accent/40 rounded" />
                <div className="w-8 h-2 bg-cozy-dark/30 rounded" />
              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
