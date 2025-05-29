import React from 'react';
import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { HeroSection } from '../components/hero-section';
import { ProductCard, ProductProps } from '../components/product-card';
import { FeatureCard } from '../components/feature-card';
import { TestimonialCard, TestimonialProps } from '../components/testimonial-card';

// Data produk contoh
const products: ProductProps[] = [
  {
    id: "digital-ocean-free",
    name: "Digital Ocean Free Tier",
    description: "VPS cloud dasar dengan infrastruktur Digital Ocean",
    price: 50000,
    stock: 15,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "25 GB SSD",
      "1 TB Transfer",
      "Gratis Setup"
    ],
    duration: "1 Bulan"
  },
  {
    id: "aws-free",
    name: "AWS Free Tier",
    description: "VPS AWS (Amazon Web Services) gratis",
    price: 75000,
    stock: 8,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "30 GB SSD",
      "15 GB Transfer/bulan",
      "Gratis Setup"
    ],
    duration: "1 Bulan"
  },
  {
    id: "google-cloud-free",
    name: "Google Cloud Free Tier",
    description: "VPS Google Cloud Platform gratis",
    price: 80000,
    stock: 12,
    features: [
      "0.6 GB RAM",
      "1 vCPU",
      "30 GB SSD",
      "1 GB Transfer/hari",
      "Gratis Setup"
    ],
    duration: "1 Bulan"
  },
  {
    id: "ai-voe-free",
    name: "AI Voe Free Tier",
    description: "VPS optimalisasi AI dengan masa berlaku 9 bulan",
    price: 120000,
    stock: 5,
    features: [
      "2 GB RAM",
      "2 vCPU",
      "40 GB SSD",
      "Transfer Unlimited",
      "Akselerasi AI"
    ],
    duration: "9 Bulan"
  },
  {
    id: "alibaba-ft-3month",
    name: "Alibaba FT VPS",
    description: "VPS Alibaba Cloud gratis dengan periode lebih lama",
    price: 90000,
    stock: 10,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "40 GB SSD",
      "1 TB Transfer",
      "Gratis Setup"
    ],
    duration: "3 Bulan"
  },
  {
    id: "digital-ocean-limit-10",
    name: "DigitalOcean Limit 10 PayPal",
    description: "VPS Digital Ocean premium dengan limit lebih tinggi",
    price: 150000,
    stock: 3,
    features: [
      "2 GB RAM",
      "2 vCPU",
      "50 GB SSD",
      "2 TB Transfer",
      "Limit 10 Droplet",
      "Metode Pembayaran PayPal"
    ],
    duration: "2 Bulan"
  },
  {
    id: "aws-premium",
    name: "AWS Premium VPS",
    description: "VPS AWS performa tinggi untuk aplikasi berat",
    price: 200000,
    stock: 0,
    features: [
      "4 GB RAM",
      "2 vCPU",
      "80 GB SSD",
      "3 TB Transfer",
      "Dukungan Premium"
    ],
    isPreOrder: true,
    duration: "1 Bulan"
  },
  {
    id: "google-cloud-premium",
    name: "Google Cloud Premium",
    description: "VPS Google Cloud dengan fitur premium",
    price: 180000,
    stock: 0,
    features: [
      "4 GB RAM",
      "2 vCPU",
      "60 GB SSD",
      "2 TB Transfer",
      "Dukungan Premium"
    ],
    isPreOrder: true,
    duration: "1 Bulan"
  }
];

// Data testimoni contoh
const testimonials: TestimonialProps[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Web Developer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
    content: "Layanan VPS sangat andal. Saya sudah pakai untuk proyek klien selama berbulan-bulan tanpa downtime. Sangat direkomendasikan!",
    rating: 5,
    date: "2 minggu lalu"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Software Engineer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
    content: "Performa bagus dan dukungan pelanggan luar biasa. Setiap ada masalah, selalu cepat diselesaikan.",
    rating: 4,
    date: "1 bulan lalu"
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Game Developer",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
    content: "Saya pakai VPS mereka untuk server game dan performanya mantap. Harganya juga sangat bersaing dibanding provider lain.",
    rating: 5,
    date: "3 minggu lalu"
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      
      <section id="features" className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kenapa Pilih Layanan VPS Kami</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Kami menyediakan layanan cloud VPS/RDP berkualitas tinggi dengan performa, 
              keandalan, dan keamanan terbaik dengan harga bersaing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon="lucide:zap" 
              title="Performa Tinggi" 
              description="Server VPS kami dioptimalkan untuk performa maksimal dengan SSD dan jaringan berkecepatan tinggi."
              color="primary"
            />
            <FeatureCard 
              icon="lucide:shield" 
              title="Keamanan Terjamin" 
              description="Keamanan tingkat enterprise untuk menjaga data dan aplikasi Anda tetap aman."
              color="secondary"
            />
            <FeatureCard 
              icon="lucide:clock" 
              title="99.9% Uptime" 
              description="Kami menjamin uptime 99.9% untuk semua layanan VPS dengan downtime minimal."
              color="success"
            />
            <FeatureCard 
              icon="lucide:headphones" 
              title="Dukungan 24/7" 
              description="Tim support teknis kami siap membantu Anda 24 jam setiap hari."
              color="warning"
            />
          </div>
        </div>
      </section>
      
      <Divider className="my-8" />
      
      <section id="products" className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produk Tersedia</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Pilih dari berbagai layanan cloud VPS/RDP kami yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      <Divider className="my-8" />
      
      <section id="testimonials" className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Jangan hanya percaya kata kami. Lihat apa kata pelanggan tentang layanan kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Lihat semua testimoni
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </section>
      
      <section id="warranty" className="py-8 bg-content2/30 backdrop-blur-sm rounded-xl border border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Kebijakan Garansi Kami</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Kami memberikan jaminan layanan dengan kebijakan garansi yang komprehensif.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-content3/50 p-4 rounded-medium">
                <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  Jaminan Layanan
                </h3>
                <p className="text-foreground/70 text-sm">
                  Kami menjamin uptime 99.9% untuk semua layanan VPS. Jika kami gagal memenuhi komitmen ini, 
                  Anda akan menerima kredit layanan sesuai dengan downtime yang terjadi.
                </p>
              </div>
              
              <div className="bg-content3/50 p-4 rounded-medium">
                <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  Kebijakan Refund
                </h3>
                <p className="text-foreground/70 text-sm">
                  Jika Anda tidak puas dengan layanan kami dalam 7 hari pertama pembelian, 
                  Anda dapat meminta refund penuh. Setelah 7 hari, refund diberikan secara pro-rata.
                </p>
              </div>
              
              <div className="bg-content3/50 p-4 rounded-medium">
                <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  Dukungan Teknis
                </h3>
                <p className="text-foreground/70 text-sm">
                  Tim support teknis kami siap membantu Anda 24/7. 
                  Kami menjamin waktu respon kurang dari 2 jam untuk setiap tiket support.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="/warranty" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Baca kebijakan garansi lengkap
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};