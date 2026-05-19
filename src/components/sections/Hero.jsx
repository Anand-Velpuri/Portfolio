import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import MagneticButton from '../ui/MagneticButton';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />

        {/* Profile Silhouette Smudge */}
        <div
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        >
          <img
            src="/profile-silhouette.png"
            alt=""
            className="absolute top-[30%] left-[10%] sm:left-[30%] md:top-[10%] md:left-[45%] w-[150%] sm:w-[100%] md:w-[70vw] lg:w-[50vw] max-w-none h-auto object-contain mix-blend-screen invert opacity-[0.4] md:opacity-[0.65]"
            style={{ 
              filter: 'blur(3px) brightness(1.2)',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
            }}
          />
        </div>

        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-5xl w-full z-10 flex flex-col items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold leading-[0.9] tracking-tighter mb-6">
          <AnimatedText text="Anand" delay={0.1} />
          <AnimatedText text="Velpuri" delay={0.3} className="text-muted-foreground" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
        >
          Applied AI Engineer & Agentic Systems Developer. <br />
          Building production-ready LLM workflows and intelligent architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center gap-6"
        >
          <MagneticButton as="a" href="#projects" className="px-8 py-4 bg-white text-black hover:bg-white/90 text-lg font-semibold">
            View Work
          </MagneticButton>
          <MagneticButton as="a" href="#about" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-lg font-semibold backdrop-blur-sm">
            About Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
