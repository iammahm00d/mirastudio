import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MouseEventHandler, ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-medium uppercase tracking-[0.24em] ${light ? 'text-champagne' : 'text-muted'}`}>{children}</p>;
}

export function Button({ to, children, variant = 'dark', className = '', onClick }: { to: string; children: ReactNode; variant?: 'dark' | 'light' | 'outline'; className?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  const styles = variant === 'dark'
    ? 'bg-ink text-cream hover:bg-black hover:shadow-[0_18px_45px_rgba(17,17,17,0.18)]'
    : variant === 'light'
      ? 'bg-cream text-ink hover:bg-white hover:shadow-[0_18px_45px_rgba(255,255,255,0.10)]'
      : 'border border-line bg-white/35 text-ink hover:border-ink/35 hover:bg-white/75';
  return <Link to={to} onClick={onClick} className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300 ${styles} ${className}`}>{children}<ArrowRight size={16} strokeWidth={1.6}/></Link>;
}

export function SectionTitle({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className="max-w-4xl"><Eyebrow light={light}>{eyebrow}</Eyebrow><h2 className={`mt-5 text-4xl font-medium leading-[1.01] tracking-tightest sm:text-6xl lg:text-7xl ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>{body && <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${light ? 'text-cream/70' : 'text-graphite'}`}>{body}</p>}</div>;
}
