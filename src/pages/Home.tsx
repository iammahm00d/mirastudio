import SEO from '../components/SEO';
import { breadcrumbSchema, faqSchema } from '../lib/schema';
import { images } from '../data/site';
import { HomeHero } from '../components/Hero';
import { ApproachSection, CTASection, InsightsSection, MarqueeStrip, ServicesGrid, WhySection, WorkPreview } from '../components/Sections';
import FAQAccordion from '../components/FAQ';
import PageTransition from '../components/PageTransition';

const faq = [
  { question: 'What does MiraStudio do?', answer: 'MiraStudio provides brand development, website design and development, marketing campaigns, social media content, content production, and monthly creative and marketing support.' },
  { question: 'Who does MiraStudio work with?', answer: 'MiraStudio works with founders, startups, growing businesses, e-commerce brands, digital platforms, service providers, and organizations that need stronger brand, marketing, and digital support.' },
  { question: 'Can MiraStudio support us every month?', answer: 'Yes. MiraStudio offers monthly partnership support for businesses that need ongoing creative, marketing, content, campaign, website, and digital support.' },
  { question: 'Does MiraStudio build websites?', answer: 'Yes. MiraStudio supports website design, website development, landing pages, e-commerce experiences, web apps, UX structure, SEO foundations, and website maintenance.' },
  { question: 'Can MiraStudio help launch a new business?', answer: 'Yes. MiraStudio helps new businesses with naming, strategy, identity, websites, pitch decks, launch campaigns, social media content, and marketing direction.' }
];

export default function Home() {
  return <PageTransition><SEO title="MiraStudio | Creative, Marketing & Digital Growth Studio" description="MiraStudio builds brands, websites, campaigns, content, and monthly marketing systems for businesses ready to grow with direction." path="/" schemas={[breadcrumbSchema([{name:'Home', path:'/'}]), faqSchema(faq)]}/><HomeHero image={images.hero}/><MarqueeStrip/><ServicesGrid/><ApproachSection/><WorkPreview/><WhySection/><Testimonials/><InsightsSection/><FAQAccordion items={faq}/><CTASection/></PageTransition>
}

function Testimonials() {
  return <section className="bg-ink py-20 text-cream sm:py-28"><div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10"><p className="text-xs uppercase tracking-[.22em] text-champagne">Testimonials</p><div className="mt-6 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><h2 className="text-5xl font-medium leading-[.95] tracking-tightest sm:text-7xl">Client words coming soon.</h2><div className="border border-white/15 p-7"><p className="text-lg leading-8 text-cream/70">Real testimonials can be added here when available. This section is intentionally not filled with invented client identities or fake quotes.</p></div></div></div></section>
}
