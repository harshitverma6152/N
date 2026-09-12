import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/gallery';

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState(null);
  
  const selectedPhoto = gallery.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-secondary-900 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-200 text-center mb-16">
          OUR MEMORIES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              onClick={() => setSelectedId(photo.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="cursor-pointer bg-white p-4 rounded shadow-xl pb-12 relative group"
            >
              <div className="aspect-[4/5] bg-secondary-800 rounded overflow-hidden">
                 <img src={photo.image} alt={photo.caption} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center px-4">
                <p className="font-handwriting text-secondary-900 text-xl">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`photo-${selectedId}`}
              className="max-w-3xl w-full bg-white p-4 pb-16 rounded shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center"
                onClick={() => setSelectedId(null)}
              >
                X
              </button>
              <div className="aspect-auto min-h-[50vh] bg-secondary-800 rounded flex items-center justify-center overflow-hidden">
                 <img src={selectedPhoto.image} alt={selectedPhoto.caption} className="w-full max-h-[70vh] object-contain" />
              </div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                 <p className="font-handwriting text-secondary-900 text-2xl">{selectedPhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
