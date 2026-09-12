import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground';
import { coupleData } from '../data/couple';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary-900">
      <StarBackground />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 flex flex-col items-center justify-center text-center space-y-12 w-full max-w-4xl p-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-handwriting text-primary-200 mb-6">
            Two people. <br />
            One beautiful story. <br />
            And a thousand moments still waiting to be written.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative group"
        >
          {/* Polaroid card */}
          <div className="bg-white p-3 pb-12 rounded shadow-2xl border border-white/50" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <div className="w-60 h-80 md:w-72 md:h-96 overflow-hidden">
              <img
                src="/images/hero/main.jpg"
                alt="Us"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top center' }}
              />
            </div>
            <div className="mt-3 flex justify-center space-x-2 text-rose-400 text-lg">
              <span>♡</span><span>♡</span><span>♡</span>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: '0 0 40px rgba(236,72,153,0.3)' }}>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <p className="text-primary-100 font-sans tracking-widest text-sm uppercase">
            {coupleData.importantDates.firstMeeting}
          </p>
          <p className="text-primary-200 font-handwriting text-2xl">
            The day our story began.
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary-400 pt-8"
          >
            ↓
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}
