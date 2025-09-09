import React from "react";
import { motion } from "framer-motion";
import { usePerformance } from "../../contexts/PerformanceContext";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}) => {
  const { settings } = usePerformance();
  const baseClasses =
    "relative cursor-pointer overflow-hidden font-medium rounded-lg flex items-center gap-2 justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg",
    secondary:
      "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg",
    outline:
      "border-transparent bg-gradient-to-r from-gray-600 to-gray-700 p-[2px]",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const outlineInner =
    variant === "outline"
      ? "bg-gray-950 text-white rounded-md flex items-center gap-2 justify-center w-full h-full"
      : "";

  const buttonContent = (
    <>
      {/* Shimmer effect - only when animations are enabled */}
      {settings.framerAnimations && (
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            translateX: ["100%", "-100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-current">{icon}</span>}
        {children}
      </span>
    </>
  );

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  const hoverProps = settings.framerAnimations
    ? {
        whileHover: {
          scale: 1.05,
          y: -2,
          filter: "brightness(1.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 },
      }
    : {};

  if (variant === "outline") {
    return (
      <Component
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...hoverProps}
        {...props}
      >
        <div className={`${outlineInner} ${sizes[size]}`}>{buttonContent}</div>
      </Component>
    );
  }

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...hoverProps}
      {...props}
    >
      {buttonContent}
    </Component>
  );
};

export default GradientButton;
