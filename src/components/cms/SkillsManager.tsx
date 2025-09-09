import React from "react";
import { Plus, Trash2 } from "lucide-react";
import type { Skill } from "../../types";
import { defaultSkillLevels } from "../../config/skillLevels";

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
  deleteSkill,
}) => {
  const categoryOptions = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "database", label: "Database" },
    { value: "tools", label: "Tools" },
    { value: "other", label: "Other" },
  ];

  const levelOptions = defaultSkillLevels.map((level) => ({
    value: level.level.toString(),
    label: level.label,
  }));

  return (
    <div className="space-y-4">
      <button
        onClick={addSkill}
        className="bg-accent-500 hover:bg-accent-600 flex w-full items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors"
      >
        <Plus size={16} />
        Add Skill
      </button>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="space-y-3 rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={skill.name}
                onChange={(e) =>
                  updateSkill(skill.id, { name: e.target.value })
                }
                className="focus:border-accent-500 flex-1 border-b border-slate-300 bg-transparent px-3 py-1 text-lg font-medium focus:outline-none"
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
                onChange={(e) =>
                  updateSkill(skill.id, {
                    category: e.target.value as Skill["category"],
                  })
                }
                className="focus:ring-accent-500 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:ring-1 focus:outline-none"
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={skill.level.toString()}
                onChange={(e) =>
                  updateSkill(skill.id, {
                    level: parseInt(e.target.value) as Skill["level"],
                  })
                }
                className="focus:ring-accent-500 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:ring-1 focus:outline-none"
              >
                {levelOptions.map((option) => (
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
