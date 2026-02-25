'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center space-y-6"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About VFitness
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Built For Results, Fueled By Passion
          </h2>
          <p className="text-sm md:text-base text-muted">
            VFitness is a high-energy training space where discipline meets community. For over
            7+ years, we have helped everyday people become stronger, leaner, and more confident
            through structured programs and accountable coaching.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-black/40 px-4 py-5">
              <p className="text-2xl font-bold text-primary">
                7+
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                Years Experience
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/40 px-4 py-5">
              <p className="text-2xl font-bold text-primary">
                Certified
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                Trainers
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/40 px-4 py-5">
              <p className="text-2xl font-bold text-primary">
                Results
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                Focused Community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

