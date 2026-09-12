import { motion } from 'framer-motion';
import { coupleData } from '../data/couple';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-primary-200">OUR LOVE STORY ❤️</h2>
        </motion.div>

        <div className="space-y-32">
          {/* Milestone 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="text-primary-300 font-sans tracking-widest text-sm font-bold bg-primary-900/50 px-4 py-1 rounded-full border border-primary-500/30">
              📍 {coupleData.importantDates.firstMeeting}
            </div>
            <h3 className="text-3xl font-handwriting text-primary-100">"The Beginning"</h3>
            <p className="text-lg font-sans text-white/80 max-w-lg font-light leading-relaxed">
              I didn't know that one meeting would become so many memories, so many smiles, so many conversations... and eventually... YOU.
            </p>
          </motion.div>

          {/* Milestone 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 relative"
          >
            <div className="absolute -top-16 text-primary-400 opacity-30 text-4xl animate-pulse">
              ❤️
            </div>
            <div className="text-primary-300 font-sans tracking-widest text-sm font-bold bg-primary-900/50 px-4 py-1 rounded-full border border-primary-500/30">
              💌 {coupleData.importantDates.proposal}
            </div>
            <h3 className="text-3xl font-handwriting text-primary-100">"The Day We Chose Each Other"</h3>
            <div className="text-lg font-sans text-white/80 max-w-lg font-light leading-relaxed space-y-4">
              <p>You proposed.</p>
              <p>I proposed.</p>
              <p>And somehow, two hearts asked the same question at exactly the right time.</p>
              <p className="pt-4 text-primary-300 text-xl">Yes. To you. To us. To everything that comes next.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
