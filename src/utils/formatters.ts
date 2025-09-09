export const formatDateRange = (startDate: string, endDate?: string): string => {
  return `${startDate} - ${endDate || 'Present'}`;
};

export const formatTechnologies = (technologies: string[]): string => {
  return technologies.join(', ');
};

export const parseTechnologies = (technologiesString: string): string[] => {
  return technologiesString.split(',').map(s => s.trim()).filter(Boolean);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const generateInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('');
};

// Skill level functions moved to config/skillLevels.ts

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};