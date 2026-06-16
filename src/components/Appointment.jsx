import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, User, Phone, Stethoscope, Calendar, MessageSquare, Loader } from 'lucide-react';

const doctors = [
  "Dr. Aziz Karimov — Kardiolog",
  "Dr. Malika Yusupova — Ginekolog",
  "Dr. Bobur Toshmatov — Pediatr",
  "Dr. Nilufar Rahimova — Stomatolog",
  "Boshqa mutaxassis",
];

const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <Icon size={18} className="text-gray-400" />
    </div>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-blue-400 focus:bg-white rounded-2xl text-gray-900 placeholder-gray-400 text-sm font-medium outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
    />
  </div>
);

export default function Appointment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: '', phone: '', doctor: '', date: '', note: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', phone: '', doctor: '', date: '', note: '' });
    }, 1800);
  };

  return (
    <section id="appointment" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold text-blue-200 tracking-widest uppercase mb-4">Online qabul</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Shifokorga yoziling, sog'lom bo'ling
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10">
              Kerakli shifokorni tanlang va qulay vaqtni belgilang. Operator 30 daqiqa ichida siz bilan bog'lanadi va qabulni tasdiqlaydi.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "30 daqiqa ichida tasdiqlash",
                "Qulay kun va vaqtni tanlash imkoniyati",
                "Bepul konsultatsiya birinchi murojaat",
                "Qabulni bekor qilish yoki o'zgartirish",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-blue-200" />
                  </div>
                  <span className="text-blue-100 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Qabul formasi</h3>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Muvaffaqiyatli yuborildi!</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Arizangiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Yangi ariza
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <InputField
                      icon={User}
                      name="name"
                      placeholder="Ism va familiya"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      icon={Phone}
                      name="phone"
                      type="tel"
                      placeholder="Telefon raqam (+998 ...)"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />

                    {/* Doctor select */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Stethoscope size={18} className="text-gray-400" />
                      </div>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-blue-400 focus:bg-white rounded-2xl text-sm font-medium text-gray-900 outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-400">Shifokorni tanlang</option>
                        {doctors.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <InputField
                      icon={Calendar}
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />

                    {/* Textarea */}
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        name="note"
                        placeholder="Izoh (ixtiyoriy)"
                        rows={3}
                        value={form.note}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-blue-400 focus:bg-white rounded-2xl text-gray-900 placeholder-gray-400 text-sm font-medium outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <Loader size={20} className="animate-spin" />
                          Yuborilmoqda...
                        </>
                      ) : (
                        "Qabulga yozilish"
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-gray-400">
                      Ma'lumotlaringiz maxfiy saqlanadi va uchinchi tomonlarga berilmaydi.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
