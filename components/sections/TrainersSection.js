'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

const trainers = [
  {
    name: 'Aarav Mehta',
    role: 'Strength & Conditioning',
    image: '/images/trainers/trainer-1.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Fat Loss Specialist',
    image: '/images/trainers/trainer-2.jpg'
  },
  {
    name: 'Rahul Verma',
    role: 'Functional Training Coach',
    image: '/images/trainers/trainer-3.jpg'
  }
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="section-padding bg-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trainers
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Meet The Coaches Behind Your Transformation
          </h2>
          <p className="text-sm md:text-base text-muted">
            Our certified trainers bring years of hands-on experience, science-backed training, and
            relentless energy to every session.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainers.map(trainer => (
            <motion.article
              key={trainer.name}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/70 hover:shadow-soft-red"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="relative flex flex-col items-center gap-2 px-5 py-5 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {trainer.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  {trainer.role}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <a
                    href="#"
                    aria-label={`${trainer.name} Instagram`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                    <FaInstagram className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${trainer.name} Facebook`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                    <FaFacebookF className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${trainer.name} LinkedIn`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                    <FaLinkedinIn className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
