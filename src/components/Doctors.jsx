import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Calendar, Award } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Aziz Karimov",
    specialty: "Kardiolog",
    experience: "18 yillik tajriba",
    rating: 4.9,
    reviews: 214,
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    badge: "Bosh shifokor",
  },
  {
    name: "Dr. Malika Yusupova",
    specialty: "Ginekolog",
    experience: "12 yillik tajriba",
    rating: 4.8,
    reviews: 187,
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    badge: "Mutaxassis",
  },
  {
    name: "Dr. Bobur Toshmatov",
    specialty: "Pediatr",
    experience: "10 yillik tajriba",
    rating: 4.9,
    reviews: 156,
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    badge: "Mutaxassis",
  },
  {
    name: "Dr. Nilufar Rahimova",
    specialty: "Stomatolog",
    experience: "9 yillik tajriba",
    rating: 4.7,
    reviews: 143,
    photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80",
    badge: "Mutaxassis",
  },
];

export default function Doctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="doctors" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Bizning jamoamiz</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Tajribali mutaxassislar
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Har bir shifokorimiz o'z sohasida yillar davomida tajriba orttirgan va xalqaro sertifikatlarga ega.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-card card-hover"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Award size={11} />
                    {doc.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <div className="flex">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={12} className={s <= Math.floor(doc.rating) ? "text-amber-400 fill-amber-400" : "text-gray-400"} />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">{doc.rating}</span>
                  <span className="text-white/70 text-xs">({doc.reviews})</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-1">{doc.specialty}</p>
                <p className="text-gray-400 text-xs mb-5">{doc.experience}</p>

                {/* CTA Button */}
                <a
                  href="#appointment"
                  className="group/btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 hover:bg-blue-600 border border-gray-200 hover:border-blue-600 text-gray-700 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300"
                >
                  <Calendar size={15} />
                  Qabulga yozilish
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-3.5 border-2 border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 font-semibold rounded-2xl transition-all duration-300 hover:shadow-md">
            Barcha shifokorlarni ko'rish
          </button>
        </motion.div>
      </div>
    </section>
  );
}
