import { motion } from 'framer-motion';

export default function MomentsPage() {
  const moments = [
    { title: "Us being completely normal.", emoji: "😂" },
    { title: "And then suddenly I miss you.", emoji: "🥹" },
    { title: "My favorite notification.", emoji: "❤️" }
  ];

  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-200 text-center">
          OUR LITTLE MOMENTS ✨
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -10 }}
              className="bg-primary-900/40 p-8 rounded-2xl border border-primary-500/30 text-center space-y-4 shadow-xl"
            >
              <div className="text-6xl animate-bounce">{moment.emoji}</div>
              <p className="font-handwriting text-2xl text-primary-100">{moment.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
