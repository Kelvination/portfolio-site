import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Experience } from '../../types';
import { formatTechnologies, parseTechnologies } from '../../utils/formatters';

interface ExperienceManagerProps {
  experience: Experience[];
  addExperience: () => void;
  updateExperience: (id: string, updates: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
}

const ExperienceManager: React.FC<ExperienceManagerProps> = ({
  experience,
  addExperience,
  updateExperience,
  deleteExperience
}) => {
  return (
    <div className="space-y-4">
      <button
        onClick={addExperience}
        className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
      >
        <Plus size={16} />
        Add Experience
      </button>
      
      <div className="space-y-4">
        {experience.map((exp) => (
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
              value={formatTechnologies(exp.technologies)}
              onChange={(e) => updateExperience(exp.id, { technologies: parseTechnologies(e.target.value) })}
              placeholder="Technologies (comma separated)"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceManager;