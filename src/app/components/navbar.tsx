'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';

const NAV_ITEMS = ['About', 'Services', 'Contact'] as const;

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(243,247,241,0.85)] backdrop-blur-md border-b border-[rgba(47,79,62,0.08)]">
      {/* Main bar */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-6">
        <Link href="#top">
          <Logo name={name} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7 text-[0.95rem] font-medium">
            {NAV_ITEMS.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-[#3c5446] hover:text-[#2f4f3e] transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="bg-forest-700 text-forest-50 px-5 py-[10px] rounded-full font-semibold text-[0.92rem] whitespace-nowrap shadow-[0_8px_20px_-10px_rgba(47,79,62,0.7)] hover:bg-[#264333] transition-colors"
          >
            Schedule a consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-1 text-forest-700 rounded-md"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" /><line x1="3" y1="11" x2="19" y2="11" /><line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[rgba(243,247,241,0.97)] backdrop-blur-md border-t border-[rgba(47,79,62,0.08)] px-5 pb-5">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-4 text-[1.05rem] font-medium text-[#3c5446] border-b border-[rgba(47,79,62,0.07)] last:border-0"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-4 bg-forest-700 text-forest-50 py-3 px-6 rounded-full font-semibold text-[0.96rem] text-center"
              onClick={() => setOpen(false)}
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}