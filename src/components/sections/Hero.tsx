import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import type { PersonalInfo } from '../../types';
import GradientButton from '../ui/GradientButton';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 }
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title with animated underline */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <p className="text-3xl md:text-4xl text-gray-300 font-light">
            {personalInfo.title}
          </p>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <GradientButton size="lg" icon={<Mail size={20} />}>
            Get In Touch
          </GradientButton>
          <GradientButton 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
          >
            View My Work
          </GradientButton>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {personalInfo.email && (
            <motion.a 
              href={`mailto:${personalInfo.email}`}
              className="p-4 rounded-full bg-gray-800/40 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 text-white group"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="group-hover:text-accent-400 transition-colors" />
            </motion.a>
          )}
          {personalInfo.github && (
            <motion.a 
              href={personalInfo.github}
              className="p-4 rounded-full bg-gray-800/40 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 text-white group"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="group-hover:text-gray-300 transition-colors" />
            </motion.a>
          )}
          {personalInfo.linkedin && (
            <motion.a 
              href={personalInfo.linkedin}
              className="p-4 rounded-full bg-gray-800/40 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 text-white group"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="group-hover:text-gray-300 transition-colors" />
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={itemVariants}
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group mx-auto"
        >
          <span className="text-sm text-center">Scroll to explore more</span>
          <ChevronDown size={24} className="group-hover:text-accent-400 transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;