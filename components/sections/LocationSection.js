'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const container = {
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

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Find Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Train At Our Central Location
          </h2>
          <p className="text-sm md:text-base text-muted">
            Easy to reach, plenty of parking, and surrounded by the energy of a growing fitness
            community.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-black/40">
            <div className="aspect-[16/9] w-full bg-black/60">
              <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs text-muted">
                <span>
                  Google Maps embed will appear here. Replace this placeholder with your map iframe
                  to show the exact VFitness location.
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/5 bg-black/40 p-6 text-sm text-muted">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FaMapMarkerAlt className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  Address
                </p>
                <p className="mt-1 text-sm text-white">
                  VFitness Gym, 2nd Floor, Main Street, Sector 11, Your City, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FaClock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  Working Hours
                </p>
                <p className="mt-1 text-sm">
                  Monday – Friday: 6:00 AM – 11:00 PM
                </p>
                <p className="text-sm">
                  Saturday – Sunday: 7:00 AM – 10:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FaPhoneAlt className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  Contact
                </p>
                <p className="mt-1 text-sm">
                  Phone: +91-98765-43210
                </p>
                <p className="text-sm">
                  Email: hello@vfitnessgym.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

