import Image from 'next/image';
import Link from 'next/link';

interface HeroProps { tagline: string }

export default function Hero({ tagline }: HeroProps) {
  const stats = [
    { value: '15+', label: 'Years of practice' },
    { value: 'LPC',   label: 'Virginia & DC' },
    { value: 'EN/ES', label: 'Bilingual sessions' },
  ];

  return (
    <header className="relative overflow-hidden bg-forest-50">
      {/* Soft background blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 20% 50%, rgba(207,224,210,0.45) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 80%, rgba(180,210,190,0.22) 0%, transparent 68%)' }}
      />

      <div className="relative max-w-[1160px] mx-auto px-5 sm:px-10 py-14 sm:py-20 md:py-24
                      grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 items-center">

        {/* ── PHOTO — shows first on mobile ── */}
        <div className="relative flex justify-center animate-fade-up-late order-first md:order-last">
          {/* Organic blob */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(145deg,#d4e6d8 0%,#e8f0e6 60%,#f0f5ee 100%)',
              borderRadius: '42% 58% 54% 46% / 46% 42% 58% 54%',
              top: '6%', left: '8%', right: '-4%', bottom: '-6%',
            }}
          />
          {/* Photo */}
          <div
            className="relative z-10 w-[min(340px,78vw)] shadow-[0_32px_64px_-28px_rgba(31,46,39,0.38)]"
            style={{
              aspectRatio: '4/5',
              borderRadius: '38% 62% 58% 42% / 44% 40% 60% 56%',
              overflow: 'hidden',
            }}
          >
            <Image src="/images/portrait.png" alt="María Belen Pereira" fill style={{ objectFit: 'cover' }} priority />
          </div>

          {/* Floating credential — hidden on mobile */}
          <div className="hidden sm:flex absolute bottom-[10%] -left-2 z-20 items-center gap-3
                          bg-[rgba(243,247,241,0.92)] backdrop-blur-md border border-[rgba(47,79,62,0.10)]
                          rounded-[20px] px-4 py-4 shadow-[0_16px_40px_-16px_rgba(31,46,39,0.28)]
                          animate-float min-w-[180px]">
            <div className="flex flex-col items-center gap-[3px] shrink-0">
              <div className="w-2 h-[5px] rounded-full bg-[#8aa593]" />
              <div className="w-3 h-[6px] rounded-full bg-[#5f7d68]" />
              <div className="w-[18px] h-[7px] rounded-full bg-[#3a5443]" />
            </div>
            <div className="leading-snug">
              <div className="font-bold text-[0.86rem] text-[#1a2b22]">Licensed Professional</div>
              <div className="text-[0.74rem] text-sage-400 mt-0.5">Counselor · VA &amp; DC</div>
            </div>
          </div>

          {/* EN/ES badge — hidden on mobile */}
          <div className="hidden sm:block absolute top-[8%] -right-1 z-20
                          bg-forest-700 text-[#dceadd] rounded-full px-4 py-2
                          text-[0.74rem] font-semibold tracking-wide
                          shadow-[0_8px_20px_-8px_rgba(47,79,62,0.55)] animate-float-slow">
            EN / ES
          </div>
        </div>

        {/* ── TEXT ── */}
        <div className="animate-fade-up order-last md:order-first">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[0.74rem] tracking-[0.2em] uppercase text-sage-500 font-semibold mb-7">
            <span className="block w-7 h-px" style={{ background: 'linear-gradient(90deg,#9bb4a3,transparent)' }} />
            Washington, DC · Telehealth
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light leading-[1.12] tracking-[-0.025em] text-[#1a2b22] mb-2
                         text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem]">
            {tagline}
          </h1>

          {/* Thin rule */}
          <div className="w-12 h-0.5 rounded-full my-5"
            style={{ background: 'linear-gradient(90deg,#5f8c6e,rgba(95,140,110,0))' }} />

          {/* Body */}
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6155] max-w-[30rem] mb-10">
            A warm, collaborative space where therapy moves at your pace — psychodynamic,
            strengths-based, and thoughtfully tailored to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="#contact"
              className="bg-forest-700 text-forest-50 px-6 py-3.5 rounded-full font-semibold text-[0.95rem]
                         shadow-[0_8px_28px_-10px_rgba(47,79,62,0.55)] hover:bg-[#264333] transition-colors"
            >
              Schedule a consultation
            </Link>
            <Link
              href="#about"
              className="text-[#3a5948] px-6 py-3.5 rounded-full font-medium text-[0.95rem]
                         border border-[rgba(47,79,62,0.22)] hover:bg-[rgba(47,79,62,0.04)] transition-colors"
            >
              Read my story
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap border-t border-[rgba(47,79,62,0.10)] pt-7 gap-y-4">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`pr-6 mr-6 ${i < stats.length - 1 ? 'border-r border-[rgba(47,79,62,0.12)]' : ''}`}
              >
                <div className="font-serif text-[1.65rem] font-normal text-forest-700 leading-none mb-1">{s.value}</div>
                <div className="text-[0.76rem] text-sage-400 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}