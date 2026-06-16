import Image from 'next/image';
import type { Credential } from '../types';

interface AboutProps {
  name: string;
  credentials: Credential[];
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-[0.75rem] tracking-[0.18em] uppercase text-sage-500 font-semibold mb-5">
      <span className="block w-6 h-px bg-sage-300" />
      {children}
    </div>
  );
}

export default function About({ name, credentials }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-[90px] max-w-[1120px] mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">

        {/* ── LEFT: sticky image ── */}
        <div className="md:sticky md:top-28">
          <SectionLabel>About me</SectionLabel>
          <h2 className="font-serif font-normal leading-[1.1] tracking-[-0.015em] text-[#1f2e27] mb-6
                         text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem]">
            A respectful, collaborative kind of therapy.
          </h2>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_-34px_rgba(31,46,39,0.5)] max-w-[260px] sm:max-w-[300px]">
            <Image src="/images/portrait.png" alt={name} fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* ── RIGHT: bio + credentials ── */}
        <div className="text-[1.05rem] sm:text-[1.1rem] leading-[1.8] text-[#42564a]">
          <p className="mb-5">
            I was born and trained in Argentina, where I earned my degree in Clinical Psychology — the
            equivalent of a Bachelor&apos;s and Master&apos;s in the United States. Today I am a{' '}
            <strong className="text-forest-700 font-semibold">Licensed Professional Counselor (LPC)</strong>{' '}
            in Virginia and Washington, DC, with more than fifteen years of experience in private practice.
          </p>
          <p className="mb-5">
            I think of myself as a respectful, empathetic{' '}
            <strong className="text-forest-700 font-semibold">psychodynamic therapist</strong>. I also
            draw on cognitive-behavioral (CBT) and strengths-based approaches, adapting to each person
            I work with so that together we can address real-life challenges and the growth you&apos;re
            committed to.
          </p>
          <p className="mb-5">
            Earlier in my career I worked with the National Crime Prevention Council, La Clínica del
            Pueblo, and{' '}
            <strong className="text-forest-700 font-semibold">Nueva Vida</strong> — a network supporting
            Latinas facing a cancer diagnosis, with whom I still collaborate today. I&apos;m a lifelong
            learner who values supervision and quality education, and I recently completed a two-year
            program in Clinical Psychotherapy at the Washington School of Psychiatry.
          </p>
          <p className="mb-8 text-[#5d7064] italic font-serif text-[1.12rem] leading-relaxed">
            &ldquo;I&apos;m always glad to answer your questions — and I look forward to a collaborative
            therapeutic experience.&rdquo;
          </p>
          <div className="font-serif text-[1.25rem] text-forest-700">
            {name}
            <span className="font-sans text-[0.78rem] tracking-[0.1em] text-[#8aa091] font-semibold ml-2">
              LPC
            </span>
          </div>

          {/* Credentials */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {credentials.map((c) => (
              <div key={c.title} className="bg-white border border-[rgba(47,79,62,0.1)] rounded-2xl p-4 sm:p-5 flex gap-3 items-start">
                <div className="shrink-0 w-2 h-2 rounded-full bg-[#b4924f] mt-[6px]" />
                <div>
                  <div className="font-bold text-[0.96rem] text-[#213029] leading-snug">{c.title}</div>
                  <div className="text-[0.84rem] text-[#6b8071] mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}