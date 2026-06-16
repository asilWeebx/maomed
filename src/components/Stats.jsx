import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, UserCheck, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Bemorlar",
    description: "Muvaffaqiyatli davolanganlar",
    color: "blue",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    value: "15+",
    label: "Mutaxassis shifokorlar",
    description: "Xalqaro sertifikatli",
    color: "indigo",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Xizmat",
    description: "Doimo mavjud",
    color: "sky",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Mijozlar mamnunligi",
    description: "Qaytib keluvchi bemorlar",
    color: "emerald",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Raqamlarda</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Nima uchun MAOMED?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-card card-hover text-center"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={26} className={stat.iconColor} />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>

              {/* Accent line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
