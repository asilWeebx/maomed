import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Users, Zap, User } from 'lucide-react';

const advantages = [
  {
    icon: Cpu,
    title: "Zamonaviy uskunalar",
    description: "Germaniya, Janubiy Koreya va AQShdan olib kelingan eng yangi tibbiy jihozlar bilan jihozlangan klinikamiz.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Tajribali mutaxassislar",
    description: "15+ dan ortiq xalqaro sertifikatli shifokorlarimiz har biri 10 yildan ortiq ish tajribasiga ega.",
    gradient: "from-indigo-500 to-purple-700",
  },
  {
    icon: Zap,
    title: "Tezkor xizmat",
    description: "Qabul kutish muddati 15 daqiqadan oshmaydi. Navigatsiya bo'yicha tezkor yo'naltirishlar bilan.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: User,
    title: "Individual yondashuv",
    description: "Har bir bemor alohida e'tibor va parvarish oladi. Shaxsiy davolanish rejasi tayyorlanadi.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Advantages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=700&q=80"
                alt="Modern clinic interior"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 w-52"
            >
              <p className="text-4xl font-bold text-blue-600 mb-1">98%</p>
              <p className="text-sm text-gray-500 leading-snug">Bemorlar qayta murojaat qilishadi</p>
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-3xl flex flex-col items-center justify-center shadow-xl shadow-blue-500/30"
            >
              <span className="text-3xl font-bold text-white">10</span>
              <span className="text-xs text-blue-200 font-medium">yildan</span>
              <span className="text-xs text-blue-200 font-medium">ortiq</span>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Nima uchun biz?</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Sog'ligingizga ishoning
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                MAOMED tibbiyot markazida biz faqat eng yaxshi davolash usullaridan foydalanamiz. Har bir qadam — tashxisdan davolangungizcha — professional nazorat ostida amalga oshiriladi.
              </p>
            </motion.div>

            <div className="space-y-5">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center shadow-lg`}>
                    <adv.icon size={22} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{adv.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{adv.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
