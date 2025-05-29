import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '../components/testimonial-card';

// Extended testimonial data
const testimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Web Developer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
    content: "The VPS service is incredibly reliable. I've been using it for my client projects for months without any downtime. Highly recommended!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Software Engineer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
    content: "Great performance and excellent customer support. Whenever I had an issue, they resolved it within hours.",
    rating: 4,
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Game Developer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
    content: "I use their VPS for game servers and the performance is outstanding. The pricing is also very competitive compared to other providers.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Data Scientist",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=4",
    content: "The computing power is perfect for my data analysis tasks. I can run complex algorithms without any lag or performance issues.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "5",
    name: "David Kim",
    role: "DevOps Engineer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
    content: "I've tried many VPS providers, but this one stands out for its reliability and ease of use. The control panel is intuitive and feature-rich.",
    rating: 4,
    date: "2 months ago"
  },
  {
    id: "6",
    name: "Lisa Wang",
    role: "E-commerce Owner",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
    content: "My online store runs smoothly on this VPS. Even during high traffic periods, there's no slowdown. Customer support is also very responsive.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: "7",
    name: "Robert Martinez",
    role: "System Administrator",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=7",
    content: "The security features are top-notch. I appreciate the regular security updates and the ability to customize firewall settings easily.",
    rating: 4,
    date: "1 month ago"
  },
  {
    id: "8",
    name: "Jennifer Lee",
    role: "Startup Founder",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=8",
    content: "As a startup, we needed a cost-effective but reliable solution. This VPS service has been perfect for our needs and has scaled well as we've grown.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: "9",
    name: "Thomas Wilson",
    role: "Freelance Developer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=9",
    content: "I host multiple client websites on this VPS and have never had any issues. The ability to create separate environments for each client is invaluable.",
    rating: 4,
    date: "3 weeks ago"
  }
];

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Testimoni Pelanggan</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Lihat apa kata pelanggan kami tentang pengalaman mereka menggunakan layanan cloud VPS/RDP kami.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};