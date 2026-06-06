import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCategoryCard, PortfolioCard } from './Cards';
import { Button, Container, SectionTitle } from './ui';
import { services, workCards } from '../data/site';

export function ServicesGrid({ extended = false }: { extended?: boolean }) {
  return <section className="bg-cream py-20 sm:py-28"><Container><div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionTitle eyebrow="Selected services" title={extended ? 'Services for building, launching, and growing your brand.' : 'Selected services for complete brand momentum.'} body={extended ? 'MiraStudio brings brand, marketing, content, and digital execution together so your business can move with clarity and consistency.' : undefined}/>{!extended && <Button to="/services" variant="outline">Explore all services</Button>}</div><motion.div className="grid gap-5 lg:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ visible: { transition: { staggerChildren: 0.075 } } }}>{services.map(service => <ServiceCategoryCard key={service.slug} service={service}/>)}</motion.div></Container></section>
}

export function ApproachSection() {
  const steps = [
    ['01','Align','We understand your business, audience, market, goals, competitors, and current challenges before creating anything.'],
    ['02','Build','We turn the direction into brand identity, digital presence, content, campaigns, and the tools your business needs.'],
    ['03','Grow','We support your brand after launch with monthly creative, marketing, campaign, website, and content improvements.']
  ];
  return <section className="bg-ink py-20 text-cream sm:py-28"><Container><div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]"><SectionTitle light eyebrow="Our approach" title="We connect strategy, design, content, marketing, and technology into one clear direction." body="A strong brand is not built from disconnected tasks. It needs direction, consistency, and the ability to show up clearly across every touchpoint. MiraStudio helps you define the foundation, build the system, and keep improving it through creative and digital execution."/><motion.div className="grid gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>{steps.map(([n,t,b]) => <motion.article variants={{ hidden:{opacity:0,y:18}, visible:{opacity:1,y:0} }} transition={{duration:.55,ease:[.22,1,.36,1]}} key={t} className="grid gap-5 rounded-[1.85rem] border border-white/15 bg-white/[0.035] p-6 sm:grid-cols-[120px_1fr]"><p className="text-xs uppercase tracking-[.22em] text-champagne">{n}</p><div><h3 className="text-4xl font-medium tracking-tightest">{t}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-cream/65">{b}</p></div></motion.article>)}</motion.div></div></Container></section>
}

export function WorkPreview() {
  return <section className="bg-cream py-20 sm:py-28"><Container><div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionTitle eyebrow="Latest work" title="Editorial project categories shaped for real portfolio content." body="If real portfolio images are not available, these cards stay clearly marked as sample project categories and avoid invented client names."/><Button to="/work" variant="outline">View full portfolio</Button></div><div className="grid gap-6 lg:grid-cols-2">{workCards.map(card => <PortfolioCard key={card.title} card={card}/>)}</div></Container></section>
}

export function WhySection() {
  const points = ['One team for brand, marketing, and digital growth','Strategy before execution','Consistency across every touchpoint','Flexible support for every stage','Clear, professional output'];
  return <section className="bg-ivory py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><SectionTitle eyebrow="Why MiraStudio" title="A premium external team with one clear creative direction."/><motion.div className="grid gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ visible: { transition: { staggerChildren: .055 } } }}>{points.map((point, i) => <motion.article variants={{ hidden:{opacity:0,x:18}, visible:{opacity:1,x:0} }} transition={{duration:.5,ease:[.22,1,.36,1]}} key={point} className="grid gap-4 rounded-[1.75rem] border border-line bg-cream/50 p-6 transition hover:bg-white hover:shadow-[0_18px_55px_rgba(17,17,17,0.055)] sm:grid-cols-[90px_1fr]"><p className="text-xs uppercase tracking-[.22em] text-muted">{String(i+1).padStart(2,'0')}</p><div><h3 className="text-2xl font-medium tracking-tight">{point}</h3><p className="mt-2 text-sm leading-7 text-graphite">MiraStudio keeps brand, digital, content, and marketing decisions connected so your business looks consistent, communicates clearly, and grows with direction.</p></div></motion.article>)}</motion.div></div></Container></section>
}

export function MarqueeStrip() {
  return <div className="overflow-hidden border-y border-line bg-ivory py-5"><div className="flex min-w-max animate-[marquee_30s_linear_infinite] gap-10 text-xs uppercase tracking-[.24em] text-muted"><span>Brand Strategy</span><span>Website Design</span><span>Content Production</span><span>Campaign Planning</span><span>Monthly Marketing Support</span><span>Digital Growth</span><span>Brand Strategy</span><span>Website Design</span><span>Content Production</span></div><style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style></div>
}

export function InsightsSection() {
  const posts = ['Building a brand system that can grow','Why consistent content matters after launch','What a strong website needs before design starts'];
  return <section className="bg-cream py-20 sm:py-28"><Container><SectionTitle eyebrow="Latest insights" title="Notes for brands building with more intention."/><div className="mt-12 grid gap-4 lg:grid-cols-3">{posts.map((post, i) => <motion.div key={post} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.05}}><Link to="/contact" className="group block rounded-[1.85rem] border border-line bg-ivory p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(17,17,17,0.07)]"><p className="text-xs uppercase tracking-[.22em] text-muted">Insight {String(i+1).padStart(2,'0')}</p><h3 className="mt-16 text-3xl font-medium tracking-tightest">{post}</h3><span className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-4 py-2 text-sm font-medium">Discuss this topic <ArrowRight size={15}/></span></Link></motion.div>)}</div></Container></section>
}

export function CTASection({ title = 'Let’s build a brand that moves with direction.' }: { title?: string }) {
  return <section className="bg-cream py-20 sm:py-28"><Container><motion.div initial={{opacity:0,y:24,scale:.99}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true, margin:'-100px'}} transition={{duration:.65,ease:[.22,1,.36,1]}} className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12 lg:p-16"><div className="absolute inset-0 bg-noise opacity-20"/><div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-champagne/10 blur-3xl"/><div className="relative grid gap-10 lg:grid-cols-[1fr_.5fr] lg:items-end"><div><p className="text-xs uppercase tracking-[.22em] text-champagne">Start a project</p><h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[.97] tracking-tightest sm:text-7xl">{title}</h2></div><div className="flex flex-col gap-3 sm:flex-row lg:justify-end"><Button to="/contact" variant="light">Start a project</Button><Button to="/services" variant="light">Explore services</Button></div></div></motion.div></Container></section>
}
