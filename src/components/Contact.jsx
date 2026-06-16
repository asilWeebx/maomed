import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Send, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+998 90 123 45 67", "+998 71 234 56 78"],
    gradient: "from-blue-500 to-blue-700",
    action: "tel:+998901234567",
    actionLabel: "Qo'ng'iroq qiling",
  },
  {
    icon: Send,
    title: "Telegram",
    lines: ["@maomed_clinic"],
    gradient: "from-sky-400 to-blue-500",
    action: "https://t.me/maomed_clinic",
    actionLabel: "Telegram orqali",
  },
  {
    icon: MapPin,
    title: "Manzil",
    lines: ["Qarshi shahri"],
    gradient: "from-emerald-500 to-teal-600",
    action: "#",
    actionLabel: "Xaritada ko'rish",
  },
  {
    icon: Clock,
    title: "Ish vaqti",
    lines: ["Dush–Jum: 08:00 – 22:00", "Sham–Yak: 09:00 – 20:00"],
    gradient: "from-purple-500 to-violet-600",
    action: null,
    actionLabel: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Aloqa</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Biz bilan bog'laning
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Istalgan savol yoki murojaat bo'yicha biz doim sizga yordam berishga tayyormiz.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card card-hover"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <item.icon size={24} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-gray-500 leading-relaxed">{line}</p>
              ))}

              {item.action && (
                <a
                  href={item.action}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                >
                  {item.actionLabel}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-card h-72 relative bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center"
        >
          {/* Placeholder map visual */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-blue-500" />
            </div>
            <p className="text-lg font-semibold text-gray-700">Qarshi Shahar</p>
            <p className="text-sm text-gray-400 mt-1">-------------</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-colors"
            >
              Google Maps'da ochish
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Decorative dots */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
        </motion.div>
      </div>
    </section>
  );
}
