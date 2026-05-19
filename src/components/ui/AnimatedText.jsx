import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function AnimatedText({ text, className, once = true, delay = 0 }) {
  // Split text into words
  const words = text.split(' ');

  // Variants for Container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn('flex flex-wrap overflow-hidden', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '0.25em' }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
