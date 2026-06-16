'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const hours = [
  { day: 'Monday', hours: '9 AM to 10 PM' },
  { day: 'Tuesday', hours: '9 AM to 10 PM' },
  { day: 'Wednesday', hours: '9 AM to 10 PM' },
  { day: 'Thursday', hours: '9 AM to 10 PM' },
  { day: 'Friday', hours: '8 AM to 5 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: '10 AM to 10 PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: ``,
    phone: '',
    email: '',
    service: ``,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() && !formData.email.trim())
      newErrors.contact = 'Please provide a phone number or email';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-brand-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary mt-3 leading-tight">
            Book Your
            <span className="font-heading italic font-medium block">
              Appointment
            </span>
          </h2>
          <p className="mt-5 font-body text-brand-text/70 max-w-md mx-auto leading-relaxed">
            Ready to feel your best? Send us a message and Lital will be in
            touch to confirm your appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-secondary/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-primary mb-1">
                    Location
                  </p>
                  <p className="font-body text-sm text-brand-text/70">
                    1214 Bergen Ave
                    <br />
                    Brooklyn, NY 11234
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lital%20Beauty%20Salon&query_place_id=ChIJjzrXYxpdwokRWBrPt7m74B0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-body text-xs font-medium text-brand-accent tracking-wide uppercase hover:text-brand-primary transition-colors duration-200"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-primary mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+16462992932"
                    className="font-body text-sm text-brand-text/70 hover:text-brand-accent transition-colors duration-200"
                  >
                    (646) 299-2932
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-secondary/10">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-accent" />
                </div>
                <p className="font-heading text-lg font-semibold text-brand-primary">
                  Hours
                </p>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-1.5 border-b border-brand-secondary/10 last:border-0"
                  >
                    <span className="font-body text-sm font-medium text-brand-text/80">
                      {h.day}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        h.hours === 'Closed'
                          ? 'text-brand-secondary/60'
                          : 'text-brand-primary font-medium'
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-brand-secondary/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-brand-accent" />
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-brand-primary mb-3">
                    Thank You!
                  </h3>
                  <p className="font-body text-brand-text/70 max-w-sm leading-relaxed">
                    We received your message and will be in touch shortly to
                    confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-8">
                    Send Us a Message
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="font-body text-xs font-medium tracking-widest uppercase text-brand-text/60 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-secondary/20 bg-brand-background font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all duration-200"
                      />
                      {errors.name && (
                        <p className="mt-1 font-body text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium tracking-widest uppercase text-brand-text/60 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-brand-secondary/20 bg-brand-background font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="font-body text-xs font-medium tracking-widest uppercase text-brand-text/60 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-secondary/20 bg-brand-background font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all duration-200"
                    />
                    {errors.contact && (
                      <p className="mt-1 font-body text-xs text-red-500">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="font-body text-xs font-medium tracking-widest uppercase text-brand-text/60 block mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-brand-secondary/20 bg-brand-background font-body text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Haircut and Styling</option>
                      <option value="color">Hair Color and Highlights</option>
                      <option value="laser">Laser Hair Removal</option>
                      <option value="prp">PRP Facial Treatment</option>
                      <option value="brows">Eyebrow Threading and Microblading</option>
                      <option value="facial">Facial and Skin Treatments</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="font-body text-xs font-medium tracking-widest uppercase text-brand-text/60 block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about what you are looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-secondary/20 bg-brand-background font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-white font-body text-sm font-medium tracking-widest uppercase rounded-full hover:bg-brand-accent/90 transition-all duration-200 hover:scale-[1.01]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
