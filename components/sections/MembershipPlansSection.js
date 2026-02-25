'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

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

const plans = [
  {
    name: 'Basic',
    price: '₹1,999',
    description: 'Perfect for beginners who want to start training consistently.',
    popular: false,
    features: [
      'Gym access 3 days a week',
      'Access to cardio zone',
      'Locker facility',
      'Basic fitness assessment'
    ]
  },
  {
    name: 'Standard',
    price: '₹2,999',
    description: 'Our most popular membership for fast, visible progress.',
    popular: true,
    features: [
      'Unlimited gym access',
      'Group classes included',
      'Monthly progress tracking',
      'Priority trainer support'
    ]
  },
  {
    name: 'Premium',
    price: '₹4,499',
    description: 'Maximum support for serious transformations and athletes.',
    popular: false,
    features: [
      'Unlimited gym access',
      'Personalized workout plan',
      'Nutrition guidance',
      '1:1 personal training sessions'
    ]
  }
];

export default function MembershipPlansSection() {
  return (
    <section id="plans" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Membership Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Choose The Plan That Matches Your Hustle
          </h2>
          <p className="text-sm md:text-base text-muted">
            Transparent pricing, no hidden fees, and flexible options so you can commit to your
            fitness without stressing your budget.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map(plan => (
            <motion.div
              key={plan.name}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className={`group relative flex flex-col rounded-3xl border bg-black/40 p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft-red ${
                plan.popular ? 'border-primary/80 bg-black/60' : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-soft-red">
                  Best Value
                </div>
              )}
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-primary">
                  {plan.price}
                  <span className="ml-1 text-xs font-normal text-muted">
                    /month
                  </span>
                </p>
                <p className="text-xs text-muted">
                  {plan.description}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <FaCheck className="h-3 w-3" />
                      </span>
                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href="#join"
                  className={`w-full rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-smooth ${
                    plan.popular
                      ? 'bg-primary text-white shadow-soft-red group-hover:bg-primary-light'
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Join {plan.name}
                </motion.a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,42,42,0.18),_transparent_55%)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
