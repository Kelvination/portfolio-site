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
    purple: 'from-gray-800/30 to-gray-700/30',
    blue: 'from-gray-800/25 to-gray-750/25',
    pink: 'from-gray-875/35 to-gray-800/35',
    cyan: 'from-gray-700/25 to-gray-800/25'
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Main card */}
      <div className={`relative p-4 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300`}>
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