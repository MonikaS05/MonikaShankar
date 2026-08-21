import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CharacterTransition() {
  const containerRef = useRef(null);

  // Track the scroll of the transition container spacer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Track screen size for responsive coordinates
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Left-to-Right straight walk path: starts left (16%), skates to right edge (78%)
  const x = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    isMobile ? ["22%", "72%"] : ["16%", "78%"]
  );

  // 2. Y vertical scroll path (starts lower to avoid card collisions, moves down to about card alignment)
  const y = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ["-70px", "calc(100% - 130px)"]
  );

  // 3. Rotation (subtle skate tilt, winks rightwards)
  const rotate = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    [3, 3]
  );

  // 4. Scale (Enlarged winking skater: 200px active size)
  const scale = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    isMobile ? [0.60, 0.65] : [0.92, 1.0]
  );

  // 5. Dynamic Z-Index: stays above boundaries (45) throughout skate
  const zIndex = 45;

  // 6. Opacity (completely invisible at start to avoid collisions, fades in at 0.12, fades out at 0.80 for card landing)
  const opacity = useTransform(
    scrollYProgress,
    [0.0, 0.12, 0.20, 0.80, 0.90],
    [0, 0, 1, 1, 0]
  );

  return (
    <div className="max-w-5xl mx-auto px-6 relative pointer-events-none select-none">
      {/* Scroll spacer determining the travel path height */}
      <div ref={containerRef} className="h-[12vh] md:h-[16vh] relative w-full" />

      {/* Walking/Skating Chibi Container */}
      <motion.div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          rotate: rotate,
          scale: scale,
          zIndex: zIndex,
          translateX: '-50%',
          opacity: opacity
        }}
        className="pointer-events-none flex flex-col items-center justify-center relative"
      >
        <img
          src="/chibi_skating.png"
          style={{
            transform: 'scaleX(1)', // Natively skates left-to-right (faces right)
            width: '200px',
            height: 'auto'
          }}
          alt="Skating Chibi developer avatar"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
