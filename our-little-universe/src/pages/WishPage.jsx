import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WishPage() {
  const [wished, setWished] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
      <AnimatePresence>
        {!wished ? (
          <motion.div 
            exit={{ opacity: 0, scale: 0.8 }}
            className="space-y-12 z-10"
          >
            <div className="space-y-4 font-handwriting text-3xl md:text-5xl text-primary-100">
              <p>Close your eyes.</p>
              <p>Make a wish.</p>
              <p>Now press the heart.</p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setWished(true)}
              className="text-6xl md:text-8xl filter drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            >
              ❤️
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="space-y-8 z-10"
          >
            <h2 className="text-3xl md:text-5xl font-heading text-primary-200">I loveeeeeeee youuuuuuuu veryyyyyyyy veryyyyyyy muchhhh NISHIKA babuuuuuuuuu 🥰🥺❤️✨</h2>
            <p className="text-2xl md:text-4xl font-handwriting text-white">
              My wish came true the day I met you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {wished && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 150 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
              }}
              initial={{
                top: "50%",
                left: "50%",
                opacity: 1,
              }}
              animate={{
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 120 - 10}%`,
                opacity: 0,
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
