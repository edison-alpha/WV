import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
              <p className="text-xs font-medium text-primary flex items-center gap-1.5">
                <Icon icon="lucide:zap" className="w-3.5 h-3.5" />
                Ready VPS/RDP full garansi
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Semua produk yang kami jual bergaransi <span className="text-primary">VPS</span> untuk ngerjain node, buat server, dll.
            </h1>
            
            <p className="text-foreground/70 text-lg max-w-xl">
              Kami menyediakan berbagai produk VPS dan RDP dengan performa tinggi, keamanan terjamin, dan dukungan pelanggan 24/7. 
              Temukan solusi hosting yang tepat untuk kebutuhan Anda, mulai dari pengembangan aplikasi hingga game server.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                as={Link}
                to="/products"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Produk yang tersedia
              </Button>
              
              <Button 
                as={Link}
                to="/contact"
                variant="flat"
                size="lg"
                endContent={<Icon icon="lucide:message-square" />}
              >
                Kontak
              </Button>
            </div>
            
            {/* <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <img src="https://img.heroui.chat/image/avatar?w=40&h=40&u=1" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://img.heroui.chat/image/avatar?w=40&h=40&u=2" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://img.heroui.chat/image/avatar?w=40&h=40&u=3" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://img.heroui.chat/image/avatar?w=40&h=40&u=4" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              </div>
              <p className="text-sm text-foreground/70">
                <span className="text-primary font-medium">500+</span> satisfied customers
              </p>
            </div> */}
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=cloudserver" 
                alt="Cloud Server" 
                className="w-full h-auto rounded-xl shadow-xl border border-white/10"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-content2/80 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:cpu" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70">Uptime</p>
                    <p className="font-semibold">99.9% Guaranteed</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-content2/80 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:shield" className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70">Security</p>
                    <p className="font-semibold">Enterprise Grade</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-full h-full top-0 left-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};