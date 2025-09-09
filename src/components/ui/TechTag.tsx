import React from 'react';

interface TechTagProps {
  tech: string;
  variant?: 'default' | 'outlined' | 'skill';
  size?: 'sm' | 'md';
  className?: string;
}

const TechTag: React.FC<TechTagProps> = ({ 
  tech, 
  variant = 'default', 
  size = 'sm',
  className = ''
}) => {
  const baseClasses = "inline-block text-center rounded-full border";
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2"
  };

  const variantClasses = {
    default: "bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-gray-200 border-gray-500/30",
    outlined: "bg-gray-800/30 text-gray-300 border-gray-600/30",
    skill: "bg-gray-700/30 text-gray-200 border-gray-500/30"
  };

  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {tech}
    </span>
  );
};

export default TechTag;