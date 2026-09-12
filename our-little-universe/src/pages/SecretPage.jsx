import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coupleData } from '../data/couple';
import StarBackground from '../components/StarBackground';

export default function SecretPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === coupleData.password) {
      setError(false);
      navigate('/home');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary-900">
      <StarBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center space-y-8 p-6"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading text-primary-200 tracking-wider">
            ✨ OUR LITTLE UNIVERSE ✨
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-100 font-light">
            A place that belongs only to us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 pt-8">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password:"
              className={`bg-transparent border-b-2 ${error ? 'border-red-400' : 'border-primary-300'} 
                text-center text-xl p-2 outline-none text-white placeholder:text-primary-300/50 
                transition-colors w-64`}
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-full left-0 w-full text-center text-primary-300 mt-2 text-sm font-handwriting"
              >
                Hmm... that's not our secret. ❤️ Try again.
              </motion.p>
            )}
          </div>
          
          <button 
            type="submit"
            className="text-primary-200 hover:text-primary-400 transition-colors pt-4 text-2xl"
          >
            ❤️
          </button>
        </form>

        <p className="pt-12 text-sm text-primary-200/60 font-handwriting text-xl">
          Some memories are too beautiful to leave unlocked.
        </p>
      </motion.div>
    </div>
  );
}
