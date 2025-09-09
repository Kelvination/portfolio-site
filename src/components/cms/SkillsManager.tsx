import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Skill } from '../../types';

interface SkillsManagerProps {
  skills: Skill[];
  addSkill: () => void;
  updateSkill: (id: string, updates: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
}

const SkillsManager: React.FC<SkillsManagerProps> = ({
  skills,
  addSkill,
  updateSkill,
  deleteSkill
}) => {
  const categoryOptions = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Database' },
    { value: 'tools', label: 'Tools' },
    { value: 'other', label: 'Other' }
  ];

  const levelOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ];

  return (
    <div className="space-y-4">
      <button
        onClick={addSkill}
        className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
      >
        <Plus size={16} />
        Add Skill
      </button>
      
      <div className="space-y-4">
        {skills.map((skill) => (
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
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, { level: e.target.value as Skill['level'] })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
              >
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsManager;