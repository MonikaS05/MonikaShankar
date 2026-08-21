import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Smile, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const LinkedinIcon = ({ size = 16, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Replace 'YOUR_FORMSPREE_ID' with your unique Formspree form ID (e.g. 'mqkrwqpy')
const FORMSPREE_FORM_ID = 'xkjwenre';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_ID') {
      // Fallback: if they haven't set up the ID yet, run a fallback simulation
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Oops! There was a problem submitting your message. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const contactDetails = [
    { icon: <Mail size={16} />, text: 'monikashanka@gmail.com', href: 'mailto:monikashanka@gmail.com' },
    { icon: <Phone size={16} />, text: '+91 81230 95346', href: 'tel:+918123095346' },
    { icon: <MapPin size={16} />, text: 'Mysore, Karnataka, India', href: '#' },
    { icon: <GithubIcon size={16} />, text: 'github.com/MonikaS05', href: 'https://github.com/MonikaS05', external: true },
    { icon: <LinkedinIcon size={16} />, text: 'linkedin.com/in/monika-shankar-089152283', href: 'https://www.linkedin.com/in/monika-shankar-089152283', external: true }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative dots-bg overflow-hidden select-none">
      
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-cozy-pink/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-cozy-dark relative inline-block">
            Let's Connect
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-cozy-accent/30 rounded-full"></span>
          </h2>
          <p className="text-sm text-cozy-gray mt-3">Drop a message in my mailbox</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Handwritten Note Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FCFAF6] border-2 border-cozy-dark rounded-[32px] p-6 md:p-8 shadow-cozy flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-serif font-extrabold text-cozy-dark flex items-center gap-2">
                Say hello! 💌
              </h3>
              
              <p className="text-sm text-cozy-gray leading-relaxed font-medium">
                I'm currently looking for developer or software testing roles! Whether you have an opportunity, want to collaborate on a full-stack project, or discuss testing methodologies — send a letter or reach out directly.
              </p>

              {/* Direct links list */}
              <div className="space-y-3.5 pt-6 border-t-2 border-dashed border-cozy-lavender/30">
                {contactDetails.map((detail, idx) => (
                  <a
                    key={idx}
                    href={detail.href}
                    target={detail.external ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-xs md:text-sm text-cozy-gray hover:text-cozy-accent font-semibold transition-colors py-1 group"
                  >
                    <div className="p-2.5 bg-white border-2 border-cozy-dark rounded-xl text-cozy-dark group-hover:bg-cozy-accent group-hover:text-white transition-colors duration-200 shadow-sm">
                      {detail.icon}
                    </div>
                    <span className="truncate">{detail.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun signoff */}
            <div className="mt-8 text-xs text-cozy-gray/80 flex items-center gap-1.5 pt-4 border-t border-cozy-lavender/30 select-none font-handwritten">
              <Smile size={16} className="text-cozy-accent" />
              <span>Looking forward to engineering clean solutions!</span>
            </div>
          </motion.div>

          {/* Right Panel: Envelope & sliding letter sheet */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FCFAF6] border-2 border-cozy-dark rounded-[32px] p-6 md:p-8 shadow-cozy-lg flex flex-col justify-center relative overflow-hidden"
          >
            {/* Envelope visual top flap representation */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-cozy-pink via-cozy-lavender to-cozy-yellow border-b border-cozy-dark/10 opacity-70" />

            <h3 className="text-lg font-serif font-extrabold text-cozy-dark mb-6 flex items-center gap-1.5">
              <span>Write a message</span>
              <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-cozy-dark">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-white border-2 border-cozy-dark rounded-xl px-4 py-2.5 text-sm font-medium focus:border-cozy-accent focus:outline-none transition-colors shadow-sm"
                        placeholder="Name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-cozy-dark">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-white border-2 border-cozy-dark rounded-xl px-4 py-2.5 text-sm font-medium focus:border-cozy-accent focus:outline-none transition-colors shadow-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-cozy-dark">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="bg-white border-2 border-cozy-dark rounded-xl px-4 py-2.5 text-sm font-medium focus:border-cozy-accent focus:outline-none transition-colors shadow-sm"
                      placeholder="Opportunity / Project request"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-cozy-dark">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-white border-2 border-cozy-dark rounded-xl px-4 py-2.5 text-sm font-medium focus:border-cozy-accent focus:outline-none transition-colors resize-none shadow-sm"
                      placeholder="Write your note here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-cozy-dark text-white font-bold py-3.5 rounded-xl shadow-handdrawn hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all text-sm cursor-pointer disabled:opacity-60"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send size={14} className={loading ? 'animate-pulse' : ''} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-400 rounded-full flex items-center justify-center text-emerald-700 shadow-sm">
                    <Smile size={32} />
                  </div>
                  <div>
                    <h4 className="font-serif font-extrabold text-xl text-cozy-dark">Letter Dispatched! ✉️</h4>
                    <p className="text-xs text-cozy-gray mt-2 max-w-xs mx-auto font-medium">
                      Thank you! Your handwritten note is sent, and Monika will check her mailbox and reply shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white hover:bg-cozy-cream border-2 border-cozy-dark text-cozy-dark text-xs font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
