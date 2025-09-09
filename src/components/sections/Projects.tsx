import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Star,
  Filter,
  Globe,
  Gamepad2,
} from "lucide-react";
import type { Project } from "../../types";
import GradientCard from "../ui/GradientCard";
import GradientButton from "../ui/GradientButton";
import SectionHeader from "../ui/SectionHeader";
import TechTag from "../ui/TechTag";
import {
  containerVariants,
  itemVariants,
  projectItemVariants,
} from "../../utils/animations";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative px-6 py-20">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
      >
        <SectionHeader
          title="Featured Projects"
          subtitle="A collection of projects that showcase my skills and passion for creating innovative solutions"
        />

        <motion.div variants={itemVariants} className="mb-16">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2 transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white"
                  : "bg-gray-800/30 text-gray-300 hover:bg-gray-700/40"
              }`}
            >
              <Filter size={16} />
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2 transition-all duration-300 ${
                filter === "featured"
                  ? "from-accent-500 to-accent-600 bg-gradient-to-r text-white"
                  : "bg-gray-800/30 text-gray-300 hover:bg-gray-700/40"
              }`}
            >
              <Star size={16} />
              Featured Only
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectItemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <GradientCard
                  gradient={index % 2 === 0 ? "purple" : "blue"}
                  className="h-full"
                >
                  <div className="flex h-full flex-col p-6">
                    {/* Project Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
                        {project.title}
                        {project.featured && (
                          <Star className="text-accent-400" size={20} />
                        )}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 flex-grow leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechTag key={tech} tech={tech} />
                      ))}
                      {project.technologies.length > 4 && (
                        <TechTag
                          tech={`+${project.technologies.length - 4} more`}
                          variant="outlined"
                        />
                      )}
                    </div>

                    {/* Actions */}
                    <div
                      className="flex flex-wrap gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                      {project.websiteUrl && (
                        <GradientButton
                          size="sm"
                          variant="outline"
                          href={project.websiteUrl}
                          icon={<Globe size={16} />}
                        >
                          Website
                        </GradientButton>
                      )}
                      {project.steamUrl && (
                        <GradientButton
                          size="sm"
                          variant="outline"
                          href={project.steamUrl}
                          icon={<Gamepad2 size={16} />}
                        >
                          Steam
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="max-h-[85vh] w-full max-w-4xl overflow-visible"
                onClick={(e) => e.stopPropagation()}
              >
                <GradientCard gradient="purple">
                  <div className="max-h-[75vh] overflow-y-auto p-8">
                    <div className="mb-6 flex items-start justify-between">
                      <h3 className="flex items-center gap-3 text-3xl font-bold text-white">
                        {selectedProject.title}
                        {selectedProject.featured && (
                          <Star className="text-accent-400" size={24} />
                        )}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="cursor-pointer text-2xl text-white/60 hover:text-white"
                      >
                        ×
                      </button>
                    </div>

                    <div className="mb-6 text-lg leading-relaxed whitespace-pre-wrap text-gray-300">
                      {selectedProject.modalContent ||
                        selectedProject.longDescription ||
                        selectedProject.description}
                    </div>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <TechTag key={tech} tech={tech} size="md" />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
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
                      {selectedProject.websiteUrl && (
                        <GradientButton
                          variant="secondary"
                          href={selectedProject.websiteUrl}
                          icon={<Globe size={20} />}
                        >
                          Website
                        </GradientButton>
                      )}
                      {selectedProject.steamUrl && (
                        <GradientButton
                          variant="secondary"
                          href={selectedProject.steamUrl}
                          icon={<Gamepad2 size={20} />}
                        >
                          Steam
                        </GradientButton>
                      )}
                    </div>
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
