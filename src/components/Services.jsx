import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Smile, Baby, Stethoscope, Activity, FlaskConical, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Kardiologiya",
    description: "Yurak va qon-tomir kasalliklarini zamonaviy usulda tashxis va davolash.",
    color: "red",
    gradient: "from-red-500 to-rose-600",
    bg: "bg-red-50",
    iconColor: "text-red-500",
    hoverBg: "hover:bg-red-600",
  },
  {
    icon: Smile,
    title: "Stomatologiya",
    description: "Tishlarni estetik va tibbiy jihatdan parvarish qilish, oqartirish va implantatsiya.",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: Baby,
    title: "Ginekologiya",
    description: "Ayollar salomatligi, homiladorlik kuzatuvi va ginekologik muolajalar.",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconColor: "text-pink-500",
    hoverBg: "hover:bg-pink-600",
  },
  {
    icon: Stethoscope,
    title: "Pediatriya",
    description: "Bolalar salomatligi, ularning o'sishi va rivojlanishini nazorat qilish.",
    color: "green",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    hoverBg: "hover:bg-emerald-600",
  },
  {
    icon: Activity,
    title: "UZI diagnostika",
    description: "Zamonaviy ultratovush apparatlari yordamida aniq va tezkor tashxis.",
    color: "purple",
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    hoverBg: "hover:bg-purple-600",
  },
  {
    icon: FlaskConical,
    title: "Laboratoriya",
    description: "Qon, siydik va boshqa tahlillar — tez va ishonchli natijalar.",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    hoverBg: "hover:bg-amber-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Bizning xizmatlar</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Barcha tibbiy ehtiyojlaringiz uchun
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Har bir sohadagi mutaxassislarimiz eng zamonaviy uskunalar va ilg'or tibbiy texnologiyalar bilan sog'ligingizga xizmat qiladi.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 overflow-hidden cursor-pointer card-hover"
            >
              {/* Background hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.bg} group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <service.icon size={26} className={`${service.iconColor} group-hover:text-white transition-colors duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-white transition-colors duration-300">
                  <span>Batafsil</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
