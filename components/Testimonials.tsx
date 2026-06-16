'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: `Deanna H`,
    text: `This was hands down the best haircut and blowout I have ever had. Lital is so sweet, professional, and genuinely welcoming. She took her time, treated me to a hair mask, and was meticulous in perfecting my cut. Lital is truly a gem!`,
  },
  {
    name: `Dion Gargagliano`,
    text: `I recently did the PRP facial treatment and I am beyond obsessed with my results. My skin looks tighter, smoother, younger, and absolutely glowing. Lital is incredibly professional, knowledgeable, gentle, and truly passionate about beauty and skincare.`,
  },
  {
    name: `5 Stars Top Cleaning`,
    text: `From the moment I walked in, I felt welcomed, pampered, and treated like royalty. Lital is incredibly talented, knowledgeable, and truly passionate about beauty. My results came out beyond my expectations!`,
  },
  {
    name: `May Nagar`,
    text: `Truly a one-stop beauty shop for everything you need. Whether it is hair, makeup, lashes, brows, or beauty treatments, she does it all and always makes sure you leave feeling beautiful and confident.`,
  },
  {
    name: `Esther N`,
    text: `Lital is truly the best hairstylist and beautician in Brooklyn. Her smile, patience, positive demeanor, great energy, and gorgeous outcomes leave me beaming for days. Highly recommend Lital for her hard stunning work.`,
  },
  {
    name: `Aliya Abergil`,
    text: `I was so scared to get a bob but Lital did the most amazing job! I love it so so much.`,
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

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-80px' });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
            Client Stories
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary mt-3 leading-tight">
            Results That
            <span className="font-heading italic font-medium block">
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-brand-background rounded-xl p-6 border border-brand-secondary/10 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-brand-accent text-brand-accent"
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-brand-text/75 leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="font-body text-sm font-semibold text-brand-primary">
                  {t.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-xs mx-auto">
              <Image
                src="/images/gallery-4.jpg"
                alt="Happy client result at Lital Beauty Salon"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="mt-8 bg-brand-primary rounded-2xl p-6 text-center max-w-xs mx-auto">
              <p className="font-heading text-3xl font-semibold text-white">5.0</p>
              <div className="flex justify-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <p className="font-body text-xs text-white/60 tracking-wide uppercase">
                Average Google Rating
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block w-full px-6 py-3 bg-brand-accent text-white font-body text-xs font-medium tracking-widest uppercase rounded-full hover:bg-brand-accent/90 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
