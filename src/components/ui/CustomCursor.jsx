import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 1)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 40,
        mass: 0.1
      }
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 40,
        mass: 0.1
      }
    }
  };

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={dotVariants}
        animate={isHovering ? 'hover' : 'default'}
      />
    </>
  );
}
