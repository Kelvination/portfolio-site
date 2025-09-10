import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import type { PersonalInfo } from "../../types";
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

        {/* Contact Content */}
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Social Links Header */}
          <div className="mb-12 flex flex-col items-center justify-center gap-6">
            <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
            <div className="flex justify-center gap-4">
              {personalInfo.github && (
                <motion.a
                  href={personalInfo.github}
                  className="group rounded-xl border border-gray-600/20 bg-gray-800/20 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500/40 hover:bg-gray-700/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6 transition-colors group-hover:text-gray-300" />
                </motion.a>
              )}
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  className="group rounded-xl border border-gray-600/20 bg-gray-800/20 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500/40 hover:bg-gray-700/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6 transition-colors group-hover:text-gray-300" />
                </motion.a>
              )}
              {personalInfo.website && (
                <motion.a
                  href={personalInfo.website}
                  className="group rounded-xl border border-gray-600/20 bg-gray-800/20 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500/40 hover:bg-gray-700/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-6 w-6 transition-colors group-hover:text-gray-300" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-gray-300">
            I'm always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            development.
          </p>

          {/* Contact Methods */}
          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            <motion.div
              className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-600/20 bg-gray-800/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-500/30 hover:bg-gray-800/20"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-4">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-center">
                <div className="mb-2 text-xl font-semibold text-white">
                  Email
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg text-gray-300 transition-colors hover:text-blue-400"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-600/20 bg-gray-800/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-500/30 hover:bg-gray-800/20"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 p-4">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-center">
                <div className="mb-2 text-xl font-semibold text-white">
                  Location
                </div>
                <div className="text-lg text-gray-300">
                  {personalInfo.location}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gray-600/30 to-transparent" />
          <p className="text-gray-400">
            © 2025 {personalInfo.name}. Built with React, TypeScript, and lots
            of ☕
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
