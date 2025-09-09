import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Project } from '../../types';
import { formatTechnologies, parseTechnologies } from '../../utils/formatters';

interface ProjectsManagerProps {
  projects: Project[];
  addProject: () => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

const ProjectsManager: React.FC<ProjectsManagerProps> = ({
  projects,
  addProject,
  updateProject,
  deleteProject
}) => {
  return (
    <div className="space-y-4">
      <button
        onClick={addProject}
        className="flex items-center gap-2 w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
      >
        <Plus size={16} />
        Add Project
      </button>
      
      <div className="space-y-4">
        {projects.map((project) => (
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
              value={formatTechnologies(project.technologies)}
              onChange={(e) => updateProject(project.id, { technologies: parseTechnologies(e.target.value) })}
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
  );
};

export default ProjectsManager;