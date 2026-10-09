import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Check, Home, Shield, Droplets, Trees,
  Building2, Train, FileCheck, Users, ParkingCircle, Zap, DoorOpen,
  Church, Play, Dumbbell, LandPlot, Sprout, Lock, ArrowRight,
  Star, ChevronLeft, ChevronRight, Menu, X, MessageCircle,
  Navigation, School, Hospital, ShoppingBag, Mountain
} from 'lucide-react';

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const whatsappNumber = "6281219170078";
  const whatsappMessage = "Halo, saya tertarik dengan Griya Family 4 Cibitung. Bisa info lebih lanjut?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const keunggulan = [
    { icon: Navigation, title: "Dekat Tol Gabus", desc: "5 menit ke akses tol" },
    { icon: Train, title: "Dekat Stasiun Cibitung", desc: "15 menit ke KRL" },
    { icon: FileCheck, title: "SHM", desc: "Sertifikat Hak Milik" },
    { icon: Church, title: "Lingkungan Islami", desc: "Nyaman & religius" },
    { icon: Droplets, title: "Bebas Banjir", desc: "Drainase modern" },
    { icon: Lock, title: "One Gate System", desc: "Keamanan 24 jam" },
    { icon: Play, title: "Taman & Playground", desc: "Untuk keluarga" },
    { icon: Building2, title: "Masjid Modern", desc: "Di dalam kawasan" },
    { icon: Trees, title: "Jogging Track", desc: "Area hijau asri" },
    { icon: Mountain, title: "Cicilan Ringan", desc: "Mulai 1 jutaan" },
  ];

  const fasilitas = [
    { icon: Church, name: "Masjid Jami", image: "/images/masjid.jpg" },
    { icon: Play, name: "Playground", image: "/images/playground.jpg" },
    { icon: Trees, name: "Gazebo", image: "/images/hero.jpg" },
    { icon: Droplets, name: "Kolam Pemancingan", image: "/images/hero.jpg" },
    { icon: Dumbbell, name: "Lapangan Olahraga", image: "/images/jalan.jpg" },
    { icon: Building2, name: "Gedung Serbaguna", image: "/images/gerbang.jpg" },
    { icon: Sprout, name: "Area Hijau", image: "/images/playground.jpg" },
    { icon: LandPlot, name: "Jalan Lebar", image: "/images/jalan.jpg" },
    { icon: Shield, name: "Keamanan 24 Jam", image: "/images/gerbang.jpg" },
  ];

  const gallery = [
    { src: "/images/gerbang.jpg", title: "Gerbang Perumahan", desc: "One Gate System dengan keamanan 24 jam" },
    { src: "/images/rumah-eksterior.jpg", title: "Rumah Contoh", desc: "Type Topaz 36/60 modern minimalis" },
    { src: "/images/jalan.jpg", title: "Jalan Utama", desc: "Row jalan lebar 8 meter" },
    { src: "/images/masjid.jpg", title: "Masjid Modern", desc: "Masjid Jami di pusat kawasan" },
    { src: "/images/playground.jpg", title: "Fasilitas Umum", desc: "Taman bermain anak & ruang terbuka" },
    { src: "/images/siteplan.png", title: "Siteplan", desc: "Masterplan Griya Family 4" },
  ];

  const testimonials = [
    {
      name: "Bapak Ahmad & Keluarga",
      role: "Penghuni Blok C",
      text: "Alhamdulillah akhirnya punya rumah sendiri. Lingkungan islami, tetangga ramah, anak-anak betah main di playground. Cicilan juga sangat terjangkau untuk keluarga muda seperti kami.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
      name: "Ibu Siti Rahmah",
      role: "Penghuni Blok A",
      text: "Saya pilih Griya Family 4 karena dekat stasiun. Suami kerja di Jakarta, akses mudah. MasyaAllah masjidnya bagus, pengajian rutin tiap minggu. Lingkungan benar-benar nyaman.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
      name: "Keluarga Budi Santoso",
      role: "Penghuni Blok D",
      text: "Awalnya ragu rumah subsidi, tapi setelah lihat langsung kualitas bangunannya bagus. Sudah 2 tahun tinggal, tidak ada keluhan. Bebas banjir padahal musim hujan kemarin parah di Bekasi.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefcf8] text-stone-800" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif' }}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-900/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-800 flex items-center justify-center shadow-lg shadow-emerald-700/20">
                <Home className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="font-semibold text-[17px] leading-none tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Griya <span className="text-emerald-700">Family 4</span>
                </div>
                <div className="text-[11px] text-stone-500 font-medium tracking-wide">CIBITUNG</div>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center gap-8">
              {['Tentang', 'Keunggulan', 'Tipe', 'Fasilitas', 'Lokasi', 'Galeri'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[14px] font-medium text-stone-600 hover:text-emerald-700 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                className="hidden sm:flex items-center gap-2 px-5 h-10 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-[14px] font-medium transition-all hover:shadow-lg hover:shadow-emerald-700/25 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi
              </a>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden w-10 h-10 grid place-items-center rounded-xl hover:bg-stone-100">
                {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-stone-100 bg-white"
            >
              <div className="px-6 py-4 space-y-3">
                {['Tentang', 'Keunggulan', 'Tipe', 'Fasilitas', 'Lokasi', 'Galeri'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="block py-2 text-[15px] font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="Griya Family 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-900/75 to-emerald-950/90" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0l15 15-15 15-15-15z M0 30l15 15-15 15-15-15z M60 30l15 15-15 15-15-15z M30 60l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 backdrop-blur-md mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[12px] font-medium text-amber-100 tracking-wide uppercase">Subsidi Pemerintah • SHM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[clamp(36px,6vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Hunian Subsidi Modern
              <span className="block mt-1 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                Bernuansa Islami di Cibitung
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[18px] lg:text-[20px] leading-relaxed text-emerald-50/90 mb-10 max-w-xl"
            >
              Rumah nyaman, strategis, dan berkualitas dengan cicilan terjangkau. Dirancang untuk keluarga muslim yang menginginkan hunian asri dan religius.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                className="group relative h-12 px-8 rounded-full bg-white text-emerald-900 font-medium text-[15px] grid place-items-center overflow-hidden hover:shadow-xl hover:shadow-white/20 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Survey Lokasi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                className="h-12 px-8 rounded-full bg-emerald-700/30 backdrop-blur-md border border-white/20 text-white font-medium text-[15px] grid place-items-center hover:bg-emerald-700/40 transition-colors"
              >
                Hubungi Marketing
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: "1.000+", label: "Unit Terhuni" },
                { value: "185", label: "Jutaan Mulai" },
                { value: "5 Menit", label: "Ke Tol Gabus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[28px] font-semibold text-amber-300" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.value}</div>
                  <div className="text-[13px] text-emerald-100/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Tentang Kami</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Kawasan hunian subsidi modern di jantung Bekasi
              </h2>
              <div className="space-y-4 text-[16px] leading-relaxed text-stone-600">
                <p>
                  <strong className="text-stone-900 font-medium">Griya Family 4</strong> adalah kawasan hunian subsidi modern di Cibitung Bekasi, dikembangkan oleh <strong className="text-stone-900 font-medium">PT Bangun Famili Sejahtera</strong>.
                </p>
                <p>
                  Mengusung konsep hunian nyaman, islami, dan ramah keluarga. Dirancang khusus untuk keluarga muda muslim yang mendambakan lingkungan asri, aman, dan religius dengan harga terjangkau.
                </p>
                <p>
                  Sudah ribuan unit terbangun dan dihuni, dengan legalitas SHM dan dukungan KPR subsidi pemerintah.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["SHM Ready", "KPR Subsidi", "Bebas Banjir", "One Gate"].map((tag) => (
                  <div key={tag} className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-[13px] font-medium border border-emerald-100">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-[2rem] blur-2xl opacity-40" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                      <img src="/images/rumah-eksterior.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <img src="/images/playground.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                      <img src="/images/masjid.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                      <img src="/images/jalan.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-20 lg:py-28 bg-[#f9f7f3] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Keunggulan</span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Mengapa memilih Griya Family 4?
            </h2>
            <p className="text-[16px] text-stone-600">Lokasi strategis dengan fasilitas lengkap untuk kenyamanan keluarga Anda</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {keunggulan.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white rounded-2xl p-6 border border-stone-200/60 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[15px] mb-1">{item.title}</h3>
                <p className="text-[13px] text-stone-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipe Rumah */}
      <section id="tipe" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Tipe Rumah</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Type Topaz 36/60
              </h2>
              <p className="text-[16px] leading-relaxed text-stone-600 mb-8">
                Desain minimalis modern dengan tata ruang optimal untuk keluarga muda. Bangunan kokoh, sirkulasi udara baik, dan pencahayaan alami maksimal.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: DoorOpen, label: "2 Kamar Tidur", desc: "Nyaman untuk keluarga" },
                  { icon: Home, label: "1 Kamar Mandi", desc: "Keramik full" },
                  { icon: ParkingCircle, label: "Carport", desc: "Muat 1 mobil" },
                  { icon: Zap, label: "Listrik 1300 Watt", desc: "Siap huni" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 grid place-items-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[15px]">{item.label}</div>
                      <div className="text-[13px] text-stone-500">{item.desc}</div>
                    </div>
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-3 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100">
                <div>
                  <div className="text-[13px] text-stone-600 mb-1">Harga mulai</div>
                  <div className="text-[32px] font-semibold leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Rp 185 <span className="text-[20px]">jutaan</span>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[12px] px-2.5 py-1 rounded-full bg-emerald-700 text-white font-medium">Subsidi</div>
                  <div className="text-[12px] text-stone-500 mt-1">Cicilan 1 jutaan</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-600/10 to-amber-500/10 rounded-[2.5rem] blur-2xl" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src="/images/rumah-contoh.jpg" alt="Type Topaz" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-3">
                      <Home className="w-3.5 h-3.5 text-white" />
                      <span className="text-[12px] font-medium text-white">Ready Stock</span>
                    </div>
                    <h3 className="text-[24px] font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Rumah Contoh Siap Dikunjungi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spesifikasi */}
      <section className="py-16 bg-[#0f1f1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-[28px] font-semibold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Spesifikasi Bangunan</h3>
              <p className="text-emerald-100/70">Material berkualitas dengan standar konstruksi terbaik</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Rangka atap baja ringan",
                  "Genteng beton",
                  "Dinding batako double finishing",
                  "Keramik 40x40",
                  "Pondasi batu kali & cakar ayam",
                  "Plafon hollow + GRC",
                  "Pintu panel kayu",
                  "Septictank besar"
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-3 py-2">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 grid place-items-center flex-shrink-0">
                      <Check className="w-3 h-3 text-amber-400" />
                    </div>
                    <span className="text-[14px] text-emerald-50/90">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Fasilitas Kawasan</span>
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Lengkap untuk kehidupan yang lebih baik
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {fasilitas.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center mb-3">
                    <item.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="py-20 lg:py-28 bg-[#f9f7f3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Lokasi Strategis</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Akses mudah ke mana saja
              </h2>
              <p className="text-[16px] text-stone-600 mb-8">Berada di Cibitung, Bekasi dengan akses langsung ke tol, stasiun, dan pusat perbelanjaan.</p>
              
              <div className="space-y-3">
                {[
                  { icon: Navigation, name: "Dekat akses Tol Gabus", time: "5 menit" },
                  { icon: Train, name: "Dekat Stasiun Cibitung", time: "15 menit" },
                  { icon: School, name: "Dekat sekolah", time: "5-10 menit" },
                  { icon: Hospital, name: "Dekat rumah sakit", time: "10 menit" },
                  { icon: ShoppingBag, name: "Dekat pasar", time: "5 menit" },
                  { icon: Building2, name: "Dekat Summarecon Bekasi", time: "20 menit" },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-center gap-4 p-3 rounded-xl bg-white border border-stone-200/60">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 grid place-items-center">
                      <loc.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[14px]">{loc.name}</div>
                    </div>
                    <div className="text-[13px] font-medium text-emerald-700">{loc.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="sticky top-24">
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-xl border border-stone-200 bg-white p-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d107.1!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwN8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '1rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Griya Family 4"
                  />
                </div>
                <div className="mt-4 flex items-start gap-3 p-4 rounded-2xl bg-emerald-700 text-white">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-[14px] mb-1">Alamat Marketing Gallery</div>
                    <div className="text-[13px] leading-relaxed text-emerald-50">Jl. Raya Kali CBL, Sarimukti, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-[13px] font-semibold tracking-widest text-emerald-700 uppercase">Galeri</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Lihat keindahan kawasan
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveGallery(i)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden text-left"
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-[13px] text-white/80 line-clamp-1">{item.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 lg:py-28 bg-[#0f1f1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-[13px] font-semibold tracking-widest text-amber-400 uppercase">Testimoni</span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Kata mereka yang sudah tinggal
            </h2>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-12"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-[20px] lg:text-[24px] leading-relaxed text-white mb-8 font-light">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img src={testimonials[currentTestimonial].image} alt="" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-white">{testimonials[currentTestimonial].name}</div>
                    <div className="text-[14px] text-emerald-200/70">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`transition-all ${i === currentTestimonial ? 'w-8 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30'} rounded-full`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Akhir */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f9f7f3] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='1'%3E%3Cpath d='M40 0c22 0 40 18 40 40S62 80 40 80 0 62 0 40 18 0 40 0zm0 8C22.3 8 8 22.3 8 40s14.3 32 32 32 32-14.3 32-32S57.7 8 40 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-[13px] font-medium mb-6">
              <Clock className="w-4 h-4" />
              Unit Terbatas • Promo Akhir Tahun
            </div>
            
            <h2 className="text-[36px] lg:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Miliki Rumah Impian Anda
              <span className="block text-emerald-700">Sekarang Juga</span>
            </h2>
            
            <p className="text-[18px] text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Jangan tunda lagi. Dapatkan hunian subsidi berkualitas dengan lokasi strategis dan lingkungan islami. Konsultasi gratis dengan marketing kami.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                className="group relative h-14 px-8 rounded-full bg-emerald-700 text-white font-medium text-[16px] flex items-center gap-3 hover:bg-emerald-800 transition-all hover:shadow-xl hover:shadow-emerald-700/25 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp Marketing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-3 text-[14px] text-stone-600">
                <Phone className="w-4 h-4" />
                <span>atau hubungi <strong className="text-stone-900">0812-1917-0078</strong></span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap justify-center gap-8 text-[14px]">
              {[
                "✓ Survey lokasi gratis",
                "✓ Simulasi KPR",
                "✓ Tanpa DP*",
                "✓ Proses cepat"
              ].map((item) => (
                <div key={item} className="text-stone-600">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1410] text-emerald-50/80 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
                  <Home className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Griya Family 4 Cibitung</div>
                  <div className="text-[12px] text-emerald-200/60">by PT Bangun Famili Sejahtera</div>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed mb-6 max-w-sm">
                Hunian subsidi modern bernuansa islami di Cibitung Bekasi. Nyaman, strategis, dan terjangkau untuk keluarga Indonesia.
              </p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'YouTube'].map((soc) => (
                  <a key={soc} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 grid place-items-center transition-colors text-[12px]">{soc[0]}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-medium text-white mb-4">Kontak</h4>
              <div className="space-y-3 text-[14px]">
                <a href={whatsappUrl} target="_blank" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>0812-1917-0078</span>
                </a>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>marketing@griyafamily4.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Jl. Raya Kali CBL, Sarimukti, Cibitung, Bekasi 17520</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-medium text-white mb-4">Menu</h4>
              <div className="space-y-2.5 text-[14px]">
                {['Tentang', 'Tipe Rumah', 'Fasilitas', 'Lokasi', 'Galeri', 'Kontak'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="block hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-medium text-white mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-[14px]">
                <div>Senin - Minggu</div>
                <div className="text-emerald-200">08:00 - 17:00 WIB</div>
                <div className="pt-2 text-[12px] text-emerald-200/60">Survey lokasi setiap hari</div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
            <div>© 2024 Griya Family 4 Cibitung. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-green-600/20 grid place-items-center hover:scale-105 transition-transform group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-[12px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat Marketing</span>
      </a>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {activeGallery !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl grid place-items-center p-4 lg:p-8"
            onClick={() => setActiveGallery(null)}
          >
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 grid place-items-center text-white hover:bg-white/20" onClick={() => setActiveGallery(null)}>
              <X className="w-5 h-5" />
            </button>
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <img src={gallery[activeGallery].src} alt="" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
              <div className="mt-6 text-center">
                <h3 className="text-[20px] font-medium text-white mb-1">{gallery[activeGallery].title}</h3>
                <p className="text-white/70">{gallery[activeGallery].desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f5f5f4; }
        ::-webkit-scrollbar-thumb { background: #047857; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #065f46; }
      `}</style>
    </div>
  );
}