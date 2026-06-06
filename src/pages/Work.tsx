import SEO from '../components/SEO';
import { breadcrumbSchema } from '../lib/schema';
import { PageHero } from '../components/Hero';
import { images, workCards } from '../data/site';
import { PortfolioCard } from '../components/Cards';
import { Container, SectionTitle } from '../components/ui';
import { CTASection } from '../components/Sections';
import PageTransition from '../components/PageTransition';

const categories = ['Brand Identity','Social Media','Websites & Digital Interfaces','Campaigns','Presentations & Profiles','Content Production'];
export default function Work() {
  return <PageTransition><SEO title="MiraStudio Work | Branding, Websites & Campaigns" description="Explore MiraStudio work across brand identity, social media, websites, campaigns, digital interfaces, presentations, and marketing materials." path="/work" schemas={[breadcrumbSchema([{name:'Home',path:'/'},{name:'Work',path:'/work'}])]}/><PageHero eyebrow="Work / Portfolio" title="Work built to make brands clearer, stronger, and more recognizable." intro="Our work covers brand identities, visual systems, social media designs, websites, digital interfaces, campaigns, content systems, presentations, packaging, and marketing materials." image={images.product} alt="Minimal product photography placeholder for MiraStudio portfolio work."/><section className="bg-cream py-20 sm:py-28"><Container><SectionTitle eyebrow="Portfolio categories" title="Sample project categories ready for real case studies." body="If no real portfolio images are provided, these remain clearly marked as sample categories. No fake client names are invented."/><div className="mt-12 flex flex-wrap gap-2">{categories.map(c => <span key={c} className="border border-line bg-ivory px-4 py-2 text-sm text-graphite">{c}</span>)}</div><div className="mt-12 grid gap-5 lg:grid-cols-2">{workCards.map(card => <PortfolioCard key={card.title} card={card}/>)}</div></Container></section><CTASection title="View how we can support your brand."/></PageTransition>
}
