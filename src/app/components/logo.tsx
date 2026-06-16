interface LogoProps {
  variant?: 'dark' | 'light';
  name: string;
}

export default function Logo({ variant = 'dark', name }: LogoProps) {
  const isDark = variant === 'dark';
  return (
    <div className="flex items-center gap-3">
      {/* Stacked leaf marks */}
      <div className="flex flex-col items-center gap-[3px]">
        <div className={`w-[11px] h-[6px] rounded-full ${isDark ? 'bg-[#8aa593]' : 'bg-[#7fa98c]'}`} />
        <div className={`w-[17px] h-[7px] rounded-full ${isDark ? 'bg-[#5f7d68]' : 'bg-[#a9c4b1]'}`} />
        <div className={`w-[23px] h-[9px] rounded-full ${isDark ? 'bg-[#3a5443]' : 'bg-[#cadbcd]'}`} />
      </div>
      <div className="leading-tight">
        <div className={`font-serif text-[1.18rem] font-medium ${isDark ? 'text-[#213029]' : 'text-[#f1f6ee]'}`}>
          {name}
        </div>
        <div className={`text-[0.62rem] tracking-[0.22em] uppercase font-semibold ${isDark ? 'text-[#6b8071]' : 'text-[#a9c4b1]'}`}>
          Psychotherapy · LPC
        </div>
      </div>
    </div>
  );
}