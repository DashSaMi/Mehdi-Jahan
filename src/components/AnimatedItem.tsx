import React from 'react';
import { motion } from 'motion/react';

interface AnimatedItemProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -90 };
      case 'right':
        return { opacity: 0, x: 90 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'up':
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
