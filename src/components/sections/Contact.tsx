import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import type { PersonalInfo } from '../../types';
import GradientCard from '../ui/GradientCard';
import SectionHeader from '../ui/SectionHeader';
import FormField from '../ui/FormField';
import { containerVariants, itemVariants } from '../../utils/animations';
import { useForm } from '../../hooks/useForm';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const { formData, isSubmitting, handleChange, handleSubmit, resetForm } = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: async () => {
      setTimeout(() => {
        resetForm();
        alert('Thank you for your message! I\'ll get back to you soon.');
      }, 2000);
    }
  });


  return (
    <section id="contact" className="py-20 px-6 relative">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader 
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <GradientCard gradient="purple" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and development.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-700/30 to-gray-600/30">
                    <Mail className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-300 hover:text-gray-200 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-700/30 to-gray-600/30">
                    <MapPin className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-300">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-600/20">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {personalInfo.github && (
                    <motion.a
                      href={personalInfo.github}
                      className="p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-white group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 group-hover:text-gray-300 transition-colors" />
                    </motion.a>
                  )}
                  {personalInfo.linkedin && (
                    <motion.a
                      href={personalInfo.linkedin}
                      className="p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-white group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5 group-hover:text-gray-300 transition-colors" />
                    </motion.a>
                  )}
                  {personalInfo.website && (
                    <motion.a
                      href={personalInfo.website}
                      className="p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-white group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 group-hover:text-gray-300 transition-colors" />
                    </motion.a>
                  )}
                </div>
              </div>
            </GradientCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GradientCard gradient="blue" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                  
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />

                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                />

                <div className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </GradientCard>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent mb-8" />
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. Built with React, TypeScript, and lots of ☕
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;