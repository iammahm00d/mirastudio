import SEO from '../components/SEO';
import { breadcrumbSchema, faqSchema } from '../lib/schema';
import { PageHero } from '../components/Hero';
import { images, services } from '../data/site';
import { CTASection, ServicesGrid } from '../components/Sections';
import FAQAccordion from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import { Container, SectionTitle } from '../components/ui';

const faq = [
  { question: 'Which service should we start with?', answer: 'Start with the area that is blocking growth: brand clarity, website quality, campaign consistency, content production, monthly support, or a custom launch/rebrand scope.' },
  { question: 'Can we combine services?', answer: 'Yes. Many MiraStudio projects combine brand development, digital presence, content, campaigns, and monthly support.' },
  { question: 'Do you offer custom scopes?', answer: 'Yes. MiraStudio can shape custom scopes around business goals, platforms, campaigns, and monthly needs.' }
];

export default function Services() {
  return <PageTransition><SEO title="MiraStudio Services | Brand, Marketing & Digital Growth" description="Explore MiraStudio services across brand development, marketing campaigns, digital presence, content production, monthly support, and custom projects." path="/services" schemas={[breadcrumbSchema([{name:'Home',path:'/'},{name:'Services',path:'/services'}]), faqSchema(faq)]}/><PageHero eyebrow="Services" title="Services for building, launching, and growing your brand." intro="MiraStudio brings brand, marketing, content, and digital execution together so your business can move with clarity and consistency." image={images.studio} alt="Warm minimal studio interior for creative and digital growth work."/><ServicesGrid extended/><Comparison/><FAQAccordion items={faq}/><CTASection title="Not sure what you need? Let’s shape the right direction."/></PageTransition>
}
function Comparison() { return <section className="bg-ivory py-20 sm:py-28"><Container><SectionTitle eyebrow="Service comparison" title="Choose the support that fits your stage."/><div className="mt-12 grid gap-4 lg:grid-cols-3">{services.slice(0,3).map(service => <article key={service.slug} className="border border-line bg-cream p-7"><p className="text-xs uppercase tracking-[.22em] text-muted">{service.number}</p><h3 className="mt-12 text-3xl font-medium tracking-tightest">{service.title}</h3><p className="mt-4 text-sm leading-7 text-graphite">{service.overview}</p></article>)}</div></Container></section> }
