import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Plus, Trash2, Save, Check } from 'lucide-react';
import type { PortfolioData, Project, Experience, Skill } from '../types';
import { savePortfolioData } from '../utils/saveData';

interface CMSPanelProps {
  data: PortfolioData;
  onDataUpdate: (newData: PortfolioData) => void;
}

const CMSPanel: React.FC<CMSPanelProps> = ({ data, onDataUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const updatePersonalInfo = (field: string, value: string) => {
    onDataUpdate({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value
      }
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      technologies: [],
      featured: false
    };
    onDataUpdate({
      ...data,
      projects: [...data.projects, newProject]
    });
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onDataUpdate({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  const deleteProject = (id: string) => {
    onDataUpdate({
      ...data,
      projects: data.projects.filter(p => p.id !== id)
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: 'New Position',
      company: 'Company Name',
      location: 'Location',
      startDate: '',
      description: 'Job description',
      technologies: []
    };
    onDataUpdate({
      ...data,
      experience: [...data.experience, newExperience]
    });
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onDataUpdate({
      ...data,
      experience: data.experience.map(e => e.id === id ? { ...e, ...updates } : e)
    });
  };

  const deleteExperience = (id: string) => {
    onDataUpdate({
      ...data,
      experience: data.experience.filter(e => e.id !== id)
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: 'New Skill',
      category: 'frontend',
      level: 'beginner'
    };
    onDataUpdate({
      ...data,
      skills: [...data.skills, newSkill]
    });
  };

  const updateSkill = (id: string, updates: Partial<Skill>) => {
    onDataUpdate({
      ...data,
      skills: data.skills.map(s => s.id === id ? { ...s, ...updates } : s)
    });
  };

  const deleteSkill = (id: string) => {
    onDataUpdate({
      ...data,
      skills: data.skills.filter(s => s.id !== id)
    });
  };

  const saveData = async () => {
    setIsSaving(true);
    
    try {
      const saved = await savePortfolioData(data);
      
      if (saved) {
        // File was saved successfully
        setSaveSuccess(true);
        setTimeout(() => {
          setSaveSuccess(false);
        }, 3000);
      } else {
        // Data was copied to clipboard (fallback)
        alert('Data copied to clipboard! To save permanently:\n\n1. Run: node save-server.js\n2. Click Save again\n\nOr paste the clipboard content into src/data/portfolioData.ts');
      }
    } catch (error) {
      console.error('Failed to save:', error);
      alert('Failed to save. Make sure the save server is running (node save-server.js)');
    }
    
    setIsSaving(false);
  };

  return (
    <>
      {/* CMS Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-accent-500 text-white rounded-full shadow-lg hover:bg-accent-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Settings size={20} />
      </motion.button>

      {/* CMS Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold text-slate-900">Content Manager</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={saveData}
                    disabled={isSaving}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      saveSuccess
                        ? 'bg-green-500 text-white'
                        : 'bg-accent-500 hover:bg-accent-600 text-white'
                    } disabled:opacity-50`}
                  >
                    {saveSuccess ? (
                      <>
                        <Check size={16} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        {isSaving ? 'Saving...' : 'Save'}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b">
                {[
                  { id: 'personal', label: 'Personal' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'skills', label: 'Skills' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-accent-600 border-b-2 border-accent-600 bg-accent-100'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {activeTab === 'personal' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={data.personalInfo.name}
                        onChange={(e) => updatePersonalInfo('name', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={data.personalInfo.title}
                        onChange={(e) => updatePersonalInfo('title', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
                      <textarea
                        value={data.personalInfo.bio}
                        onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={data.personalInfo.location}
                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={data.personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">GitHub</label>
                      <input
                        type="url"
                        value={data.personalInfo.github || ''}
                        onChange={(e) => updatePersonalInfo('github', e.target.value)}
                        placeholder="https://github.com/username"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn</label>
                      <input
                        type="url"
                        value={data.personalInfo.linkedin || ''}
                        onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Twitter</label>
                      <input
                        type="url"
                        value={data.personalInfo.twitter || ''}
                        onChange={(e) => updatePersonalInfo('twitter', e.target.value)}
                        placeholder="https://twitter.com/username"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                      <input
                        type="url"
                        value={data.personalInfo.website || ''}
                        onChange={(e) => updatePersonalInfo('website', e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Resume URL</label>
                      <input
                        type="url"
                        value={data.personalInfo.resumeUrl || ''}
                        onChange={(e) => updatePersonalInfo('resumeUrl', e.target.value)}
                        placeholder="https://link-to-your-resume.pdf"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-4">
                    <button
                      onClick={addProject}
                      className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                    >
                      <Plus size={16} />
                      Add Project
                    </button>
                    
                    <div className="space-y-4">
                      {data.projects.map((project) => (
                        <div key={project.id} className="p-4 border border-slate-200 rounded-lg space-y-3">
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => updateProject(project.id, { title: e.target.value })}
                              className="flex-1 px-3 py-1 text-lg font-medium bg-transparent border-b border-slate-300 focus:outline-none focus:border-accent-500"
                            />
                            <button
                              onClick={() => deleteProject(project.id)}
                              className="p-1 text-gray-500 hover:text-gray-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          <textarea
                            value={project.description}
                            onChange={(e) => updateProject(project.id, { description: e.target.value })}
                            placeholder="Short Description"
                            rows={2}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <textarea
                            value={project.longDescription || ''}
                            onChange={(e) => updateProject(project.id, { longDescription: e.target.value })}
                            placeholder="Long Description (fallback if no modal content)"
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <textarea
                            value={project.modalContent || ''}
                            onChange={(e) => updateProject(project.id, { modalContent: e.target.value })}
                            placeholder="Modal Content (detailed description for popup)"
                            rows={4}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <input
                            type="text"
                            value={project.technologies.join(', ')}
                            onChange={(e) => updateProject(project.id, { technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                            placeholder="Technologies (comma separated)"
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={project.githubUrl || ''}
                              onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                              placeholder="GitHub URL"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={project.liveUrl || ''}
                              onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                              placeholder="Live Demo URL"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={project.websiteUrl || ''}
                              onChange={(e) => updateProject(project.id, { websiteUrl: e.target.value })}
                              placeholder="Website URL"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={project.steamUrl || ''}
                              onChange={(e) => updateProject(project.id, { steamUrl: e.target.value })}
                              placeholder="Steam URL"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={project.imageUrl || ''}
                              onChange={(e) => updateProject(project.id, { imageUrl: e.target.value })}
                              placeholder="Image URL"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <label className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={project.featured}
                                onChange={(e) => updateProject(project.id, { featured: e.target.checked })}
                                className="w-4 h-4 text-accent-600"
                              />
                              <span className="text-sm">Featured</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-4">
                    <button
                      onClick={addExperience}
                      className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                    >
                      <Plus size={16} />
                      Add Experience
                    </button>
                    
                    <div className="space-y-4">
                      {data.experience.map((exp) => (
                        <div key={exp.id} className="p-4 border border-slate-200 rounded-lg space-y-3">
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              value={exp.title}
                              onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                              className="flex-1 px-3 py-1 text-lg font-medium bg-transparent border-b border-slate-300 focus:outline-none focus:border-accent-500"
                            />
                            <button
                              onClick={() => deleteExperience(exp.id)}
                              className="p-1 text-gray-500 hover:text-gray-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                              placeholder="Company"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={exp.location}
                              onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                              placeholder="Location"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                              placeholder="Start Date (YYYY-MM)"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                            <input
                              type="text"
                              value={exp.endDate || ''}
                              onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                              placeholder="End Date (YYYY-MM) or leave empty for current"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            />
                          </div>
                          
                          <textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                            placeholder="Job description"
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <input
                            type="text"
                            value={exp.technologies.join(', ')}
                            onChange={(e) => updateExperience(exp.id, { technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                            placeholder="Technologies (comma separated)"
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div className="space-y-4">
                    <button
                      onClick={addSkill}
                      className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                    >
                      <Plus size={16} />
                      Add Skill
                    </button>
                    
                    <div className="space-y-4">
                      {data.skills.map((skill) => (
                        <div key={skill.id} className="p-4 border border-slate-200 rounded-lg space-y-3">
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                              className="flex-1 px-3 py-1 text-lg font-medium bg-transparent border-b border-slate-300 focus:outline-none focus:border-accent-500"
                            />
                            <button
                              onClick={() => deleteSkill(skill.id)}
                              className="p-1 text-gray-500 hover:text-gray-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <select
                              value={skill.category}
                              onChange={(e) => updateSkill(skill.id, { category: e.target.value as Skill['category'] })}
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            >
                              <option value="frontend">Frontend</option>
                              <option value="backend">Backend</option>
                              <option value="database">Database</option>
                              <option value="tools">Tools</option>
                              <option value="other">Other</option>
                            </select>
                            <select
                              value={skill.level}
                              onChange={(e) => updateSkill(skill.id, { level: e.target.value as Skill['level'] })}
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                            >
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="expert">Expert</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Save Instructions */}
                {saveSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      ✅ Data saved successfully to portfolioData.ts!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CMSPanel;