'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Lital Beauty Salon luxury lash and beauty studio interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/60" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles size={16} className="text-brand-accent" />
          <span className="font-body text-xs tracking-[0.25em] uppercase text-white/70">
            Brooklyn, New York
          </span>
          <Sparkles size={16} className="text-brand-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-tight max-w-4xl"
        >
          Brooklyn's Premier Lash and Beauty Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
          className="mt-6 font-body text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
        >
          Premium hair, skin, and beauty treatments delivered with precision
          and warmth. Lital brings out the best in you, every visit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-accent text-white font-body text-sm font-medium tracking-widest uppercase rounded-full hover:bg-brand-accent/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/40 text-white font-body text-sm font-medium tracking-widest uppercase rounded-full hover:border-white/80 transition-all duration-200 hover:scale-[1.02]"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/40 mx-auto" />
      </motion.div>
    </section>
  );
}
