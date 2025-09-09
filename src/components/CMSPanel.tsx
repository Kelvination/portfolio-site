import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Save, Check } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import PersonalInfoForm from './cms/PersonalInfoForm';
import ProjectsManager from './cms/ProjectsManager';
import ExperienceManager from './cms/ExperienceManager';
import SkillsManager from './cms/SkillsManager';

interface CMSPanelProps {
  portfolioDataHook: ReturnType<typeof usePortfolioData>;
}

const CMSPanel: React.FC<CMSPanelProps> = ({ portfolioDataHook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  
  const { data, isSaving, saveSuccess, saveData } = portfolioDataHook;


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
                  <PersonalInfoForm 
                    personalInfo={data.personalInfo}
                    updatePersonalInfo={portfolioDataHook.updatePersonalInfo}
                  />
                )}

                {activeTab === 'projects' && (
                  <ProjectsManager
                    projects={data.projects}
                    addProject={portfolioDataHook.addProject}
                    updateProject={portfolioDataHook.updateProject}
                    deleteProject={portfolioDataHook.deleteProject}
                  />
                )}

                {activeTab === 'experience' && (
                  <ExperienceManager
                    experience={data.experience}
                    addExperience={portfolioDataHook.addExperience}
                    updateExperience={portfolioDataHook.updateExperience}
                    deleteExperience={portfolioDataHook.deleteExperience}
                  />
                )}
                
                {activeTab === 'skills' && (
                  <SkillsManager
                    skills={data.skills}
                    addSkill={portfolioDataHook.addSkill}
                    updateSkill={portfolioDataHook.updateSkill}
                    deleteSkill={portfolioDataHook.deleteSkill}
                  />
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