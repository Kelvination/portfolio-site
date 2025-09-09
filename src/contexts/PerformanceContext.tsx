import React, { createContext, useContext, useState, useEffect } from "react";

interface PerformanceSettings {
  backgroundAnimations: boolean;
  framerAnimations: boolean;
  reducedMotion: boolean;
  // Individual background animation controls
  cloudDrift: boolean;
  pulseGlow: boolean;
}

interface PerformanceContextType {
  settings: PerformanceSettings;
  updateSettings: (settings: Partial<PerformanceSettings>) => void;
  toggleBackgroundAnimations: () => void;
  toggleFramerAnimations: () => void;
  toggleCloudDrift: () => void;
  togglePulseGlow: () => void;
  applyPerformanceMode: () => void;
}

const defaultSettings: PerformanceSettings = {
  backgroundAnimations: true,
  framerAnimations: true,
  reducedMotion: false,
  // Individual background animations default to enabled
  cloudDrift: true,
  pulseGlow: true,
};

const PerformanceContext = createContext<PerformanceContextType | undefined>(
  undefined
);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<PerformanceSettings>(() => {
    // Check localStorage for saved preferences
    const saved = localStorage.getItem("portfolio-performance-settings");
    if (saved) {
      try {
        return { ...defaultSettings, ...JSON.parse(saved) };
      } catch {
        return defaultSettings;
      }
    }

    // Check for user's reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    return {
      ...defaultSettings,
      backgroundAnimations: !prefersReducedMotion,
      framerAnimations: !prefersReducedMotion,
      reducedMotion: prefersReducedMotion,
    };
  });

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem(
      "portfolio-performance-settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  // Listen for system reduced motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setSettings((prev) => ({
        ...prev,
        reducedMotion: e.matches,
        backgroundAnimations: prev.backgroundAnimations && !e.matches,
        framerAnimations: prev.framerAnimations && !e.matches,
      }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateSettings = (newSettings: Partial<PerformanceSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const toggleBackgroundAnimations = () => {
    setSettings((prev) => {
      const newValue = !prev.backgroundAnimations;
      return {
        ...prev,
        backgroundAnimations: newValue,
        // When master toggle is off, turn off all individual animations
        cloudDrift: newValue ? prev.cloudDrift : false,
        pulseGlow: newValue ? prev.pulseGlow : false,
      };
    });
  };

  const toggleFramerAnimations = () => {
    setSettings((prev) => ({
      ...prev,
      framerAnimations: !prev.framerAnimations,
    }));
  };

  const toggleCloudDrift = () => {
    setSettings((prev) => ({
      ...prev,
      cloudDrift: !prev.cloudDrift,
    }));
  };

  const togglePulseGlow = () => {
    setSettings((prev) => ({
      ...prev,
      pulseGlow: !prev.pulseGlow,
    }));
  };

  const applyPerformanceMode = () => {
    setSettings((prev) => ({
      ...prev,
      backgroundAnimations: false,
      framerAnimations: false,
      cloudDrift: false,
      pulseGlow: false,
    }));
  };

  return (
    <PerformanceContext.Provider
      value={{
        settings,
        updateSettings,
        toggleBackgroundAnimations,
        toggleFramerAnimations,
        toggleCloudDrift,
        togglePulseGlow,
        applyPerformanceMode,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
};
