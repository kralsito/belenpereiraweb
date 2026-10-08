import Logo from './logo';

interface MaintenanceProps {
  name: string;
  email: string;
}

export default function Maintenance({ name, email }: MaintenanceProps) {
  const year = new Date().getFullYear();

  return (
    <main className="relative min-h-screen overflow-hidden bg-forest-50 flex flex-col">
      {/* Soft background blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 20% 40%, rgba(207,224,210,0.45) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 85%, rgba(180,210,190,0.22) 0%, transparent 68%)' }}
      />

      {/* Header */}
      <div className="relative max-w-[1180px] w-full mx-auto px-5 sm:px-8 py-6">
        <Logo name={name} />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center px-5 sm:px-8 py-12">
        <div className="max-w-[36rem] text-center animate-fade-up">
          {/* Leaf mark */}
          <div className="w-20 h-20 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-8 animate-float">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[12px] h-[6px] rounded-full bg-[#8aa593]" />
              <div className="w-[19px] h-[8px] rounded-full bg-[#5f7d68]" />
              <div className="w-[27px] h-[10px] rounded-full bg-[#3a5443]" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[0.74rem] tracking-[0.2em] uppercase text-sage-500 font-semibold mb-6">
            <span className="block w-7 h-px" style={{ background: 'linear-gradient(90deg,transparent,#9bb4a3)' }} />
            Under maintenance
            <span className="block w-7 h-px" style={{ background: 'linear-gradient(90deg,#9bb4a3,transparent)' }} />
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light leading-[1.12] tracking-[-0.025em] text-[#1a2b22] mb-6
                         text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem]">
            A new space is taking shape.
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] leading-[1.8] text-[#4a6155] mb-10">
            The website is currently being updated and will be back very soon. Thank you for your
            patience — in the meantime, you&apos;re always welcome to reach out by email.
          </p>

          <a
            href={`mailto:${email}`}
            className="inline-block bg-forest-700 text-forest-50 px-6 py-3.5 rounded-full font-semibold text-[0.95rem]
                       shadow-[0_8px_28px_-10px_rgba(47,79,62,0.55)] hover:bg-[#264333] transition-colors"
          >
            {email}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative max-w-[1180px] w-full mx-auto px-5 sm:px-8 py-6 border-t border-[rgba(47,79,62,0.10)]
                      flex flex-col sm:flex-row justify-between gap-2 text-[0.8rem] text-[#6b8071]">
        <span>© {year} {name}, LPC</span>
        <span>
          In crisis? Call or text{' '}
          <strong className="text-forest-700 font-semibold">988</strong> for immediate support.
        </span>
      </div>
    </main>
  );
}
