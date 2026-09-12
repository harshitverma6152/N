import { motion } from 'framer-motion';

export default function FuturePage() {
  const dreams = [
    { icon: "🌍", text: "Places we'll visit" },
    { icon: "📸", text: "Photos we'll take" },
    { icon: "🍽️", text: "Food we'll try" },
    { icon: "🎬", text: "Movies we'll watch" },
    { icon: "🌅", text: "Sunsets we'll chase" },
    { icon: "🏡", text: "Dreams we'll build" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-pink-100 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto space-y-16 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-secondary-800">
          OUR FUTURE ✨
        </h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-handwriting text-2xl md:text-3xl text-secondary-700 leading-relaxed space-y-6"
        >
          <p>There are still so many places we haven't visited.</p>
          <p>So many photos we haven't taken.</p>
          <p>So many sunsets we haven't watched.</p>
          <p>So many memories we haven't made.</p>
          <p className="pt-4 text-primary-600">And honestly... I can't wait to make them with you. ❤️</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
          {dreams.map((dream, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur p-4 rounded-xl shadow-sm border border-white/50"
            >
              <div className="text-3xl mb-2">{dream.icon}</div>
              <p className="font-sans text-sm text-secondary-800">{dream.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
