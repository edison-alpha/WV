import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = "primary"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-content2/50 backdrop-blur-sm border border-white/10 h-full">
        <CardBody className="p-5">
          <div className="flex flex-col gap-4">
            <div className={`w-12 h-12 rounded-full bg-${color}/20 flex items-center justify-center`}>
              <Icon icon={icon} className={`w-6 h-6 text-${color}`} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-foreground/70 text-sm">{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};