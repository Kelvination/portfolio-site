import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import type { Experience } from '../../types';
import GradientCard from '../ui/GradientCard';
import SectionHeader from '../ui/SectionHeader';
import TechTag from '../ui/TechTag';
import { containerVariants, itemVariants } from '../../utils/animations';
import { formatDateRange } from '../../utils/formatters';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {

  return (
    <section id="experience" className="py-20 px-6 relative">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader 
          title="Experience"
          subtitle="My professional journey and the experiences that shaped my expertise"
        />

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 via-gray-600 to-gray-700 transform md:-translate-x-px" />

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
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-ping opacity-20" />
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
                    <div className="p-2 rounded-lg bg-gray-800/30">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <div className="text-lg font-medium bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
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
                        <TechTag 
                          key={tech}
                          tech={tech}
                          variant={index % 2 === 0 ? 'skill' : 'outlined'}
                        />
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
            <p className="text-gray-300 mb-6 max-w-lg">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-medium hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
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