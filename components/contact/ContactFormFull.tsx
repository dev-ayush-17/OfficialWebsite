'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, CONTACT_API_ENDPOINT } from '@/lib/constants';
import { SOCIAL_LINKS } from '@/lib/data/socials';
import type { ContactFormData } from '@/lib/types';

const socialIcons: Record<string, string> = {
  github: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
};

const subjects = ['General Inquiry', 'Collaboration', 'Feedback', 'Join Us', 'Other'];

export default function ContactFormFull() {
  const [formData, setFormData] = useState<ContactFormData & { subject: string }>({
    name: '', email: '', subject: 'General Inquiry', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
        {/* Email */}
        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-lg bg-[var(--accent-coral-dim)] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-coral)" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Email Us</h4>
              <p className="text-sm text-[var(--text-secondary)]">{SITE_CONFIG.email}</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-lg bg-[var(--accent-sage-dim)] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Visit Us</h4>
              <p className="text-sm text-[var(--text-secondary)]">{SITE_CONFIG.address}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="glass-card p-6">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Follow Us</h4>
          <div className="grid grid-cols-3 gap-3">
            {SOCIAL_LINKS.slice(0, 6).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] hover:border-[var(--accent-coral)] transition-all duration-300 group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--text-muted)] group-hover:text-[var(--accent-coral)] transition-colors">
                  <path d={socialIcons[social.icon] || ''} />
                </svg>
                <span className="text-[0.6rem] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-mono text-[0.6rem] text-center lg:text-left">
          ⏱ Response time: Usually within 24 hours
        </p>
      </div>

      {/* Form */}
      <div className="lg:col-span-3 order-1 lg:order-2">
        <form onSubmit={handleSubmit} className="glass-card gradient-border p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Name</label>
              <input
                id="contact-name" type="text" name="name" placeholder="Your Name" required
                value={formData.name} onChange={handleChange} className="form-input"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Email</label>
              <input
                id="contact-email" type="email" name="email" placeholder="your@email.com" required
                value={formData.email} onChange={handleChange} className="form-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Subject</label>
            <select
              id="contact-subject" name="subject" value={formData.subject}
              onChange={handleChange} className="form-input cursor-pointer"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Message</label>
            <textarea
              id="contact-message" name="message" placeholder="Tell us what's on your mind..."
              required rows={6} value={formData.message} onChange={handleChange}
              className="form-input resize-none"
            />
          </div>

          <Button type="submit" variant="primary" loading={loading} className="w-full">
            Send Message
          </Button>

          {status === 'success' && (
            <div className="p-4 rounded-lg bg-[var(--accent-sage-dim)] border border-[var(--accent-sage)] text-sm text-[var(--accent-sage)] text-center">
              ✓ Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-[var(--accent-coral-dim)] border border-[var(--accent-coral)] text-sm text-[var(--accent-coral)] text-center">
              Something went wrong. Please try again or email us at {SITE_CONFIG.email}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
