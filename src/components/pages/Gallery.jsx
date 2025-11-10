// src/components/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Import images from assets
import gallery1 from '/src/assets/gallery-1.jpg';
import gallery2 from '/src/assets/gallery-2.jpg';
import gallery3 from '/src/assets/gallery-3.jpg';
import gallery4 from '/src/assets/gallery-4.jpg';
import gallery5 from '/src/assets/gallery-5.jpg';
import gallery6 from '/src/assets/gallery-6.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Reception Area' },
  { src: gallery2, alt: 'Operating Room' },
  { src: gallery3, alt: 'Waiting Lounge' },
  { src: gallery4, alt: 'Lab Facility' },
  { src: gallery5, alt: 'Consultation Room' },
  { src: gallery6, alt: 'Clinic Hallway' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">Gallery</h2>
      <p className="text-slate-300 mt-2">Explore our facilities and surgical environment.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="h-48 rounded-lg overflow-hidden shadow-md glass-card hover-scale cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full mx-4 rounded-xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} className="w-full h-auto object-contain bg-slate-900" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 p-2 bg-slate-800 rounded-full hover:bg-sky-600 hover-scale text-white"
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;