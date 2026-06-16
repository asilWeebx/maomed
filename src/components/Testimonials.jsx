import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Aziz Qodirov",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    date: "2 hafta oldin",
    text: "MAOMED klinikasida xizmat olish juda qulay va professional. Shifokorlar juda bilimli va e'tiborli. Natijalarni tez va aniq tushuntirib berishdi. Har doim shu yerga kelaman!",
    service: "Kardiologiya",
  },
  {
    name: "Mirzo Tursunov",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "1 oy oldin",
    text: "Pediatr shifokor bolam bilan juda iliq muomala qildi. Muolajalar kichik bolalarga moslashtirilgan. Klinika juda toza va zamonaviy. Tavsiya qilaman!",
    service: "Pediatriya",
  },
  {
    name: "Gulnora Yusupova",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
    rating: 5,
    date: "3 hafta oldin",
    text: "UZI diagnostika xizmati juda aniq va tez amalga oshirildi. Natijalarni o'sha kuniyoq oldim. Shifokor hammasini batafsil tushuntirdi. Ajoyib klinika!",
    service: "UZI Diagnostika",
  },
  {
    name: "Sherzod Kamolov",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    date: "5 kun oldin",
    text: "Stomatologiya bo'limida ishlov juda professional. Og'riqsiz va tez. Shifokor malakali va mehribon. Klinika ko'rinishi premium darajada. 10/10!",
    service: "Stomatologiya",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Fikrlar</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Bemorlarimiz nima deydi?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Mijozlarimizning ishonchi va mamnunligi bizning eng katta yutuqimiz.
          </p>
        </motion.div>

        {/* Overall rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-gray-900">4.9</span>
            <div className="flex mt-2">
              {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-amber-400 fill-amber-400" />)}
            </div>
            <span className="text-sm text-gray-400 mt-1">700+ sharh asosida</span>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden sm:block" />
          <div className="flex flex-col gap-2 w-48">
            {[
              { stars: 5, percent: 89 },
              { stars: 4, percent: 8 },
              { stars: 3, percent: 2 },
              { stars: 2, percent: 1 },
            ].map(({ stars, percent }) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-3">{stars}</span>
                <Star size={11} className="text-amber-400 fill-amber-400" />
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percent}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-8">{percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-card card-hover"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Quote size={18} className="text-blue-500" />
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} className={s <= review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-4">{review.text}</p>

              {/* Service tag */}
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-5">
                {review.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
