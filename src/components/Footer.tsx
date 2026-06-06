import { Link } from 'react-router-dom';
import { navigation, services, site } from '../data/site';
import { Button, Container } from './ui';

export default function Footer() {
  const capabilities = ['Brand Strategy','Website Design','Website Development','Social Media Content','Campaign Planning','Monthly Marketing Support'];
  const social = ['Instagram','LinkedIn','Email'];
  return <footer className="border-t border-line bg-ink text-cream">
    <Container className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_.7fr_1fr_1fr_.7fr]">
        <div><Link to="/" className="text-4xl font-medium tracking-tightest">MiraStudio</Link><p className="mt-6 max-w-md text-base leading-7 text-cream/65">{site.description}</p><Button to="/contact" variant="light" className="mt-8">Start a project</Button></div>
        <FooterCol title="Studio" links={navigation.filter(n => n.label !== 'Services')} />
        <FooterCol title="Services" links={services.map(s => ({ label: s.title, path: s.path }))} />
        <StaticCol title="Capabilities" items={capabilities} />
        <StaticCol title="Social" items={social} />
      </div>
      <div className="mt-16 border-t border-white/15 pt-6 text-sm text-cream/50">© MiraStudio. All rights reserved.</div>
    </Container>
  </footer>
}
function FooterCol({ title, links }: { title: string; links: { label: string; path: string }[] }) { return <div><h3 className="mb-5 text-xs uppercase tracking-[.22em] text-champagne">{title}</h3><div className="grid gap-3">{links.map(l => <Link key={l.path} to={l.path} className="text-sm text-cream/65 transition hover:text-cream">{l.label}</Link>)}</div></div> }
function StaticCol({ title, items }: { title: string; items: string[] }) { return <div><h3 className="mb-5 text-xs uppercase tracking-[.22em] text-champagne">{title}</h3><div className="grid gap-3">{items.map(item => <span key={item} className="text-sm text-cream/65">{item}</span>)}</div></div> }
