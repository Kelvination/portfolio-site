import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';
import type { Skill } from '../../types';
import GradientCard from '../ui/GradientCard';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      category: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      gradient: 'purple' as const,
      description: 'Creating beautiful and interactive user interfaces'
    },
    {
      category: 'backend',
      title: 'Backend Development',
      icon: Server,
      gradient: 'blue' as const,
      description: 'Building robust server-side applications and APIs'
    },
    {
      category: 'database',
      title: 'Database Management',
      icon: Database,
      gradient: 'purple' as const,
      description: 'Designing and optimizing data storage solutions'
    },
    {
      category: 'tools',
      title: 'Development Tools',
      icon: Wrench,
      gradient: 'blue' as const,
      description: 'Leveraging modern tools and deployment platforms'
    }
  ];

  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 100;
      default: return 50;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'from-gray-500 to-gray-400';
      case 'intermediate': return 'from-gray-400 to-gray-300';
      case 'advanced': return 'from-gray-300 to-gray-200';
      case 'expert': return 'from-accent-400 to-accent-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((categoryInfo, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === categoryInfo.category);
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={categoryInfo.category}
                variants={itemVariants}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <GradientCard gradient={categoryInfo.gradient} className="p-8 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${
                      categoryInfo.gradient === 'purple' ? 'from-gray-700/40 to-gray-600/40' :
                      categoryInfo.gradient === 'blue' ? 'from-gray-600/40 to-gray-700/40' :
                      'from-gray-650/40 to-gray-700/40'
                    }`}>
                      <categoryInfo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{categoryInfo.title}</h3>
                      <p className="text-gray-300 text-sm">{categoryInfo.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            skill.level === 'expert' ? 'bg-accent-500/20 text-accent-300' :
                            skill.level === 'advanced' ? 'bg-gray-600/30 text-gray-200' :
                            skill.level === 'intermediate' ? 'bg-gray-700/30 text-gray-300' :
                            'bg-gray-800/30 text-gray-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        
                        {/* Skill Progress Bar */}
                        <div className="relative h-2 bg-gray-800/30 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${getLevelPercentage(skill.level)}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                            viewport={{ once: true }}
                          />
                          
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                            animate={{ translateX: ['100%', '-100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              delay: (categoryIndex * 0.2) + (index * 0.1) + 1
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GradientCard>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <GradientCard gradient="purple" className="inline-block p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly explore new frameworks, languages, and tools to stay at the forefront of development.
            </p>
          </GradientCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;