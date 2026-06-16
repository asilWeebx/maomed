import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Shifokorlar", href: "#doctors" },
  { label: "Haqimizda", href: "#advantages" },
  { label: "Aloqa", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl text-gray-900 tracking-tight">MAOMED</span>
                <span className="text-[10px] text-blue-500 font-medium tracking-widest uppercase">Medical Center</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+998901234567" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <Phone size={15} />
                +998 90 123 45 67
              </a>
              <a
                href="#appointment"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Qabulga yozilish
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 px-4 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMenuOpen(false)}
                className="mt-4 py-4 px-4 text-center text-lg font-semibold text-white bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/25"
              >
                Qabulga yozilish
              </a>
              <a href="tel:+998901234567" className="py-4 flex items-center justify-center gap-2 text-gray-600">
                <Phone size={18} />
                +998 90 123 45 67
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
