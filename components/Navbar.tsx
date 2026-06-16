'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: `Services`, href: '#services' },
  { label: `About`, href: '#feature' },
  { label: `Testimonials`, href: '#testimonials' },
  { label: `Contact`, href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['services', 'feature', 'testimonials', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Lital Beauty Salon Logo"
            width={64}
            height={64}
            className="w-16 h-16 object-contain flex-shrink-0"
          />
          <span className="font-heading text-xl font-semibold tracking-wide text-white hidden sm:block">
            Lital Beauty Salon
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-accent'
                    : scrolled
                    ? 'text-white/80 hover:text-brand-accent'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="block h-px bg-brand-accent mt-0.5" />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-brand-accent text-white font-body text-sm font-medium tracking-wider uppercase rounded-full hover:bg-brand-accent/90 transition-colors duration-200"
          >
            Book Now
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body text-sm font-medium tracking-widest uppercase py-2 border-b border-white/10 transition-colors ${
                    isActive ? 'text-brand-accent' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-brand-accent text-white font-body text-sm font-medium tracking-wider uppercase rounded-full text-center hover:bg-brand-accent/90 transition-colors duration-200"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
