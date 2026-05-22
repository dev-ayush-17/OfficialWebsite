import type { Metadata } from 'next';
import ContactFormFull from '@/components/contact/ContactFormFull';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Web & Coding Club NIT Patna. Reach out for collaborations, feedback, or to join our community.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// CONTACT</p>
          <h1 className="text-display gradient-text-sage mb-4">Contact Us</h1>
          <p className="text-body max-w-2xl text-lg mb-12">
            Whether you want to collaborate, share feedback, or join our community —
            we&apos;d love to hear from you. Drop us a message and we&apos;ll get back to you.
          </p>

          <ContactFormFull />
        </div>
      </section>
    </main>
  );
}
