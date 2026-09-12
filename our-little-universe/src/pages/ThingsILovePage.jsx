import { useState } from 'react';
import { motion } from 'framer-motion';
import { favorites } from '../data/favorites';
import StarBackground from '../components/StarBackground';

export default function ThingsILovePage() {
  const [revealed, setRevealed] = useState(new Set());

  const toggleReveal = (idx) => {
    const newSet = new Set(revealed);
    if (newSet.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setRevealed(newSet);
  };

  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6 relative overflow-hidden">
      <StarBackground />
      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-200 text-center">
          Things I Love About You
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.thingsILove.map((thing, idx) => (
            <motion.div
              key={idx}
              onClick={() => toggleReveal(idx)}
              className="cursor-pointer relative h-32"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-primary-100 rounded-2xl flex items-center justify-center border-2 border-primary-300 shadow-md"
                animate={{ rotateY: revealed.has(idx) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-4xl">❤️</span>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 bg-primary-500 rounded-2xl flex items-center justify-center p-4 text-center shadow-lg"
                initial={{ rotateY: 180 }}
                animate={{ rotateY: revealed.has(idx) ? 0 : -180 }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <p className="font-sans font-medium text-white text-sm">{thing}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
