import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import type { PersonalInfo } from '../../types';
import GradientCard from '../ui/GradientCard';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "25+", icon: Award },
    { label: "Technologies", value: "15+", icon: MapPin }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Software Engineer",
      description: "Leading development of scalable web applications"
    },
    {
      year: "2022",
      title: "Software Engineer",
      description: "Focused on modern JavaScript frameworks and cloud technologies"
    },
    {
      year: "2021",
      title: "Junior Developer",
      description: "Started journey in web development and software engineering"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 relative">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-8">
            <GradientCard gradient="purple" className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about creating digital experiences that not only look beautiful but also solve real-world problems. 
                My journey in software engineering has been driven by curiosity and a constant desire to learn and grow.
              </p>
            </GradientCard>

            {/* Stats */}
            <div className="px-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GradientCard gradient="blue" className="p-6 md:p-8 text-center">
                      <stat.icon className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-white mb-3">{stat.value}</div>
                      <div className="text-sm text-gray-300 leading-relaxed">{stat.label}</div>
                    </GradientCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div variants={itemVariants} className="space-y-8 px-2">
            <h3 className="text-3xl font-bold text-white mb-8 px-2">My Timeline</h3>
            
            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-gray-700 z-0" />
                  )}
                  
                  <div className="flex items-center py-4 gap-6 relative z-10">
                    {/* Year bubble */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold text-sm border-2 border-gray-800">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <GradientCard gradient="pink" className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed text-base">{item.description}</p>
                    </GradientCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center px-4"
        >
          <GradientCard gradient="cyan" className="inline-block p-6 md:p-8">
            <div className="flex items-center gap-4 text-white">
              <MapPin className="w-6 h-6 text-gray-400" />
              <span className="text-lg">Currently based in {personalInfo.location}</span>
            </div>
          </GradientCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;