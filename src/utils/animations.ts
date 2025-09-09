import type { Variants } from 'framer-motion';

interface AnimationConfig {
  enabled: boolean;
}

export const createVariants = (config: AnimationConfig = { enabled: true }): {
  containerVariants: Variants;
  itemVariants: Variants;
  heroItemVariants: Variants;
  fadeInVariants: Variants;
  slideFromLeftVariants: Variants;
  projectItemVariants: Variants;
} => {
  if (!config.enabled) {
    // Return non-animated variants when disabled
    const staticVariant = { opacity: 1, x: 0, y: 0, scale: 1 };
    return {
      containerVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
      itemVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
      heroItemVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
      fadeInVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
      slideFromLeftVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
      projectItemVariants: {
        hidden: staticVariant,
        visible: staticVariant,
      },
    };
  }

  return {
    containerVariants,
    itemVariants,
    heroItemVariants,
    fadeInVariants,
    slideFromLeftVariants,
    projectItemVariants,
  };
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 }
  }
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

export const projectItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25 }
  }
};

export const staggerContainer = (staggerChildren: number = 0.08): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      duration: 0.4
    }
  }
});

export const slideUpVariants = (duration: number = 0.3): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration }
  }
});

export const scaleVariants = (duration: number = 0.25): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration }
  }
});