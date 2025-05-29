import React from 'react';
import { Card, CardBody, Accordion, AccordionItem, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const WarrantyPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Kebijakan Garansi</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Kebijakan garansi kami yang komprehensif memastikan Anda mendapatkan layanan dan dukungan terbaik untuk cloud VPS/RDP Anda.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-content2/50 backdrop-blur-sm border border-white/10">
          <CardBody className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:shield" className="text-primary" />
                  <span>Jaminan Layanan</span>
                </h2>
                
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Kami menjamin kualitas dan keandalan layanan cloud VPS/RDP kami. Kebijakan garansi kami dirancang untuk memberikan ketenangan pikiran dan memastikan Anda menerima layanan terbaik.
                  </p>
                  
                  <div className="bg-content3/50 p-4 rounded-medium">
                    <h3 className="font-semibold mb-2">Jaminan Uptime 99,9%</h3>
                    <p className="text-sm">
                      Kami menjamin uptime 99,9% untuk semua layanan VPS kami. Jika kami gagal memenuhi komitmen ini, Anda akan menerima kredit layanan yang proporsional dengan waktu downtime yang terjadi:
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Di bawah 99,9% tapi di atas 99,0%: kredit 10%</li>
                      <li>Di bawah 99,0% tapi di atas 95,0%: kredit 25%</li>
                      <li>Di bawah 95,0%: kredit 50%</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Divider />
              
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:refresh-cw" className="text-primary" />
                  <span>Kebijakan Pengembalian Dana</span>
                </h2>
                
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Kami ingin Anda benar-benar puas dengan layanan kami. Jika karena alasan apapun Anda tidak puas, kami menawarkan kebijakan pengembalian dana yang adil dan transparan.
                  </p>
                  
                  <div className="bg-content3/50 p-4 rounded-medium">
                    <h3 className="font-semibold mb-2">Garansi Uang Kembali 7 Hari</h3>
                    <p className="text-sm">
                      Jika Anda tidak puas dengan layanan kami dalam 7 hari pertama setelah pembelian, Anda dapat meminta pengembalian dana penuh. Setelah 7 hari, pengembalian dana diberikan secara pro-rata dan akan ditinjau terlebih dahulu.
                    </p>
                  </div>
                  
                  <div className="bg-content3/50 p-4 rounded-medium">
                    <h3 className="font-semibold mb-2">Pengecualian Pengembalian Dana</h3>
                    <p className="text-sm">
                      Pengembalian dana tidak berlaku untuk kasus berikut:
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Layanan yang telah digunakan lebih dari 7 hari</li>
                      <li>Biaya pendaftaran domain</li>
                      <li>Biaya setup untuk konfigurasi khusus</li>
                      <li>Kasus pelanggaran syarat dan ketentuan layanan</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Divider />
              
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:headphones" className="text-primary" />
                  <span>Dukungan Teknis</span>
                </h2>
                
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Tim dukungan teknis kami siap membantu Anda jika mengalami masalah dengan layanan VPS/RDP Anda.
                  </p>
                  
                  <div className="bg-content3/50 p-4 rounded-medium">
                    <h3 className="font-semibold mb-2">Waktu Respon Dukungan</h3>
                    <p className="text-sm">
                      Kami menjamin waktu respon kurang dari 2 jam untuk semua tiket dukungan selama jam kerja. Untuk masalah kritis, kami berusaha merespon dalam waktu 30 menit.
                    </p>
                  </div>
                  
                  <div className="bg-content3/50 p-4 rounded-medium">
                    <h3 className="font-semibold mb-2">Cakupan Dukungan</h3>
                    <p className="text-sm">
                      Dukungan teknis kami mencakup:
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Masalah perangkat keras server dan jaringan</li>
                      <li>Instalasi dan konfigurasi OS dasar</li>
                      <li>Masalah panel kontrol</li>
                      <li>Insiden keamanan dan performa server</li>
                    </ul>
                    <p className="text-sm mt-2">
                      Catatan: Dukungan aplikasi spesifik dan konfigurasi khusus dapat dikenakan biaya tambahan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
          
          <Accordion variant="bordered" className="bg-content2/50 backdrop-blur-sm border border-white/10">
            <AccordionItem key="1" aria-label="FAQ 1" title="Bagaimana cara meminta pengembalian dana?">
              <p className="text-foreground/70 text-sm pb-2">
                Untuk meminta pengembalian dana, silakan hubungi tim dukungan kami melalui halaman kontak atau kirim email ke support@cloudvps.com. Sertakan nomor pesanan dan alasan permintaan pengembalian dana. Tim kami akan meninjau permintaan Anda dan merespon dalam 24 jam.
              </p>
            </AccordionItem>
            
            <AccordionItem key="2" aria-label="FAQ 2" title="Apa saja yang dicakup oleh garansi?">
              <p className="text-foreground/70 text-sm pb-2">
                Garansi kami mencakup kegagalan perangkat keras server, masalah jaringan, dan gangguan layanan yang disebabkan oleh infrastruktur kami. Tidak mencakup masalah yang disebabkan oleh aplikasi, skrip, atau konfigurasi Anda. Jika Anda mengalami masalah, tim dukungan kami akan membantu menentukan apakah masalah tersebut termasuk dalam garansi.
              </p>
            </AccordionItem>
            
            <AccordionItem key="3" aria-label="FAQ 3" title="Bagaimana perhitungan downtime untuk jaminan uptime?">
              <p className="text-foreground/70 text-sm pb-2">
                Downtime dihitung berdasarkan ketersediaan server dari sistem monitoring kami. Tidak termasuk pemeliharaan terjadwal (yang diumumkan sebelumnya), masalah dengan layanan pihak ketiga, atau masalah yang disebabkan oleh aplikasi atau konfigurasi Anda. Untuk klaim kredit layanan akibat downtime, Anda harus mengajukan permintaan dalam 7 hari setelah kejadian.
              </p>
            </AccordionItem>
            
            <AccordionItem key="4" aria-label="FAQ 4" title="Apakah Anda menyediakan layanan backup data?">
              <p className="text-foreground/70 text-sm pb-2">
                Kami melakukan backup sistem untuk keperluan pemulihan bencana, namun kami sangat menyarankan pelanggan untuk memiliki solusi backup data sendiri. Kami juga menyediakan layanan backup opsional dengan biaya tambahan, yang dapat dikonfigurasi untuk melakukan backup otomatis secara berkala.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  );
};
