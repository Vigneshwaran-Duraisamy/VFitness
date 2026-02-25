'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 0.61, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen w-full overflow-hidden bg-background"
      aria-label="VFitness hero section"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/hero-gym.jpg')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-background" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-xl space-y-6">
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                Elite Training • High-Intensity • Results Driven
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-balance"
              >
                Transform Your Body at{' '}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  VFitness
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-lg text-balance text-sm md:text-base"
              >
                Unlock your peak performance with{' '}
                <span className="text-white font-semibold">expert coaches</span>,{' '}
                <span className="text-white font-semibold">premium equipment</span>, and high-energy sessions designed to help you{' '}
                <span className="text-primary font-semibold">build strength, burn fat</span>, and feel unstoppable.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#join"
                  className="btn-primary w-full sm:w-auto"
                  aria-label="Join VFitness now"
                >
                  Join Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/1234567890?text=Hi%20VFitness%2C%20I%27d%20like%20to%20know%20more%20about%20your%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-outline w-full sm:w-auto inline-flex items-center justify-center gap-2"
                  aria-label="Chat with VFitness on WhatsApp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Chat on WhatsApp
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-center gap-4 text-xs text-muted"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>No contracts, cancel anytime</span>
                </div>
                <div className="hidden md:inline-flex h-4 w-px bg-white/10" />
                <span className="hidden md:inline text-muted">
                  Open 6 AM – 11 PM • 7 Days a Week
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex w-full justify-center md:mt-0 md:w-auto"
            >
              <div className="relative h-72 w-60 overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-soft-red md:h-80 md:w-72">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,42,42,0.35),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[url('/images/hero-gym.jpg')] bg-cover bg-center mix-blend-screen opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-muted">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                      Next Session
                    </p>
                    <p className="text-white text-sm font-semibold">
                      HIIT Power Hour
                    </p>
                  </div>
                  <div className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-primary-light">
                    Burn 600+ kcal
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
