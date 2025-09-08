import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Plus, Trash2 } from 'lucide-react';
import type { PortfolioData, Project } from '../types';

interface CMSPanelProps {
  data: PortfolioData;
  onDataUpdate: (newData: PortfolioData) => void;
}

const CMSPanel: React.FC<CMSPanelProps> = ({ data, onDataUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

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
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b">
                {[
                  { id: 'personal', label: 'Personal' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'experience', label: 'Experience' }
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
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={data.personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
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
                            placeholder="Description"
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <input
                            type="text"
                            value={project.technologies.join(', ')}
                            onChange={(e) => updateProject(project.id, { technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                            placeholder="Technologies (comma separated)"
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                          />
                          
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={project.githubUrl || ''}
                              onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                              placeholder="GitHub URL"
                              className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                  <div className="text-center text-slate-500 py-8">
                    Experience management coming soon...
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