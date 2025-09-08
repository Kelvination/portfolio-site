import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import type { Experience } from '../../types';
import GradientCard from '../ui/GradientCard';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section id="experience" className="py-20 px-6 relative">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500 to-blue-500 transform md:-tranblue-x-px" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full transform -tranblue-x-2 md:-tranblue-x-2 z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <GradientCard 
                  gradient={index % 2 === 0 ? 'purple' : 'blue'} 
                  className="p-8"
                >
                  {/* Company Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <div className="text-lg font-medium bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-blue-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blue-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <ChevronRight className="w-4 h-4" />
                      <span>Key Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full border ${
                            index % 2 === 0 
                              ? 'bg-purple-500/20 text-purple-200 border-purple-400/30'
                              : 'bg-blue-500/20 text-blue-200 border-blue-400/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GradientCard>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block w-2/12" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <GradientCard gradient="blue" className="inline-block p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-blue-300 mb-6 max-w-lg">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </GradientCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;