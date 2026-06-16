import Link from 'next/link';
import Logo from './logo';

export default function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-800 text-[#cadbcd]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* Top */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4">
              <Logo name={name} variant="light" />
            </div>
            <p className="text-[0.93rem] leading-[1.65] text-[#a9c4b1]">
              Licensed Professional Counselor offering individual and couples therapy in Washington,
              DC. In-person and telehealth · English &amp; Spanish.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-row gap-12 sm:gap-14">
            <div>
              <div className="text-[0.74rem] tracking-[0.12em] uppercase text-[#7fa98c] font-semibold mb-4">
                Explore
              </div>
              <div className="flex flex-col gap-2.5 text-[0.93rem]">
                {['About', 'Services', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-[#cadbcd] hover:text-white transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[0.74rem] tracking-[0.12em] uppercase text-[#7fa98c] font-semibold mb-4">
                Reach me
              </div>
              <div className="flex flex-col gap-2.5 text-[0.93rem] text-[#cadbcd]">
                <span>hello@belenpereira.com</span>
                <span>(202) 555-0148</span>
                <span>Washington, DC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(159,182,164,0.2)] flex flex-col sm:flex-row justify-between gap-3 text-[0.8rem] text-[#8aa897]">
          <span>© {year} {name}, LPC. All rights reserved.</span>
          <span>
            In crisis? Call or text{' '}
            <strong className="text-[#cadbcd] font-semibold">988</strong> for immediate support.
          </span>
        </div>
      </div>
    </footer>
  );
}