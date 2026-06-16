import Image from 'next/image';
import { Phone, MapPin, Heart } from 'lucide-react';

const footerLinks = [
  { label: `Services`, href: '#services' },
  { label: `About`, href: '#feature' },
  { label: `Testimonials`, href: '#testimonials' },
  { label: `Contact`, href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Lital Beauty Salon Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading text-xl font-semibold tracking-wide">
                Lital Beauty Salon
              </span>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Premium beauty services in the heart of Brooklyn. Haircuts,
              laser hair removal, PRP facials, threading, and more, all
              delivered with passion and precision.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium mb-5">
              Navigation
            </p>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium mb-5">
              Visit Us
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-white/70">
                    1214 Bergen Ave
                  </p>
                  <p className="font-body text-sm text-white/70">
                    Brooklyn, NY 11234
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lital%20Beauty%20Salon&query_place_id=ChIJjzrXYxpdwokRWBrPt7m74B0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 font-body text-xs text-brand-accent hover:text-white transition-colors duration-200 tracking-wide"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent flex-shrink-0" />
                <a
                  href="tel:+16462992932"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  (646) 299-2932
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lital Beauty Salon. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-200 flex items-center gap-1"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
