'use client';

import Link from 'next/link';
import type { Service } from '../types';

export default function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="scroll-mt-[90px] bg-[#eef4ec] border-y border-[rgba(47,79,62,0.07)]"
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">

        {/* Header */}
        <div className="max-w-[640px] mb-12">
          <div className="inline-flex items-center gap-2.5 text-[0.75rem] tracking-[0.18em] uppercase text-sage-500 font-semibold mb-5">
            <span className="block w-6 h-px bg-sage-300" />
            Services provided
          </div>
          <h2 className="font-serif font-normal leading-[1.1] tracking-[-0.015em] text-[#1f2e27] mb-4
                         text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem]">
            Therapy for adolescents and adults — individual and couples.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#4f6357]">
            Treatment specialization spans a wide range of emotional and behavioral concerns. Here are
            some of the areas I most often work in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-[rgba(47,79,62,0.09)] rounded-[20px] p-6
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(31,46,39,0.45)]"
            >
              <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center mb-4">
                <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-forest-700" />
              </div>
              <h3 className="font-serif font-medium text-[1.22rem] text-[#1f2e27] mb-2 tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[0.94rem] leading-[1.6] text-[#5d7064]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-10 bg-forest-700 rounded-2xl p-8 sm:p-10
                        flex flex-col sm:flex-row gap-6 items-start sm:items-center sm:justify-between">
          <p className="font-serif italic text-[1.08rem] leading-[1.7] text-[#dceadd] sm:max-w-[40rem]">
            &ldquo;In a comfortable and supportive atmosphere, I offer a highly personalized approach —
            tailored to each client&apos;s needs and the personal growth they&apos;re striving for.&rdquo;
          </p>
          <Link
            href="#contact"
            className="shrink-0 bg-[#f1f6ee] text-[#243d2f] px-6 py-3.5 rounded-full font-bold text-[0.96rem]
                       hover:bg-white transition-colors w-full sm:w-auto text-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}