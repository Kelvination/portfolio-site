import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon
}) => {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 rounded-lg flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl",
    outline: "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] hover:shadow-lg"
  };
  
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  const outlineInner = variant === 'outline' 
    ? "bg-slate-900 text-white hover:bg-transparent transition-all duration-300 rounded-md flex items-center gap-2 justify-center w-full h-full"
    : "";

  const buttonContent = (
    <>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{
          translateX: ['100%', '-100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-current">{icon}</span>}
        {children}
      </span>
    </>
  );

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  if (variant === 'outline') {
    return (
      <Component
        className={`${baseClasses} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <div className={`${outlineInner} ${sizes[size]}`}>
          {buttonContent}
        </div>
      </Component>
    );
  }

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {buttonContent}
    </Component>
  );
};

export default GradientButton;