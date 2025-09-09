export interface SkillLevelConfig {
  level: number;
  label: string;
  percentage: number;
  gradient: string;
  bgStyle: string;
  textStyle: string;
}

export const defaultSkillLevels: SkillLevelConfig[] = [
  {
    level: 1,
    label: 'Learning',
    percentage: 25,
    gradient: 'from-gray-500 to-gray-400',
    bgStyle: 'bg-gray-800/30',
    textStyle: 'text-gray-400'
  },
  {
    level: 2,
    label: 'Comfortable',
    percentage: 50,
    gradient: 'from-gray-400 to-gray-300',
    bgStyle: 'bg-gray-700/30',
    textStyle: 'text-gray-300'
  },
  {
    level: 3,
    label: 'Experienced',
    percentage: 75,
    gradient: 'from-gray-300 to-gray-200',
    bgStyle: 'bg-gray-600/30',
    textStyle: 'text-gray-200'
  },
  {
    level: 4,
    label: 'Highly Experienced',
    percentage: 100,
    gradient: 'from-accent-400 to-accent-500',
    bgStyle: 'bg-accent-500/20',
    textStyle: 'text-accent-300'
  }
];

export const getSkillLevelConfig = (level: number): SkillLevelConfig => {
  return defaultSkillLevels.find(skillLevel => skillLevel.level === level) || defaultSkillLevels[1]; // Default to level 2
};

export const getSkillLevelPercentage = (level: number): number => {
  return getSkillLevelConfig(level).percentage;
};

export const getSkillLevelGradient = (level: number): string => {
  return getSkillLevelConfig(level).gradient;
};

export const getSkillLevelLabel = (level: number): string => {
  return getSkillLevelConfig(level).label;
};

export const getSkillLevelStyles = (level: number): { bg: string; text: string } => {
  const config = getSkillLevelConfig(level);
  return {
    bg: config.bgStyle,
    text: config.textStyle
  };
};

// Type for the skill level value union
export type SkillLevelValue = typeof defaultSkillLevels[number]['level'];
