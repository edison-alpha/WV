import React from 'react';
import { Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "@heroui/use-theme";

export const LoadingScreen: React.FC = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for the icon (water to icon effect)
  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  // Animation variants for the website name
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.7,
      },
    },
  };

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-background' : 'bg-background'}`}>
      {/* Logo and Name in the center */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center mb-4"
        >
          <Icon 
            icon="lucide:cloud" 
            className="w-8 h-8 text-primary" 
          />
        </motion.div>
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-4xl font-bold tracking-tight"
        >
          <span className="text-primary">Warung</span>
          <span className="text-foreground">Virtual</span>
        </motion.h1>
      </motion.div>

      {/* Progress bar */}
      <div className="w-64 mb-4">
        <Progress 
          aria-label="Loading..." 
          value={progress} 
          color="primary"
          className="h-1"
          showValueLabel={false}
        />
      </div>

      {/* Large percentage in bottom right */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-[120px] font-bold leading-none tracking-tighter text-primary/20">
          {Math.round(progress)}%
        </h1>
      </motion.div>
    </div>
  );
};
