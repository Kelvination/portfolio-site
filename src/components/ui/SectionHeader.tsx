import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../utils/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <motion.div variants={itemVariants} className={`text-center mb-14 ${className}`}>
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;