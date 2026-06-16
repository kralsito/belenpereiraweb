'use client';

import { useState } from 'react';
import type { ContactForm, FormErrors } from '../types';

interface ContactProps {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

const REASON_OPTIONS = [
  'Individual therapy', 'Couples therapy', 'Adolescent therapy',
  'Grief & loss', 'A consultation call', 'Something else',
];

function validate(form: ContactForm): FormErrors {
  return {
    name: !form.name.trim(),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
    message: !form.message.trim(),
  };
}

const inputCls = 'w-full px-4 py-3 border border-[rgba(47,79,62,0.18)] rounded-xl font-sans text-[1rem] text-[#213029] bg-[#fbfdfa]';

export default function Contact({ email, phone, address, hours }: ContactProps) {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', reason: 'Individual therapy', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const errors = validate(form);
  const t = touched ? errors : { name: false, email: false, message: false };

  const onField = (key: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = () => {
    if (errors.name || errors.email || errors.message) { setTouched(true); return; }
    setSubmitted(true);
  };

  const contactItems = [
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Office', value: address },
  ];

  const metaItems = [
    { label: 'Hours', value: hours },
    { label: 'Sessions', value: 'In-person & Telehealth' },
    { label: 'Languages', value: 'English & Spanish' },
  ];

  return (
    <section id="contact" className="scroll-mt-[90px] max-w-[1120px] mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">

        {/* ── LEFT: info ── */}
        <div>
          <div className="inline-flex items-center gap-2.5 text-[0.75rem] tracking-[0.18em] uppercase text-sage-500 font-semibold mb-5">
            <span className="block w-6 h-px bg-sage-300" />
            Get in touch
          </div>
          <h2 className="font-serif font-normal leading-[1.1] tracking-[-0.015em] text-[#1f2e27] mb-5
                         text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem]">
            Let&apos;s start a conversation.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#4f6357] mb-8">
            Reaching out is the first step. Tell me a little about what brings you here and I&apos;ll
            get back to you within one to two business days.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-forest-700" />
                </div>
                <div>
                  <div className="text-[0.74rem] tracking-[0.08em] uppercase text-[#8aa091] font-semibold">{item.label}</div>
                  <div className="font-semibold text-[#213029] text-[0.95rem]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(47,79,62,0.12)] flex flex-wrap gap-6">
            {metaItems.map((item) => (
              <div key={item.label}>
                <div className="text-[0.74rem] tracking-[0.08em] uppercase text-[#8aa091] font-semibold mb-1">{item.label}</div>
                <div className="font-semibold text-[#213029] text-[0.9rem]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="bg-white border border-[rgba(47,79,62,0.1)] rounded-[26px] p-6 sm:p-9 shadow-[0_36px_70px_-42px_rgba(31,46,39,0.45)]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
                <div className="flex flex-col items-center gap-[3px]">
                  <div className="w-[9px] h-[5px] rounded-full bg-[#8aa593]" />
                  <div className="w-[15px] h-[6px] rounded-full bg-[#5f7d68]" />
                  <div className="w-[21px] h-[8px] rounded-full bg-[#3a5443]" />
                </div>
              </div>
              <h3 className="font-serif font-medium text-[1.65rem] text-[#1f2e27] mb-3">
                Thank you for reaching out.
              </h3>
              <p className="text-[1rem] leading-[1.65] text-[#5d7064] max-w-[22rem] mx-auto">
                Your message is on its way. I&apos;ll personally get back to you within one to two business days.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif font-medium text-[1.45rem] text-[#1f2e27] mb-6">Send a message</h3>
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[0.8rem] font-semibold text-[#42564a] mb-1.5">Full name</label>
                  <input type="text" value={form.name} onChange={onField('name')} placeholder="Your name" className={inputCls} />
                  {t.name && <p className="text-[0.78rem] text-red-600 mt-1">Please enter your name.</p>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-[#42564a] mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={onField('email')} placeholder="you@email.com" className={inputCls} />
                    {t.email && <p className="text-[0.78rem] text-red-600 mt-1">Enter a valid email.</p>}
                  </div>
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-[#42564a] mb-1.5">
                      Phone <span className="text-[#9aa89e] font-normal">(optional)</span>
                    </label>
                    <input type="tel" value={form.phone} onChange={onField('phone')} placeholder="(202) 000-0000" className={inputCls} />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-[0.8rem] font-semibold text-[#42564a] mb-1.5">I&apos;m reaching out about</label>
                  <select value={form.reason} onChange={onField('reason')} className={inputCls}>
                    {REASON_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[0.8rem] font-semibold text-[#42564a] mb-1.5">Message</label>
                  <textarea
                    value={form.message} onChange={onField('message')} rows={4}
                    placeholder="Share whatever feels comfortable about what brings you here."
                    className={`${inputCls} resize-y`}
                  />
                  {t.message && <p className="text-[0.78rem] text-red-600 mt-1">Please add a short message.</p>}
                </div>

                <button
                  onClick={onSubmit}
                  className="w-full bg-forest-700 text-forest-50 py-4 rounded-xl font-semibold text-[1rem]
                             shadow-[0_14px_30px_-14px_rgba(47,79,62,0.8)] hover:bg-[#264333] transition-colors cursor-pointer"
                >
                  Send message
                </button>

                <p className="text-[0.78rem] text-[#9aa89e] text-center leading-relaxed">
                  This form is for general inquiries. Please don&apos;t share sensitive clinical details here.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}