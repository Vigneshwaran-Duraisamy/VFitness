'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

const images = [
  '/images/gallery/transformation-1.jpg',
  '/images/gallery/transformation-2.jpg',
  '/images/gallery/transformation-3.jpg',
  '/images/gallery/transformation-4.jpg',
  '/images/gallery/transformation-5.jpg',
  '/images/gallery/transformation-6.jpg'
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Transformations
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Real Members. Real Progress.
          </h2>
          <p className="text-sm md:text-base text-muted">
            From first-time lifters to seasoned athletes, our members have transformed how they
            look, move, and feel.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map(src => (
            <motion.div
              key={src}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/40"
            >
              <img
                src={src}
                alt="VFitness transformation"
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-110 md:h-52"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Before • After
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
