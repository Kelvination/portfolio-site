import React from 'react';
import { motion } from 'framer-motion';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'purple' | 'blue' | 'pink' | 'cyan';
  hover?: boolean;
  glowEffect?: boolean;
}

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className = '',
  gradient = 'purple',
  hover = true
}) => {
  const gradients = {
    purple: 'from-purple-500/20 to-pink-500/20',
    blue: 'from-blue-500/20 to-cyan-500/20',
    pink: 'from-pink-500/20 to-rose-500/20',
    cyan: 'from-cyan-500/20 to-blue-500/20'
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Main card */}
      <div className={`relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300`}>
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradient]} opacity-50`} />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default GradientCard;