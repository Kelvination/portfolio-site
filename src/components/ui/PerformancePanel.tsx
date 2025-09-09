import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Zap,
  Eye,
  EyeOff,
  Gauge,
  Wifi,
  Wind,
  Sparkles,
} from "lucide-react";
import { usePerformance } from "../../contexts/PerformanceContext";
import GradientCard from "./GradientCard";

const PerformancePanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    settings,
    toggleBackgroundAnimations,
    toggleFramerAnimations,
    toggleCloudDrift,
    togglePulseGlow,
    applyPerformanceMode,
  } = usePerformance();

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-50 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 p-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Performance Settings"
      >
        <Gauge className="h-5 w-5" />
      </motion.button>

      {/* Performance Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <GradientCard gradient="blue" className="p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-gray-800/50 p-2">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Performance Settings
                    </h3>
                    <p className="text-sm text-gray-300">
                      Optimize your browsing experience
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Background Animations Toggle */}
                  <div className="flex items-center justify-between rounded-lg bg-gray-800/30 p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-gray-700/50 p-2">
                        {settings.backgroundAnimations ? (
                          <Eye className="text-accent-400 h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          Background Animations
                        </div>
                        <div className="text-xs text-gray-400">
                          Animated gradient backgrounds
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={toggleBackgroundAnimations}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.backgroundAnimations
                          ? "bg-accent-500"
                          : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.backgroundAnimations
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Framer Animations Toggle */}
                  <div className="flex items-center justify-between rounded-lg bg-gray-800/30 p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-gray-700/50 p-2">
                        <Zap
                          className={`h-4 w-4 ${settings.framerAnimations ? "text-accent-400" : "text-gray-400"}`}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          UI Animations
                        </div>
                        <div className="text-xs text-gray-400">
                          Page transitions and effects
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={toggleFramerAnimations}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.framerAnimations
                          ? "bg-accent-500"
                          : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.framerAnimations
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Individual Background Animation Controls */}
                  {settings.backgroundAnimations && (
                    <div className="space-y-3 rounded-lg border border-gray-700/50 bg-gray-900/30 p-4">
                      <h4 className="text-sm font-medium text-white">
                        Individual Animation Controls
                      </h4>

                      {/* Cloud Drift */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wind
                            className={`h-3 w-3 ${settings.cloudDrift ? "text-accent-400" : "text-gray-500"}`}
                          />
                          <span className="text-sm text-gray-300">
                            Cloud Drift (42s)
                          </span>
                        </div>
                        <button
                          onClick={toggleCloudDrift}
                          className={`h-5 w-9 rounded-full transition-colors ${
                            settings.cloudDrift
                              ? "bg-accent-500"
                              : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`h-3 w-3 rounded-full bg-white transition-transform ${
                              settings.cloudDrift
                                ? "translate-x-5"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Pulse Glow */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles
                            className={`h-3 w-3 ${settings.pulseGlow ? "text-accent-400" : "text-gray-500"}`}
                          />
                          <span className="text-sm text-gray-300">
                            Pulse Glow (12s)
                          </span>
                        </div>
                        <button
                          onClick={togglePulseGlow}
                          className={`h-5 w-9 rounded-full transition-colors ${
                            settings.pulseGlow ? "bg-accent-500" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`h-3 w-3 rounded-full bg-white transition-transform ${
                              settings.pulseGlow
                                ? "translate-x-5"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Performance Mode Button */}
                  <button
                    onClick={applyPerformanceMode}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 p-3 font-medium text-white transition-all duration-200 hover:from-orange-700 hover:to-red-700"
                  >
                    <Wifi className="h-4 w-4" />
                    Enable Performance Mode
                  </button>

                  {/* System Info */}
                  {settings.reducedMotion && (
                    <div className="rounded-lg border border-blue-700/50 bg-blue-900/30 p-3">
                      <div className="flex items-center gap-2 text-sm text-blue-300">
                        <Gauge className="h-4 w-4" />
                        System reduced motion preference detected
                      </div>
                    </div>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full p-2 text-gray-400 transition-colors hover:text-white"
                >
                  Close
                </button>
              </GradientCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformancePanel;
