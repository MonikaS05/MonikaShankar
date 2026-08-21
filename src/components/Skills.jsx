import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Database, ShieldAlert, Cpu, Hammer } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-cozy-dark" size={20} />,
      bgColor: 'bg-cozy-lavender/50',
      borderColor: 'border-cozy-accent/70',
      textColor: 'text-cozy-dark',
      skills: [
        { name: 'Java', desc: 'Robust object-oriented architectures & multithreaded backend pipelines.' },
        { name: 'JavaScript', desc: 'Modern web scripting, ES6+, promises, and state frameworks.' },
      ]
    },
    {
      title: 'Frontend Frameworks',
      icon: <Layout className="text-rose-900" size={20} />,
      bgColor: 'bg-rose-100',
      borderColor: 'border-rose-400/80',
      textColor: 'text-rose-900',
      skills: [
        { name: 'React.js', desc: 'SPA structures, context management, hooks, and virtual DOM lifecycles.' },
        { name: 'HTML5 & CSS3', desc: 'Semantic layouts, grids, custom flex layouts, and keyframes.' },
        { name: 'Tailwind CSS', desc: 'Utility-first pipelines, custom theme files, and responsive configurations.' },
      ]
    },
    {
      title: 'Backend Tools',
      icon: <Cpu className="text-amber-900" size={20} />,
      bgColor: 'bg-amber-100',
      borderColor: 'border-amber-400/70',
      textColor: 'text-amber-950',
      skills: [
        { name: 'Node.js', desc: 'Asynchronous runtime architectures for hosting scalable web APIs.' },
        { name: 'Express.js', desc: 'Robust routing configurations and middleware pipelines.' },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-emerald-950" size={20} />,
      bgColor: 'bg-emerald-100',
      borderColor: 'border-emerald-400/70',
      textColor: 'text-emerald-950',
      skills: [
        { name: 'SQL', desc: 'Relational logic, joins, indexes, schema structuring, and normalization.' },
        { name: 'MongoDB', desc: 'Document schemas, JSON structures, indexing, and aggregate lookups.' },
      ]
    },
    {
      title: 'Testing & QA Automation',
      icon: <ShieldAlert className="text-indigo-950" size={20} />,
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-400/70',
      textColor: 'text-indigo-950',
      skills: [
        { name: 'Manual Testing', desc: 'Functional verification, regression suites, edge tests, and bug tracing.' },
        { name: 'Selenium', desc: 'Automation pipelines, web element locations, and wait synchronization.' },
        { name: 'API Testing', desc: 'Verification of JSON requests, REST codes, Postman payloads, and parameters.' },
        { name: 'Test Case Design', desc: 'Writing clear conditions, actions, and expectation matrix sheets.' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Hammer className="text-cozy-dark" size={20} />,
      bgColor: 'bg-cozy-clay/35',
      borderColor: 'border-cozy-clay/80',
      textColor: 'text-cozy-dark',
      skills: [
        { name: 'Git & GitHub', desc: 'Version trees, commits, hooks, conflicts resolving, and pull requests.' },
        { name: 'Figma', desc: 'UI mockups, design structures, assets exporting, and sizing specs.' },
        { name: 'Netlify', desc: 'Production building, continuous hooks, and serverless forms.' },
        { name: 'AppSheet', desc: 'No-code application development platform for building custom business solutions.' },
      ]
    }
  ];

  const getRandomRotation = (index) => {
    const rotations = [-3, -2, -1.5, 1.5, 2, 3, 4, -4];
    return rotations[index % rotations.length];
  };

  const [activeHover, setActiveHover] = useState(null);

  return (
    <section id="skills" className="py-24 bg-transparent relative dots-bg overflow-hidden select-none">
      
      {/* Glow Blur Spot */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cozy-pink/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 text-cozy-accent/15 select-none pointer-events-none hidden md:block">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            My Toolkit
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">Tactile stickers. Hover to lift the sticker and read technology specs.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-[#FCFAF6] border-2 border-cozy-dark rounded-3xl p-6.5 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col gap-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3.5 border-b-2 border-cozy-lavender/30">
                <div className={`p-2.5 rounded-xl ${category.bgColor} border-2 border-cozy-dark shadow-sm`}>
                  {category.icon}
                </div>
                <h3 className="font-serif font-extrabold text-lg text-cozy-dark">{category.title}</h3>
              </div>

              {/* Skills Stickers Sheet */}
              <div className="flex flex-wrap gap-3.5">
                {category.skills.map((skill, skillIndex) => {
                  const stickerId = `${catIndex}-${skillIndex}`;
                  const rot = getRandomRotation(skillIndex + catIndex * 3);
                  
                  return (
                    <div key={skill.name} className="relative">
                      <motion.button
                        onMouseEnter={() => setActiveHover(stickerId)}
                        onMouseLeave={() => setActiveHover(null)}
                        whileHover={{ 
                          scale: 1.12, 
                          rotate: 0,
                          y: -6,
                          transition: { type: 'spring', stiffness: 450, damping: 10 }
                        }}
                        initial={{ rotate: rot }}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-bold ${category.textColor} border-2 border-dashed ${category.borderColor} ${category.bgColor} cursor-help transition-all shadow-sm flex items-center gap-1.5`}
                      >
                        <span>{skill.name}</span>
                      </motion.button>

                      {/* Tooltip Description Card */}
                      <AnimatePresence>
                        {activeHover === stickerId && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 12 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-52 bg-cozy-dark text-[#FCFAF6] text-[11px] p-3 rounded-2xl shadow-cozy-lg z-30 pointer-events-none text-center border border-[#FCFAF6]/20 font-medium"
                          >
                            <p className="font-extrabold mb-1 border-b border-[#FCFAF6]/10 pb-1">{skill.name}</p>
                            <p className="opacity-95 leading-normal">{skill.desc}</p>
                            {/* Triangle Indicator */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-5 border-l-transparent border-r-5 border-r-transparent border-t-5 border-t-cozy-dark" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
