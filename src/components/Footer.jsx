import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-cozy-dark text-white/90 py-10 border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Signoff */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-sm font-medium">
            Made with curiosity, coffee & code ☕
          </p>
          <p className="text-xs text-white/50">
            © 2026 Monika S. All rights reserved.
          </p>
        </div>

        {/* Back to top CTA */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200"
          aria-label="Back to Top"
        >
          <span>Back to top</span>
          <ArrowUp size={12} />
        </button>

      </div>
    </footer>
  );
}
