import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import type { PersonalInfo } from '../../types';
import GradientCard from '../ui/GradientCard';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

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
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

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