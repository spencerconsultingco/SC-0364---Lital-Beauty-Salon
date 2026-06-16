'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Scissors, Sparkles, Zap, Heart, Brush, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: `Haircuts and Styling`,
    description:
      'Precision cuts, expert blowouts, and transformative styling tailored to your face shape and lifestyle. From classic bobs to full-length transformations.',
  },
  {
    icon: Sparkles,
    title: `Lash Extensions and Lifts`,
    description:
      'Stunning lash extensions, lifts, and tints designed to enhance your natural beauty. Wake up every morning looking effortlessly polished.',
  },
  {
    icon: Zap,
    title: `Laser Hair Removal`,
    description:
      'Advanced AI laser technology for virtually pain-free results. Clients see visible hair reduction from the very first session.',
  },
  {
    icon: Heart,
    title: `PRP Facial Treatments`,
    description:
      'Cutting-edge PRP therapy that tightens, smooths, and revives your skin. Real results that leave you glowing and refreshed.',
  },
  {
    icon: Brush,
    title: `Eyebrow Threading and Microblading`,
    description:
      'Perfectly sculpted brows through precise threading, microblading, and micro-shadowing. The detail work that defines your face.',
  },
  {
    icon: Star,
    title: `Facials and Skin Treatments`,
    description:
      'Deep cleaning facials, head therapy, and hydration treatments that restore your natural radiance from the inside out.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary mt-3 leading-tight">
            A Full Suite of
            <span className="font-heading italic font-medium block"> Beauty Services</span>
          </h2>
          <p className="mt-5 font-body text-brand-text/70 max-w-xl mx-auto leading-relaxed">
            One destination for every beauty need. Lital brings expertise,
            warmth, and premium results to every single appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-sm mx-auto lg:mx-0"
          >
            <Image
              src="/images/gallery-1.jpg"
              alt="Professional lash extension treatment at Lital Beauty Salon"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-brand-secondary/10 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-brand-text/65 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-accent text-white font-body text-sm font-medium tracking-widest uppercase rounded-full hover:bg-brand-accent/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
