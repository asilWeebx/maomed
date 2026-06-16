import { motion } from 'framer-motion';
import { Phone, Send, MapPin, Heart } from 'lucide-react';

const links = {
  "Xizmatlar": ["Kardiologiya", "Stomatologiya", "Ginekologiya", "Pediatriya", "UZI diagnostika", "Laboratoriya"],
  "Klinika": ["Biz haqimizda", "Shifokorlar", "Yangiliklarlar", "Karyera", "Litsenziyalar"],
  "Yordam": ["Savol-javob", "Online qabul", "Narxlar", "Sug'urta", "Aloqa"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">MAOMED</span>
                <p className="text-[10px] text-blue-400 font-medium tracking-widest uppercase">Medical Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Qarshidagi eng ishonchli tibbiyot markazi. Zamonaviy uskunalar, tajribali shifokorlar va premium xizmat.
            </p>

            {/* Contact quick links */}
            <div className="space-y-3">
              <a href="tel:+998901234567" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <Phone size={14} />
                </div>
                +998 90 123 45 67
              </a>
              <a href="https://t.me/maomed_clinic" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-sky-500 flex items-center justify-center transition-colors">
                  <Send size={14} />
                </div>
                @maomed_clinic
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                Uzbekiston, Qarshi shahri
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Savollaringiz bormi? Bizga qo'ng'iroq qiling — 24/7 yordam beramiz.
            </p>
            <a
              href="#appointment"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 whitespace-nowrap"
            >
              Qabulga yozilish
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            ©  MAOMED Medical Center. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Sog'ligingiz uchun <Heart size={12} className="text-red-400" /> bilan yaratildi
          </p>
        </div>
      </div>
    </footer>
  );
}
