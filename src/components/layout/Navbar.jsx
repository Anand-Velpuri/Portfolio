import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'HF Hub', href: '#huggingface' },
    { name: 'Wins & Recognition', href: '#wins' },
    { name: 'Content', href: '#content' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6"
    >
      <div className="flex items-center">
        <a href="#" className="text-xl font-heading font-bold tracking-tighter">
          AV<span className="text-accent">.</span>
        </a>
      </div>

      <nav className="hidden md:flex items-center gap-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <MagneticButton
          as="a"
          href="#contact"
          className="px-6 py-2.5 bg-white text-black hover:bg-white/90 text-sm"
        >
          Let's Talk
        </MagneticButton>
      </div>
    </motion.header>
  );
}
