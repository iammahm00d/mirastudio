import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../data/site';

const MotionLink = motion(Link);
const reveal = { hidden: { opacity: 0, y: 22, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

export function ServiceCategoryCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <MotionLink
      to={service.path}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
      className="group grid min-h-[390px] rounded-[2.15rem] border border-line bg-ivory p-6 transition-colors duration-500 hover:bg-white hover:shadow-[0_28px_80px_rgba(17,17,17,0.09)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="rounded-full border border-line bg-white/55 px-3 py-1.5 text-xs font-medium uppercase tracking-[.22em] text-muted">{service.number}</p>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/65 transition duration-300 group-hover:border-ink/30 group-hover:bg-cream"><Icon size={20} strokeWidth={1.45}/></span>
      </div>
      <div className="self-end">
        <h3 className="text-3xl font-medium leading-none tracking-tightest sm:text-4xl">{service.title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-6 text-graphite sm:text-base sm:leading-7">{service.overview}</p>
        <div className="mt-8 flex flex-wrap gap-2">{service.preview.map(tag => <span key={tag} className="rounded-full border border-line bg-white/40 px-3 py-1.5 text-xs text-graphite transition group-hover:border-ink/20 group-hover:bg-white">{tag}</span>)}</div>
        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-medium transition group-hover:border-ink/25">See more <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span>
      </div>
    </MotionLink>
  );
}

export function ServiceDetailCard({ title, body, Icon }: { title: string; body: string; Icon?: any }) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="rounded-[1.85rem] border border-line bg-ivory p-6 transition-colors duration-300 hover:bg-white hover:shadow-[0_22px_65px_rgba(17,17,17,0.07)] sm:p-7"
    >
      <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/60">{Icon && <Icon size={18} strokeWidth={1.45}/>}</div>
      <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-graphite">{body}</p>
    </motion.article>
  );
}

export function ImageCard({ image, alt, label, title }: { image: string; alt: string; label: string; title: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[2rem] border border-line bg-ivory shadow-[0_16px_50px_rgba(17,17,17,0.04)]"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-t-[2rem]"><img src={image} alt={alt} className="h-full w-full object-cover grayscale-[12%] transition duration-1000 group-hover:scale-106" loading="lazy"/></div>
      <figcaption className="border-t border-line p-5"><p className="text-xs uppercase tracking-[.2em] text-muted">{label}</p><p className="mt-2 text-xl font-medium tracking-tight">{title}</p></figcaption>
    </motion.figure>
  );
}

export function PortfolioCard({ card }: { card: { title: string; category: string; image: string; industry: string; services: string; description: string } }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2.15rem] border border-line bg-ivory transition-colors duration-500 hover:bg-white hover:shadow-[0_30px_90px_rgba(17,17,17,0.08)]"
    >
      <div className="aspect-[16/12] overflow-hidden rounded-t-[2.15rem]"><img src={card.image} alt={`${card.title} visual placeholder`} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" loading="lazy"/></div>
      <div className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[.2em] text-muted">{card.category}</p>
        <h3 className="mt-5 text-3xl font-medium tracking-tightest">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-graphite">{card.description}</p>
        <div className="mt-7 grid gap-3 border-t border-line pt-5 text-sm text-graphite sm:grid-cols-2"><p><span className="block text-muted">Industry</span>{card.industry}</p><p><span className="block text-muted">Services</span>{card.services}</p></div>
        <button className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-medium transition group-hover:border-ink/25">View case study <ArrowRight size={15}/></button>
      </div>
    </motion.article>
  );
}
