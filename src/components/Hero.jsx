import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Star, Clock } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-50 to-sky-100 opacity-60" />
        <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-sky-50 to-blue-100 opacity-50" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">Toshkentdagi #1 tibbiyot markazi</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight">
            Sog'lig'ingiz{' '}
            <span className="relative">
              <span className="text-gradient">biz uchun</span>
            </span>
            <br />
            <span className="text-gray-900">muhim</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-6 text-lg lg:text-xl text-gray-500 leading-relaxed max-w-xl">
            MAOMED tibbiyot markazida zamonaviy uskunalar va tajribali mutaxassislar yordamida siz va oilangizning sog'ligini saqlashga yordam beramiz.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="group flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Qabulga yozilish
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:+998901234567"
              className="group flex items-center gap-2 px-7 py-4 bg-white border-2 border-gray-200 hover:border-blue-200 text-gray-700 hover:text-blue-600 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Bog'lanish
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.5)} className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: Shield, label: "Sifat kafolati" },
              { icon: Star, label: "98% mamnunlik" },
              { icon: Clock, label: "24/7 navbatchi" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={16} className="text-blue-500" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Hero Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
              alt="Modern medical clinic"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>

          {/* Floating card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/80 border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Bugungi qabullar</p>
                <p className="text-xl font-bold text-gray-900">142</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/80 border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-400">10,000+ bemor</p>
            <p className="text-sm font-semibold text-gray-800">Barchasidan mamnun</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Pastga aylantiring</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
