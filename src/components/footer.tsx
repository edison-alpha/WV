import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content1/50 backdrop-blur-md border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
                <Icon icon="lucide:cloud" className="w-8 h-8 text-primary" />
              </div>
              <p className="font-bold text-xl">Warung Virtual</p>
            </div>
            <p className="text-foreground/70 text-sm">
              Layanan VPS/RDP untuk semua kebutuhan Anda. Cepat, andal, dan aman.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/testimonials" className="text-sm text-foreground/70 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/info" className="text-sm text-foreground/70 hover:text-primary transition-colors">Information</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/warranty" className="text-sm text-foreground/70 hover:text-primary transition-colors">Warranty</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-foreground/70">Digital Ocean Free Tier</span></li>
              <li><span className="text-sm text-foreground/70">AWS Free Tier</span></li>
              <li><span className="text-sm text-foreground/70">Google Cloud Free Tier</span></li>
              <li><span className="text-sm text-foreground/70">AI Voe Free Tier</span></li>
              <li><span className="text-sm text-foreground/70">Alibaba Free Tier</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                  <Icon icon="lucide:message-circle" className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/cloudvps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                  <Icon icon="logos:telegram" className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@cloudvps.com" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                  <Icon icon="lucide:mail" className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
      </div>
              <div className="flex flex-col items-center justify-end mt-0">
          <div className="flex items-end justify-center gap-4 w-full mb-{-100px}">
            <div className="relative w-24 h-24 mb-2">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <Icon icon="lucide:cloud" className="w-24 h-24 text-primary" />
            </div>
            <p className="font-bold text-primary leading-none" style={{ fontSize: "14rem" }}>WR.VIRTUAL</p>
          </div>
        </div>
    </footer>
  );
};