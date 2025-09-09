import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Building,
} from "lucide-react";
import type { Experience } from "../../types";
import GradientCard from "../ui/GradientCard";
import SectionHeader from "../ui/SectionHeader";
import TechTag from "../ui/TechTag";
import { createVariants } from "../../utils/animations";
import { usePerformance } from "../../contexts/PerformanceContext";
import { formatDateRange } from "../../utils/formatters";

interface ExperienceProps {
  experience: Experience[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience: exp,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { settings } = usePerformance();
  const variants = createVariants({ enabled: settings.framerAnimations });

  return (
    <motion.div
      variants={variants.itemVariants}
      transition={{ delay: settings.framerAnimations ? index * 0.1 : 0 }}
      className={`mb-24 flex gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <GradientCard gradient={index % 2 === 0 ? "purple" : "blue"}>
          {/* Company Badge */}
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-gray-800/30 p-2">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <div className="bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-lg font-medium text-transparent">
                {exp.company}
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="mb-4 flex flex-col gap-4 text-gray-400 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">
                {formatDateRange(exp.startDate, exp.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{exp.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="leading-relaxed text-gray-300">{exp.description}</p>

          {/* Expanded Content */}
          {isExpanded && exp.detailedDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="pt-4">
                <div className="leading-relaxed text-gray-300">
                  {exp.detailedDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Read More Button */}
          {exp.detailedDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 mb-4 flex cursor-pointer items-center gap-2 text-white/40 transition-colors duration-200 hover:text-white"
            >
              <span className="text-sm font-medium">
                {isExpanded ? "Read Less" : "Read More"}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {/* Technologies */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 font-medium text-white">
              <span>Key Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <TechTag
                  key={tech}
                  tech={tech}
                  variant={index % 2 === 0 ? "skill" : "outlined"}
                />
              ))}
            </div>
          </div>
        </GradientCard>
      </div>
      {/* Company Logo */}
      <div className="flex h-40 w-40 max-w-40 flex-shrink-0 items-center justify-center rounded-xl border border-gray-700/50 bg-gray-800/50">
        {exp.logoUrl ? (
          <img
            src={exp.logoUrl}
            alt={`${exp.company} logo`}
            className="h-full w-full rounded-xl object-contain"
          />
        ) : (
          <Building className="h-8 w-8 text-gray-400" />
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  const { settings } = usePerformance();
  const variants = createVariants({ enabled: settings.framerAnimations });

  return (
    <section id="experience" className="relative px-6 py-20">
      <motion.div
        className="mx-auto max-w-5xl"
        variants={variants.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
      >
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and the experiences that shaped my expertise"
        />

        {/* Experience Grid */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={variants.itemVariants} className="text-center">
          <GradientCard gradient="blue" className="inline-block">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Let's Work Together
            </h3>
            <p className="mb-6 max-w-lg text-gray-300">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white transition-all duration-300"
              whileHover={
                settings.framerAnimations ? { scale: 1.05, y: -2 } : {}
              }
              whileTap={settings.framerAnimations ? { scale: 0.95 } : {}}
            >
              Get In Touch
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </GradientCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
