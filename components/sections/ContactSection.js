'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Start Your Transformation With A Free Consultation
          </h2>
          <p className="text-sm md:text-base text-muted">
            Share your goals and our team will connect with you to recommend the perfect plan,
            schedule, and coach for your journey.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 mx-auto max-w-xl rounded-3xl border border-white/5 bg-black/50 p-6 md:p-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="space-y-5" aria-label="Contact form">
            <motion.div variants={item} className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 ease-smooth focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-muted"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 ease-smooth focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="+91-XXXXXXXXXX"
              />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <label
                htmlFor="goal"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-muted"
              >
                Fitness Goal
              </label>
              <select
                id="goal"
                name="goal"
                className="w-full rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 ease-smooth focus:border-primary focus:ring-1 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your primary goal
                </option>
                <option value="fat-loss">
                  Fat Loss
                </option>
                <option value="muscle-gain">
                  Muscle Gain
                </option>
                <option value="strength">
                  Strength And Performance
                </option>
                <option value="general-fitness">
                  General Fitness And Energy
                </option>
              </select>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-3 pt-2 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Submit Enquiry
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/1234567890?text=Hi%20VFitness%2C%20I%27m%20interested%20in%20your%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-outline inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <FaWhatsapp className="h-4 w-4" />
                Chat via WhatsApp
              </motion.a>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
