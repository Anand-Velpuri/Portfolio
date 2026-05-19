import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  as = 'button',
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = motion[as] || motion.button;

  const content = (
    <Component
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );

  if (href && as === 'a') {
    return (
      <a href={href} className="inline-block" {...props}>
        {content}
      </a>
    );
  }

  return content;
}
