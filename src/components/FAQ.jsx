import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Qabulga yozilish uchun qanday hujjatlar kerak?",
    a: "Birinchi marta kelayotgan bemorlar uchun faqat pasport yoki ID karta talab qilinadi. Avvalgi tibbiy hujjatlaringiz bo'lsa, ularni ham olib keling — tashxis qo'yishda yordam beradi.",
  },
  {
    q: "Qabul kutish vaqti qancha?",
    a: "Online yozilgan bemorlar uchun kutish vaqti o'rtacha 10-15 daqiqa. Favqulodda holatlarda esa darhol qabul qilinadi.",
  },
  {
    q: "Klinika ish vaqti qanday?",
    a: "Klinikamiz hafta ichida soat 08:00 dan 22:00 gacha, dam olish kunlari 09:00 dan 20:00 gacha ishlaydi. Navbatchi shifokor esa 24/7 mavjud.",
  },
  {
    q: "Tibbiy sug'urta bilan davolanish mumkinmi?",
    a: "Ha, biz ko'pgina tibbiy sug'urta kompaniyalari bilan hamkorlik qilamiz. Qabul oldidan sug'urta kartangizni olib keling.",
  },
  {
    q: "Tahlil natijalari qachon tayyor bo'ladi?",
    a: "Oddiy qon va siydik tahlillari 1-2 soat ichida tayyor bo'ladi. Murakkab tahlillar uchun 1-2 ish kuni ketishi mumkin. Natijalar SMS yoki elektron pochta orqali yuboriladi.",
  },
  {
    q: "Uy sharoitida muolaja xizmati bormi?",
    a: "Ha, biz uyga chiqib ko'rish va muolaja xizmatini ham taklif etamiz. Bu xizmat uchun +998 90 123 45 67 raqamiga qo'ng'iroq qiling.",
  },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-base font-semibold text-gray-900">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${open ? 'bg-blue-600' : 'bg-gray-100'}`}
        >
          <ChevronDown size={16} className={open ? 'text-white' : 'text-gray-500'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="w-full h-px bg-gray-100 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Savol-javob</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Ko'p so'raladigan savollar
          </h2>
          <p className="text-lg text-gray-500">
            Javob topa olmadingizmi? Bizga qo'ng'iroq qiling — yordam beramiz.
          </p>
        </motion.div>

        {inView && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
