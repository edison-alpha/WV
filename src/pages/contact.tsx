import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {

  const contactMethods = [
    {
      icon: "lucide:message-circle",
      title: "WhatsApp",
      value: "+62 812 3456 7890",
      link: "https://wa.me/6281234567890",
      color: "success"
    },
    {
      icon: "logos:telegram",
      title: "Telegram",
      value: "@cloudvps_support",
      link: "https://t.me/cloudvps_support",
      color: "primary"
    },
    {
      icon: "lucide:mail",
      title: "Email",
      value: "support@cloudvps.com",
      link: "mailto:support@cloudvps.com",
      color: "secondary"
    }
  ];
  
  const storeLinks = [
    {
      icon: "logos:shopee",
      title: "Shopee",
      value: "CloudVPS Official",
      link: "https://shopee.com/cloudvps",
    },
    {
      icon: "logos:tokopedia-icon",
      title: "Tokopedia",
      value: "CloudVPS Official Store",
      link: "https://tokopedia.com/cloudvps",
    },
    {
      icon: "logos:tiktok-icon",
      title: "TikTok Shop",
      value: "@cloudvps.official",
      link: "https://tiktok.com/@cloudvps.official",
    }
  ];
  
  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Punya pertanyaan atau butuh bantuan? Hubungi kami melalui salah satu saluran di bawah ini.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        > 
          <Card className="bg-content2/50 backdrop-blur-sm border border-white/10">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold mb-4">Toko Online Kami</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {storeLinks.map((store, index) => (
                  <a 
                    key={index}
                    href={store.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-content3/50 rounded-medium hover:bg-content3 transition-colors"
                  >
                    <Icon icon={store.icon} className="w-10 h-10 mb-3" />
                    <h3 className="font-medium text-center">{store.title}</h3>
                    <p className="text-xs text-foreground/70 text-center mt-1">{store.value}</p>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-content2/50 backdrop-blur-sm border border-white/10 sticky top-20">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-content3/50 p-3 rounded-medium transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full bg-${method.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <Icon icon={method.icon} className={`w-5 h-5 text-${method.color}`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="text-sm text-foreground/70">{method.value}</p>
                    </div>
                  </a>
                ))}
                
                <div className="pt-4">
                  <h3 className="font-medium mb-3">Jam Operasional</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex justify-between">
                      <span>Senin - Jumat:</span>
                      <span>09.00 - 18.00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu:</span>
                      <span>10.00 - 16.00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu:</span>
                      <span>Tutup</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-3">Waktu Respon</h3>
                  <p className="text-sm text-foreground/70">
                    Kami biasanya membalas semua pertanyaan dalam 2-4 jam selama jam operasional.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};