import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-primary-900/20 pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading text-primary-200 text-center mb-16"
        >
          OUR TIMELINE
        </motion.h2>

        <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-8">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-10 mt-1 w-4 h-4 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] -translate-x-[2px]" />
              <div className="text-sm text-primary-300 font-bold mb-1 font-sans">{item.date}</div>
              <h3 className="text-2xl font-handwriting text-primary-100 mb-2">{item.title}</h3>
              <p className="text-white/70 font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
