import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { letters } from '../data/letters';
import StarBackground from '../components/StarBackground';

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6 relative overflow-hidden">
      <StarBackground />
      {/* Paper texture background overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4c5b9 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-2xl mx-auto relative z-10 space-y-16">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-200 text-center mb-8">
          A Letter To You
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 shadow-2xl rounded-sm border border-white/20"
        >
          <div className="font-handwriting text-2xl md:text-3xl text-primary-100 leading-relaxed whitespace-pre-wrap">
            {letters.main}
          </div>
        </motion.div>
        
        <div className="flex justify-center pt-16">
          <button 
            onClick={() => setIsOpen(true)}
            className="text-primary-300 hover:text-primary-400 transition-colors font-sans tracking-widest text-sm border-b border-primary-300 pb-1"
          >
            There is one more thing I never said...
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary-900/95 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-primary-50 p-8 rounded shadow-2xl max-w-lg w-full text-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-4xl mb-4">💌</div>
              <p className="font-handwriting text-3xl text-secondary-900 whitespace-pre-wrap">
                {letters.secret}
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-8 text-secondary-500 hover:text-secondary-900 font-sans text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
