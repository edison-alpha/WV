import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  avatar,
  content,
  rating,
  date
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-content2/50 backdrop-blur-sm border border-white/10">
        <CardBody className="p-5">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <Avatar src={avatar} name={name} />
                <div>
                  <h4 className="font-medium">{name}</h4>
                  <p className="text-xs text-foreground/70">{role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon 
                    key={i}
                    icon={i < rating ? "lucide:star" : "lucide:star"} 
                    className={`w-4 h-4 ${i < rating ? 'text-warning' : 'text-foreground/30'}`}
                    fill={i < rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-foreground/80 text-sm">{content}</p>
            </div>
            
            <div className="text-xs text-foreground/50">
              {date}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};