import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroVideo({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to force play on mount for strict browsers like Safari
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn('Autoplay prevented by browser:', error);
        // If autoplay entirely fails (e.g., Low Power Mode on iOS), we can choose to auto-skip
        // or wait for the user to hit the "Skip Intro" button. 
        // For a seamless experience, if it fails, we auto-skip.
        handleComplete();
      });
    }
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800); // Wait for fade out animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay={true}
            muted={true}
            playsInline={true}
            onEnded={handleComplete}
            className="w-full h-full object-contain md:object-cover"
          >
            <source src="/video_assets/a2.webm" type="video/webm" />
            <source src="/video_assets/a2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <button
            onClick={handleComplete}
            className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white backdrop-blur-md rounded-lg text-sm transition-all duration-300 font-medium"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
