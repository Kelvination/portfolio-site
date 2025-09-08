import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Filter } from 'lucide-react';
import type { Project } from '../../types';
import GradientCard from '../ui/GradientCard';
import GradientButton from '../ui/GradientButton';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                  : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/40'
              }`}
            >
              <Filter size={16} />
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white'
                  : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/40'
              }`}
            >
              <Star size={16} />
              Featured Only
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <GradientCard 
                  gradient={index % 2 === 0 ? 'purple' : 'blue'}
                  className="h-full"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                        {project.title}
                        {project.featured && <Star className="text-accent-400" size={20} />}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-gray-200 rounded-full border border-gray-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-sm bg-gray-800/30 text-gray-300 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <GradientButton 
                          size="sm" 
                          variant="outline"
                          href={project.githubUrl}
                          icon={<Github size={16} />}
                        >
                          Code
                        </GradientButton>
                      )}
                      {project.liveUrl && (
                        <GradientButton 
                          size="sm"
                          href={project.liveUrl}
                          icon={<ExternalLink size={16} />}
                        >
                          Live Demo
                        </GradientButton>
                      )}
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <GradientCard gradient="purple" className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                      {selectedProject.title}
                      {selectedProject.featured && <Star className="text-accent-400" size={24} />}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/60 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-gray-200 rounded-full border border-gray-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <GradientButton 
                        href={selectedProject.githubUrl}
                        icon={<Github size={20} />}
                      >
                        View Code
                      </GradientButton>
                    )}
                    {selectedProject.liveUrl && (
                      <GradientButton 
                        variant="secondary"
                        href={selectedProject.liveUrl}
                        icon={<ExternalLink size={20} />}
                      >
                        Live Demo
                      </GradientButton>
                    )}
                  </div>
                </GradientCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;