import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React from "react";
import type { PersonalInfo } from "../../types";
import { containerVariants, itemVariants } from "../../utils/animations";
import GradientCard from "../ui/GradientCard";
import SectionHeader from "../ui/SectionHeader";

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const timeline = [
    {
      year: "2025",
      title: "Software Engineer - Hudl",
      description:
        "Led development of the Hudl Fan App and the backend systems that powered it while pioneering AI-enhanced development workflows",
    },
    {
      year: "2022",
      title: "Full Stack Developer - eLink Design",
      description:
        "Developed and maintained full stack applications for multi-million dollar applications",
    },
    {
      year: "2018",
      title: "Computer Science - University of Kentucky",
      description:
        "Graduated from the University of Kentucky with a Bachelor of Science in Computer Science",
    },
  ];

  return (
    <section id="about" className="relative px-4 py-16 md:px-6 md:py-8">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
      >
        <SectionHeader title="About Me" className="px-4" />
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="from-accent-400 to-accent-500 mx-auto h-1 w-48 rounded-full bg-gradient-to-r" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-8">
            <GradientCard gradient="purple" className="">
              <h3 className="mb-6 text-2xl font-bold text-white">My Journey</h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Born in South Africa, raised in Kentucky, Alabama, and Illinois,
                I ended up back in Kentucky to study computer science.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                I graduated from the University of Kentucky in 2018 with dreams
                of making websites, mobile apps, and video games, while learning
                the fundamentals of software development.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                I then spent four years at eLink Design building and maintaining
                everything from multi-million dollar e-commerce sites to mobile
                apps for nurses and horse doctors.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Then at Hudl, I led the development of the Fan Mobile App,
                serving millions of users. While there, I learned about
                Microservices and enterprise software architecture.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Now I'm focused on the next step of my career, focusing on
                staying at the bleeding edge of technology by building agentic
                systems and growing my skills in AI development.
              </p>
            </GradientCard>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div variants={itemVariants} className="space-y-8 px-2">
            <h3 className="mb-8 px-2 text-3xl font-bold text-white">
              My Timeline
            </h3>

            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative flex items-start gap-6 py-2">
                    {/* Year bubble */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-800 bg-gradient-to-r from-gray-600 to-gray-700 text-sm font-bold text-white">
                      {item.year}
                      {/* Connecting line extending from bottom of bubble */}
                    </div>

                    <div className="absolute left-8 h-[90%] w-1 -translate-x-1/2 transform rounded-b-lg bg-gradient-to-b from-gray-600 to-gray-600/10" />

                    {/* Content */}
                    <GradientCard gradient="pink" className="flex-1 pt-16">
                      <h4 className="mb-4 text-xl font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-base leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </GradientCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div variants={itemVariants} className="mt-16 px-4 text-center">
          <GradientCard gradient="cyan" className="inline-block p-6 md:p-8">
            <div className="flex items-center gap-4 text-white">
              <MapPin className="h-6 w-6 text-gray-400" />
              <span className="text-lg">
                Currently based in {personalInfo.location}
              </span>
            </div>
          </GradientCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
