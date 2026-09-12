import { motion } from 'framer-motion';

export default function FavoritesPage() {
  const favorites = [
    { label: "OUR SONG 🎵", value: "Perfect by Ed Sheeran" },
    { label: "OUR PLACE 📍", value: "That cozy cafe corner" },
    { label: "OUR MOVIE 🎬", value: "About Time" },
    { label: "OUR MEMORY 📸", value: "Our first trip together" },
    { label: "OUR FAVORITE WORD ❤️", value: "Us" },
    { label: "OUR INSIDE JOKE 😂", value: "The pineapple incident" },
  ];

  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-200 text-center">
          OUR FAVORITE THINGS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {favorites.map((fav, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-primary-500/20"
            >
              <h3 className="text-primary-300 font-sans tracking-widest text-sm mb-2">{fav.label}</h3>
              <p className="font-handwriting text-2xl text-white/90">{fav.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
