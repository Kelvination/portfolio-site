import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import type { PersonalInfo } from "../../types";
import GradientButton from "../ui/GradientButton";
import { containerVariants, heroItemVariants } from "../../utils/animations";
import { useScrollTo } from "../../hooks/useScrollTo";
import { generateInitials } from "../../utils/formatters";

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const { scrollToNext, scrollToProjects, scrollToContact } = useScrollTo();

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={heroItemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-950">
                <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-4xl font-bold text-transparent">
                  {generateInitials(personalInfo.name)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={heroItemVariants}
          className="mb-6 text-6xl font-bold md:text-8xl"
        >
          <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title with animated underline */}
        <motion.div variants={heroItemVariants} className="relative mb-8">
          <p className="text-3xl font-light text-gray-300 md:text-4xl">
            {personalInfo.title}
          </p>
          <motion.div
            className="from-accent-400 to-accent-500 absolute -bottom-4 left-1/2 h-1 -translate-x-1/2 transform rounded-full bg-gradient-to-r"
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={heroItemVariants}
          className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-16 flex flex-col justify-center gap-6 sm:flex-row"
        >
          <GradientButton
            size="lg"
            icon={<Mail size={20} />}
            onClick={scrollToContact}
          >
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
          variants={heroItemVariants}
          className="mb-16 flex justify-center gap-6"
        >
          {personalInfo.email && (
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="group rounded-full border border-gray-600/30 bg-gray-800/40 p-4 text-white backdrop-blur-md"
              whileHover={{
                y: -2,
                scale: 1.1,
                backgroundColor: "rgb(63 63 70 / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail
                size={24}
                className="group-hover:text-accent-400 transition-colors"
              />
            </motion.a>
          )}
          {personalInfo.github && (
            <motion.a
              href={personalInfo.github}
              className="group rounded-full border border-gray-600/30 bg-gray-800/40 p-4 text-white backdrop-blur-md"
              whileHover={{
                y: -2,
                scale: 1.1,
                backgroundColor: "rgb(63 63 70 / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github
                size={24}
                className="group-hover:text-accent-400 transition-colors"
              />
            </motion.a>
          )}
          {personalInfo.linkedin && (
            <motion.a
              href={personalInfo.linkedin}
              className="group rounded-full border border-gray-600/30 bg-gray-800/40 p-4 text-white backdrop-blur-md"
              whileHover={{
                y: -2,
                scale: 1.1,
                backgroundColor: "rgb(63 63 70 / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin
                size={24}
                className="group-hover:text-accent-400 transition-colors"
              />
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={heroItemVariants}
          onClick={scrollToNext}
          className="group mx-auto flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="text-center text-sm">Scroll to explore more</span>
          <ChevronDown
            size={24}
            className="group-hover:text-accent-400 transition-colors"
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
