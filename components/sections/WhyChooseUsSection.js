'use client';

import { motion } from 'framer-motion';
import { FaDumbbell, FaClock, FaRupeeSign } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

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
      duration: 0.4,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

const features = [
  {
    icon: MdVerified,
    title: 'Certified Trainers',
    description: 'Experienced, certified coaches guiding you with safe form, smart programming, and accountability.'
  },
  {
    icon: FaDumbbell,
    title: 'Modern Equipment',
    description: 'Train with premium, well-maintained machines, free weights, and functional tools for every goal.'
  },
  {
    icon: FaRupeeSign,
    title: 'Affordable Plans',
    description: 'Flexible memberships that fit your budget without compromising on quality, support, or results.'
  },
  {
    icon: FaClock,
    title: 'Flexible Timings',
    description: 'Early morning to late night slots so your training never clashes with your busy schedule.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-padding bg-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Everything You Need To Train Like An Athlete
          </h2>
          <p className="text-sm md:text-base text-muted">
            We combine expert coaching, smart programming, and an energetic atmosphere so every
            session moves you closer to your strongest self.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(feature => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-5 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/70 hover:shadow-soft-red"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
