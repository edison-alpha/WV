import React from 'react';
import { Card, CardBody, Accordion, AccordionItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

// Information data
const suspensionReasons = [
  {
    title: "Penyalahgunaan Layanan",
    description: "Akun yang digunakan untuk aktivitas ilegal seperti DDoS, spam, atau mining cryptocurrency bisa langsung terkena suspend.",
    icon: "lucide:shield-alert"
  },
  {
    title: "Konsumsi Sumber Daya Berlebihan",
    description: "Penggunaan CPU, RAM, atau bandwidth yang melebihi batas layanan bisa menyebabkan akun ditangguhkan.",
    icon: "lucide:cpu"
  },
  {
    title: "Penggunaan Alamat IP yang Sama",
    description: "Login ke beberapa akun menggunakan IP yang sama dapat memicu sistem deteksi fraud.",
    icon: "lucide:network"
  },
  {
    title: "Jejak Digital yang Sama",
    description: "Browser fingerprinting bisa mendeteksi login berulang dengan pola yang sama.",
    icon: "lucide:fingerprint"
  },
  {
    title: "Penyimpanan Konten Terlarang",
    description: "Mengunggah software bajakan atau konten ilegal bisa menyebabkan akun diblokir permanen.",
    icon: "lucide:file-warning"
  },
  {
    title: "Keamanan yang Kurang Memadai",
    description: "Port yang terbuka tanpa proteksi bisa membuat akun rentan terhadap serangan.",
    icon: "lucide:lock-open"
  }
];

const safetyTips = [
  {
    title: "Buat VPS dengan Jeda Waktu",
    description: "Hindari membuat banyak VPS dalam waktu singkat.",
    icon: "lucide:clock"
  },
  {
    title: "Gunakan Port yang Tidak Umum",
    description: "Ubahlah port default ke port lain yang lebih aman.",
    icon: "lucide:plug"
  },
  {
    title: "Gunakan VPN Premium",
    description: "Hindari VPN gratis yang bisa memicu deteksi fraud.",
    icon: "lucide:shield"
  },
  {
    title: "Gunakan Browser Anti-Deteksi",
    description: "Browser khusus seperti GoLogin bisa membantu menghindari fingerprinting.",
    icon: "lucide:globe"
  },
  {
    title: "Pantau Penggunaan Sumber Daya",
    description: "Pastikan penggunaan CPU, RAM, dan bandwidth tetap dalam batas normal.",
    icon: "lucide:activity"
  },
  {
    title: "Lakukan Backup Berkala",
    description: "Selalu buat cadangan data untuk menghindari kehilangan data penting.",
    icon: "lucide:save"
  }
];

const safeUsageTips = [
  {
    title: "Jangan Ubah Email Contact Team",
    description: "Mengakibatkan limit droplets turun jadi 3 jika kamu membeli limit 10.",
    icon: "lucide:mail"
  },
  {
    title: "Billing",
    description: "Menambah/Mengganti metode pembayaran sebelum saldo bonus habis.",
    icon: "lucide:credit-card"
  },
  {
    title: "Create New Team",
    description: "Berpotensi akun dapat tersuspensi.",
    icon: "lucide:users"
  },
  {
    title: "Login Banyak Akun",
    description: "Gunakan Anti-Deteksi Browser seperti ADS Power/Go Login/Bit Browser atau jika di HP bisa menggunakan GoLogin mobile.",
    icon: "lucide:log-in"
  }
];

export const InfoPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Informasi & Panduan</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Informasi penting tentang penyebab akun terkena suspend dan tips keamanan agar pengalaman VPS Anda tetap lancar.
        </p>
      </motion.div>
      
      <div className="space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon icon="lucide:alert-triangle" className="text-danger" />
            <span>Penyebab Akun Kena Suspend</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suspensionReasons.map((item, index) => (
              <Card key={index} className="bg-content2/50 backdrop-blur-sm border border-white/10">
                <CardBody className="p-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} className="w-5 h-5 text-danger" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{index + 1}. {item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon icon="lucide:lightbulb" className="text-warning" />
            <span>Tips Aman Agar Akun Tidak Suspend</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((item, index) => (
              <Card key={index} className="bg-content2/50 backdrop-blur-sm border border-white/10">
                <CardBody className="p-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{index + 1}. {item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon icon="lucide:check-circle" className="text-success" />
            <span>Aman Dalam Penggunaan</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safeUsageTips.map((item, index) => (
              <Card key={index} className="bg-content2/50 backdrop-blur-sm border border-white/10">
                <CardBody className="p-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{index + 1}. {item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <Accordion variant="bordered" className="bg-content2/50 backdrop-blur-sm border border-white/10">
            <AccordionItem key="1" aria-label="FAQ 1" title="Apa yang harus saya lakukan jika akun saya tersuspend?">
              <p className="text-foreground/70 text-sm pb-2">
                Jika akun Anda tersuspend, segera hubungi tim dukungan kami melalui email atau live chat. 
                Berikan detail akun Anda dan jelaskan situasinya. Tim kami akan meninjau kasus Anda dan 
                memberikan solusi yang sesuai.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="FAQ 2" title="Bagaimana cara mengamankan VPS saya?">
              <p className="text-foreground/70 text-sm pb-2">
                Untuk mengamankan VPS Anda: gunakan password yang kuat, perbarui sistem secara berkala, 
                konfigurasikan firewall dengan benar, gunakan SSH key daripada password, nonaktifkan 
                login root, dan pasang software keamanan seperti fail2ban.
              </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="FAQ 3" title="Apakah saya bisa menggunakan VPS untuk mining cryptocurrency?">
              <p className="text-foreground/70 text-sm pb-2">
                Tidak, penggunaan VPS untuk mining cryptocurrency tidak diperbolehkan dan dapat menyebabkan 
                akun Anda tersuspend. Mining cryptocurrency membutuhkan sumber daya yang besar dan dapat 
                memengaruhi performa server lain.
              </p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="FAQ 4" title="Berapa batas penggunaan bandwidth yang diperbolehkan?">
              <p className="text-foreground/70 text-sm pb-2">
                Batas penggunaan bandwidth bervariasi tergantung pada paket VPS yang Anda pilih. 
                Informasi detail tentang batas bandwidth dapat dilihat pada deskripsi produk. 
                Penggunaan yang melebihi batas dapat dikenakan biaya tambahan atau pembatasan.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </div>
    </div>
  );
};