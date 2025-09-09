import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import type { PersonalInfo } from "../../types";
import GradientCard from "../ui/GradientCard";
import SectionHeader from "../ui/SectionHeader";
import { containerVariants, itemVariants } from "../../utils/animations";

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
    <section id="contact" className="relative px-6 py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
      >
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
        />

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
          <GradientCard gradient="purple" className="p-8">
            <div className="mb-6 flex flex-row items-center justify-center gap-4 border-b border-gray-600/20 pb-4">
              <h3 className="text-center text-2xl font-bold text-white">
                Let's Connect
              </h3>
              <div className="flex justify-center gap-4">
                {personalInfo.github && (
                  <motion.a
                    href={personalInfo.github}
                    className="group rounded-lg bg-gray-800/30 p-3 text-white transition-all duration-300 hover:bg-gray-700/40"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 transition-colors group-hover:text-gray-300" />
                  </motion.a>
                )}
                {personalInfo.linkedin && (
                  <motion.a
                    href={personalInfo.linkedin}
                    className="group rounded-lg bg-gray-800/30 p-3 text-white transition-all duration-300 hover:bg-gray-700/40"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-5 w-5 transition-colors group-hover:text-gray-300" />
                  </motion.a>
                )}
                {personalInfo.website && (
                  <motion.a
                    href={personalInfo.website}
                    className="group rounded-lg bg-gray-800/30 p-3 text-white transition-all duration-300 hover:bg-gray-700/40"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-5 w-5 transition-colors group-hover:text-gray-300" />
                  </motion.a>
                )}
              </div>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
              I'm always excited to discuss new opportunities, collaborate on
              interesting projects, or simply chat about technology and
              development.
            </p>

            {/* Contact Methods */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <div className="rounded-lg bg-gradient-to-r from-gray-700/30 to-gray-600/30 p-3">
                  <Mail className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-300 transition-colors hover:text-gray-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 md:justify-start">
                <div className="rounded-lg bg-gradient-to-r from-gray-700/30 to-gray-600/30 p-3">
                  <MapPin className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-gray-300">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </GradientCard>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gray-600/30 to-transparent" />
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. Built with React, TypeScript, and lots
            of ☕
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
