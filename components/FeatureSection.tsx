'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Heart, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: BadgeCheck,
    title: `Precision You Can Feel`,
    body: `Every cut, treatment, and detail is approached with the same level of care. Lital takes her time so you leave feeling genuinely seen and perfectly styled.`,
  },
  {
    icon: Heart,
    title: `A Space Built for You`,
    body: `The salon is designed to feel luxurious and calm from the moment you walk in. Clean, beautiful, and entirely focused on your comfort.`,
  },
  {
    icon: Sparkles,
    title: `Advanced Techniques`,
    body: `From the latest AI laser technology to PRP skin treatments, Lital stays ahead so her clients always access the most effective solutions available.`,
  },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const img2Ref = useRef<HTMLDivElement>(null);
  const img2InView = useInView(img2Ref, { once: true, margin: '-80px' });

  const img3Ref = useRef<HTMLDivElement>(null);
  const img3InView = useInView(img3Ref, { once: true, margin: '-80px' });

  return (
    <section
      id="feature"
      ref={sectionRef}
      className="bg-brand-primary py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
              The Lital Difference
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 leading-tight">
              Beauty With
              <span className="font-heading italic font-medium block text-brand-accent">
                Genuine Care
              </span>
            </h2>
            <p className="mt-6 font-body text-white/70 leading-relaxed max-w-lg">
              Clients come to Lital Beauty Salon because they want results they
              can see, from someone who truly loves what she does. The salon is
              a place where every visitor is welcomed like a friend and leaves
              feeling transformed.
            </p>

            <div className="mt-10 space-y-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      ease: 'easeOut',
                      delay: 0.1 + i * 0.1,
                    }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-brand-accent text-white font-body text-sm font-medium tracking-widest uppercase rounded-full hover:bg-brand-accent/90 transition-all duration-200 hover:scale-[1.02]"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          <div className="flex gap-4 items-end">
            <motion.div
              ref={img2Ref}
              initial={{ opacity: 0, y: 30 }}
              animate={img2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-2xl aspect-[3/4] flex-1"
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Beauty treatment in progress at Lital Beauty Salon"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              ref={img3Ref}
              initial={{ opacity: 0, y: 30 }}
              animate={img3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl aspect-[3/4] flex-1 mb-12"
            >
              <Image
                src="/images/gallery-3.jpg"
                alt="Salon atmosphere at Lital Beauty Salon Brooklyn"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
