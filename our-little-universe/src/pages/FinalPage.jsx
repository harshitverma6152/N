import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground';
import { coupleData } from '../data/couple';

export default function FinalPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary-900 py-20 px-6 text-center">
      <StarBackground />
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-yellow-100/20 blur-3xl shadow-[0_0_100px_rgba(255,255,200,0.3)]"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 max-w-2xl space-y-16 mt-16"
      >
        <p className="font-handwriting text-3xl md:text-5xl text-primary-200 leading-relaxed">
          And after everything... <br/> our story is still only beginning.
        </p>

        <div className="space-y-4 font-sans text-white/80 tracking-wide bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm text-sm md:text-base">
          <p><strong>{coupleData.importantDates.firstMeeting}</strong> — We Met</p>
          <p><strong>{coupleData.importantDates.proposal}</strong> — We Chose Each Other</p>
          <p><strong>Today</strong> — We Are Still Writing Our Story</p>
        </div>

        <div className="font-handwriting text-2xl md:text-4xl text-primary-100 space-y-4">
          <p>No matter how many pages we add to this website...</p>
          <p>my favorite chapter will always be:</p>
          <p className="text-5xl md:text-7xl text-primary-300 font-bold mt-4 pt-4 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]">US. ❤️</p>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading text-white tracking-widest pt-12 pb-8">
            FOREVER STARTS HERE.
          </h2>
        </motion.div>

        <div className="pt-20 text-white/40 text-xs font-sans flex flex-col items-center space-y-2">
          <p>Made with love, for the girl who means the world to me.</p>
        </div>
      </motion.div>
    </div>
  );
}
