import { BarChart3, Box, Camera, ClipboardCheck, Compass, FileText, Layers, Megaphone, MonitorSmartphone, PenLine, RefreshCw, Search, Sparkles, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const site = {
  name: 'MiraStudio',
  url: 'https://mirastudio.com',
  email: 'hello@mirastudio.com',
  description: 'MiraStudio is a creative, marketing, and digital growth studio helping businesses build clear brands, strong digital experiences, consistent content, and ongoing marketing systems.'
};

export const images = {
  hero: 'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1800',
  studio: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1800',
  interior: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800',
  product: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1800',
  workspace: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1800',
  meeting: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800',
  laptop: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1800',
  packaging: 'https://images.pexels.com/photos/5709659/pexels-photo-5709659.jpeg?auto=compress&cs=tinysrgb&w=1800',
  camera: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1800',
  desk: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1800',
  architecture: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1800'
};

export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string;
  number: string;
  title: string;
  path: string;
  icon: LucideIcon;
  seoTitle: string;
  description: string;
  h1: string;
  intro: string[];
  overview: string;
  preview: string[];
  image: string;
  imageAlt: string;
  details: { title: string; body: string; icon?: LucideIcon }[];
  whoFor: string;
  faq: FAQ[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: 'brand-development',
    number: '01 / 06',
    title: 'Brand Development',
    path: '/services/brand-development',
    icon: Compass,
    seoTitle: 'Brand Development Services | MiraStudio',
    description: 'MiraStudio provides brand strategy, positioning, naming, logo design, visual identity, brand guidelines, packaging, profiles, and pitch decks.',
    h1: 'Build a brand with direction, clarity, and a strong identity.',
    intro: ['A strong brand is not just a logo. It is the way your business is positioned, understood, remembered, and trusted.', 'At MiraStudio, we help businesses create complete brand foundations that support growth. From strategy and naming to visual identity, messaging, packaging, and brand guidelines, we build brands that feel clear, professional, and consistent from the beginning.'],
    overview: 'Brand strategy, positioning, naming, messaging, logo design, visual identity, brand guidelines, packaging, profiles, pitch decks, and brand collateral.',
    preview: ['Brand Strategy', 'Visual Identity', 'Logo Design', 'Packaging', 'Pitch Decks', 'Brand Guidelines'],
    image: images.packaging,
    imageAlt: 'Neutral packaging and brand material photographed in a minimal editorial style.',
    details: [
      { title: 'Brand Strategy', body: 'We define your audience, market positioning, value proposition, tone, personality, and communication direction so the brand knows how to speak and what to focus on.', icon: Target },
      { title: 'Brand Positioning', body: 'We identify where your brand fits in the market and how it should be perceived by your audience. Positioning gives the brand a clear place in people’s minds.', icon: Compass },
      { title: 'Naming Support', body: 'For new businesses, products, or campaigns, we develop name directions aligned with your identity, audience, offer, and market context.', icon: PenLine },
      { title: 'Brand Messaging', body: 'We create taglines, key messages, brand stories, service descriptions, website messaging, and campaign language that make the brand easier to understand.', icon: FileText },
      { title: 'Logo Design', body: 'We design a professional mark that reflects the brand direction and works as part of a wider visual identity system, not as a standalone graphic.', icon: Sparkles },
      { title: 'Visual Identity Design', body: 'We build the visual language: colors, typography, graphic elements, layouts, imagery direction, applications, and usage principles.', icon: Layers },
      { title: 'Brand Guidelines', body: 'We organize your identity into a practical guideline document so teams, vendors, and partners can apply the brand consistently.', icon: ClipboardCheck },
      { title: 'Packaging Design', body: 'For product businesses, we design packaging that communicates quality, builds recognition, and supports the customer experience.', icon: Box },
      { title: 'Brand Collateral', body: 'We design business cards, documents, brochures, menus, letterheads, internal materials, sales sheets, and branded assets.', icon: FileText },
      { title: 'Company Profiles', body: 'We create polished profiles that explain who you are, what you do, your services, your value, and why clients should work with you.', icon: FileText },
      { title: 'Pitch Decks', body: 'We design decks for investors, partnerships, sales, and presentations, combining clear storytelling with strong visual hierarchy.', icon: BarChart3 }
    ],
    whoFor: 'Founders, startups, new businesses, growing companies, e-commerce brands, service providers, and organizations that need a stronger identity or clearer market presence.',
    faq: [
      { question: 'What is included in brand development?', answer: 'Brand development can include strategy, positioning, naming, messaging, logo design, visual identity, brand guidelines, packaging, profiles, pitch decks, and collateral.' },
      { question: 'Can MiraStudio create a complete brand from zero?', answer: 'Yes. MiraStudio can help develop a new brand from naming and strategy to identity, website, launch content, and marketing materials.' },
      { question: 'Do you only design logos?', answer: 'No. Logo design is one part of a complete brand system. MiraStudio builds visual and messaging systems that help the brand communicate consistently.' }
    ],
    cta: 'Ready to build your brand foundation?'
  },
  {
    slug: 'marketing-campaigns',
    number: '02 / 06',
    title: 'Marketing & Campaigns',
    path: '/services/marketing-campaigns',
    icon: Megaphone,
    seoTitle: 'Marketing & Campaign Services | MiraStudio',
    description: 'MiraStudio creates marketing campaigns, social media content, paid advertising creative, launch campaigns, email marketing, influencer campaigns, and monthly reports.',
    h1: 'Create marketing that is clear, consistent, and built around your business goals.',
    intro: ['Marketing should not feel random. Every campaign, post, ad, message, and visual should connect back to your brand direction.', 'MiraStudio helps businesses plan, create, launch, manage, and improve marketing campaigns across digital platforms.'],
    overview: 'Social media content, campaign planning, paid advertising support, launch campaigns, seasonal campaigns, promotional materials, email marketing, influencer campaigns, and marketing direction.',
    preview: ['Campaign Planning', 'Paid Campaign Support', 'Social Media', 'Email Marketing', 'Influencer Campaigns', 'Launch Campaigns'],
    image: images.meeting,
    imageAlt: 'Creative marketing planning meeting photographed in a refined studio setting.',
    details: [
      { title: 'Marketing Direction', body: 'We define your marketing direction based on goals, audience, offer, season, and business stage so activity stays focused instead of scattered.', icon: Compass },
      { title: 'Campaign Planning', body: 'We plan campaigns around launches, seasonal offers, awareness, promotions, events, or growth objectives with a clear message and execution plan.', icon: Megaphone },
      { title: 'Campaign Concepts', body: 'We create campaign ideas including theme, main message, content angles, visual style, and platform approach.', icon: Sparkles },
      { title: 'Social Media Content', body: 'We design posts, stories, reels covers, carousels, campaign content, promotional content, and branded templates.', icon: Layers },
      { title: 'Content Calendar Direction', body: 'We plan what to post, when to post it, and how each piece of content supports the bigger marketing goal.', icon: ClipboardCheck },
      { title: 'Paid Advertising Creative', body: 'We create ad visuals and copy for Instagram, TikTok, Snapchat, Google, LinkedIn, and other relevant channels.', icon: BarChart3 },
      { title: 'Paid Campaign Support', body: 'Depending on scope, we support setup, creative testing, monitoring, performance review, and monthly recommendations.', icon: Search },
      { title: 'Launch Campaigns', body: 'We create launch campaigns for brands, products, services, websites, stores, branches, and new offers.', icon: Megaphone },
      { title: 'Seasonal Campaigns', body: 'We design campaigns for Ramadan, Eid, National Day, Black Friday, summer, back-to-school, and other seasonal opportunities.', icon: Sparkles },
      { title: 'Email Marketing', body: 'We write and design email content for offers, updates, launches, customer journeys, and campaign sequences.', icon: FileText },
      { title: 'Influencer & UGC Campaigns', body: 'We create creator briefs, UGC direction, influencer campaign structures, and creative coordination.', icon: Camera },
      { title: 'Monthly Reports & Recommendations', body: 'We provide performance summaries, content observations, campaign insights, competitor notes, and improvement recommendations.', icon: BarChart3 }
    ],
    whoFor: 'Brands that need consistent marketing activity, campaign support, paid advertising creative, launch planning, social media direction, or monthly marketing execution.',
    faq: [
      { question: 'Does MiraStudio manage marketing campaigns?', answer: 'Yes. MiraStudio supports campaign planning, creative direction, campaign content, paid advertising creative, launch campaigns, seasonal campaigns, and ongoing support.' },
      { question: 'Can MiraStudio help with social media marketing?', answer: 'Yes. MiraStudio helps with social media content, content calendars, campaign visuals, social media design, platform direction, and monthly support.' },
      { question: 'Does MiraStudio support paid advertising?', answer: 'Yes. MiraStudio supports paid advertising creative, ad copy, campaign preparation, creative testing, and performance review depending on scope.' }
    ],
    cta: 'Need stronger marketing direction?'
  },
  {
    slug: 'digital-presence',
    number: '03 / 06',
    title: 'Digital Presence',
    path: '/services/digital-presence',
    icon: MonitorSmartphone,
    seoTitle: 'Website Design & Digital Presence | MiraStudio',
    description: 'MiraStudio designs and develops websites, landing pages, e-commerce platforms, mobile app interfaces, web apps, UX structures, and SEO-friendly digital experiences.',
    h1: 'Design and build digital experiences that make your brand clear, trusted, and easy to use.',
    intro: ['Your website or digital platform is often the first serious interaction people have with your brand. It should look professional, explain your value clearly, and guide users toward action.', 'MiraStudio designs and develops websites, landing pages, e-commerce experiences, digital interfaces, mobile-first layouts, web apps, and digital products that connect brand identity with user experience.'],
    overview: 'Website design, website development, landing pages, e-commerce platforms, mobile app interfaces, web apps, UX structure, SEO foundations, website maintenance, and technical support.',
    preview: ['Website Design', 'Website Development', 'UX Structure', 'eCommerce', 'Mobile Apps', 'SEO Foundations'],
    image: images.laptop,
    imageAlt: 'Laptop workspace for website design and digital product planning.',
    details: [
      { title: 'Website Design', body: 'We design websites that reflect your brand identity, communicate services clearly, and create a strong first impression built around clarity, trust, and conversion.', icon: MonitorSmartphone },
      { title: 'Website Development', body: 'We support development from design to launch for business websites, service websites, portfolios, corporate websites, and custom experiences.', icon: Layers },
      { title: 'Landing Page Design', body: 'We design focused pages for campaigns, launches, sign-ups, offers, sales funnels, and lead generation.', icon: FileText },
      { title: 'E-commerce Design', body: 'We design product pages, category pages, checkout flow direction, homepage structure, and promotional sections that help customers understand and buy.', icon: Box },
      { title: 'E-commerce Development', body: 'We support online store development across platforms and custom solutions depending on project needs.', icon: MonitorSmartphone },
      { title: 'UI Design', body: 'We design interfaces for websites, dashboards, mobile apps, web apps, platforms, and digital products.', icon: Layers },
      { title: 'UX Structure', body: 'We organize journeys, page flow, navigation, content hierarchy, and interaction structure so experiences feel clear and easy.', icon: Compass },
      { title: 'Mobile-First Layouts', body: 'We design digital experiences that work smoothly across mobile, tablet, laptop, and desktop screens.', icon: MonitorSmartphone },
      { title: 'Web App & Platform Design', body: 'We support dashboards, customer portals, booking systems, internal tools, and digital platforms.', icon: Layers },
      { title: 'Mobile App Design', body: 'We design mobile app interfaces that are clear, usable, and aligned with the brand experience.', icon: MonitorSmartphone },
      { title: 'SEO Foundations', body: 'We support structure, headings, metadata, content hierarchy, speed considerations, and search-friendly page planning.', icon: Search },
      { title: 'Website Maintenance', body: 'We provide ongoing updates, content changes, landing pages, new sections, visuals, and performance improvements.', icon: RefreshCw }
    ],
    whoFor: 'Businesses that need a new website, improved website, e-commerce platform, digital product interface, landing page, mobile app design, or ongoing website support.',
    faq: [
      { question: 'Does MiraStudio design and develop websites?', answer: 'Yes. MiraStudio supports website design, website development, landing pages, e-commerce platforms, website content direction, SEO foundations, and maintenance.' },
      { question: 'Can MiraStudio design mobile apps?', answer: 'Yes. MiraStudio supports mobile app interface design, UX structure, digital product design, and mobile app development support depending on scope.' },
      { question: 'Does MiraStudio help with SEO?', answer: 'Yes. MiraStudio supports SEO foundations including website structure, content hierarchy, technical basics, speed considerations, and search-friendly planning.' }
    ],
    cta: 'Ready to improve your digital presence?'
  },
  {
    slug: 'content-production',
    number: '04 / 06',
    title: 'Content Production',
    path: '/services/content-production',
    icon: Camera,
    seoTitle: 'Content Production Services | MiraStudio',
    description: 'MiraStudio creates social media content, copywriting, photography direction, motion graphics, product visuals, UGC direction, video concepts, and event content.',
    h1: 'Create content that looks consistent, communicates clearly, and keeps your brand active.',
    intro: ['Content is how people continue to experience your brand after the first impression.', 'MiraStudio creates content systems, visuals, copy, photography direction, motion graphics, promotional materials, social media assets, storytelling content, and campaign materials that help your brand stay visible and recognizable.'],
    overview: 'Social media design, copywriting, photography direction, photography production, video direction, motion graphics, product visuals, UGC direction, and event coverage.',
    preview: ['Photography', 'Motion Graphics', 'Copywriting', 'Product Visuals', 'UGC Direction', 'Event Content'],
    image: images.camera,
    imageAlt: 'Professional camera and content production equipment in a minimal studio environment.',
    details: [
      { title: 'Social Media Design', body: 'We design posts, stories, carousels, reels covers, highlight covers, campaign templates, and branded content systems.', icon: Layers },
      { title: 'Copywriting', body: 'We write clear copy for websites, social media, campaigns, ads, company profiles, pitch decks, emails, and promotional materials.', icon: PenLine },
      { title: 'Visual Storytelling', body: 'We turn your message, product, or service into content that people can understand and remember.', icon: Sparkles },
      { title: 'Motion Graphics', body: 'We create motion-based visuals for social media, campaigns, announcements, ads, and digital platforms.', icon: RefreshCw },
      { title: 'Product Visuals', body: 'We create promotional visuals, e-commerce graphics, campaign content, and product storytelling assets.', icon: Box },
      { title: 'Photography Direction', body: 'We plan and direct photography concepts for products, people, spaces, events, campaigns, and brand content.', icon: Camera },
      { title: 'Photography Production', body: 'Depending on the project, we support photography production for products, teams, locations, campaigns, and social media.', icon: Camera },
      { title: 'Video & Reel Direction', body: 'We support creative direction for short-form video, reels, campaign videos, product content, and promotional videos.', icon: MonitorSmartphone },
      { title: 'UGC Content Direction', body: 'We create briefs, concepts, and direction for user-generated content so creator output stays aligned with the brand goal.', icon: FileText },
      { title: 'Event Coverage', body: 'We support content planning and creative coverage for events, launches, activations, openings, and brand experiences.', icon: Megaphone },
      { title: 'Presentation Design', body: 'We design presentations for sales, investors, internal meetings, proposals, events, and business development.', icon: FileText },
      { title: 'Promotional Materials', body: 'We design flyers, posters, banners, menus, catalogs, brochures, announcements, offers, and campaign assets.', icon: Layers }
    ],
    whoFor: 'Brands that need consistent creative content, campaign visuals, social media assets, photography direction, product content, motion graphics, or promotional materials.',
    faq: [
      { question: 'What type of content does MiraStudio create?', answer: 'MiraStudio creates social media content, campaign visuals, copywriting, product visuals, photography direction, motion graphics, UGC direction, presentations, and promotional materials.' },
      { question: 'Can MiraStudio help with photography and video?', answer: 'Yes. MiraStudio supports photography direction, photography production, video and reel direction, product content, event content, and campaign production.' },
      { question: 'Does MiraStudio create content for social media?', answer: 'Yes. MiraStudio designs posts, stories, carousels, reels covers, templates, campaigns, and branded content systems.' }
    ],
    cta: 'Need content that feels connected to your brand?'
  },
  {
    slug: 'monthly-partnership',
    number: '05 / 06',
    title: 'Monthly Partnership',
    path: '/services/monthly-partnership',
    icon: RefreshCw,
    seoTitle: 'Monthly Creative & Marketing Support | MiraStudio',
    description: 'MiraStudio offers monthly creative, marketing, social media, campaign, website, reporting, and content support for businesses that need ongoing growth.',
    h1: 'Your ongoing creative, marketing, and digital team.',
    intro: ['Building a brand does not stop after launch.', 'MiraStudio’s monthly partnership is designed for businesses that need continuous support to stay active, visible, consistent, and ready for growth. Each month, we help you plan, design, write, manage, improve, and produce the creative and marketing materials your business needs.'],
    overview: 'Ongoing creative, marketing, content, campaign, social media, reporting, website, and growth support for businesses that need a reliable monthly team.',
    preview: ['Monthly Content', 'Social Management', 'Campaign Support', 'Reports', 'Website Updates', 'Creative Direction'],
    image: images.workspace,
    imageAlt: 'Minimal workspace representing monthly creative and marketing support.',
    details: [
      { title: 'Monthly Creative Direction', body: 'We define the creative focus of the month based on business priorities, campaigns, launches, offers, and seasonal opportunities.', icon: Compass },
      { title: 'Social Media Content', body: 'We plan and design social media content that keeps your brand present and recognizable across platforms.', icon: Layers },
      { title: 'Content Calendar', body: 'We organize the monthly content flow so posts, campaigns, and announcements are structured.', icon: ClipboardCheck },
      { title: 'Campaign Support', body: 'We support monthly campaigns, launches, offers, awareness pushes, seasonal moments, and promotional activity.', icon: Megaphone },
      { title: 'Paid Ad Creative', body: 'We create visuals and copy for static ads, story ads, carousel ads, short-form ad concepts, and landing page support.', icon: BarChart3 },
      { title: 'Social Media Management', body: 'Depending on package, we support publishing coordination, account management, platform organization, and weekly activity.', icon: MonitorSmartphone },
      { title: 'Copywriting', body: 'We write copy for social, ads, websites, emails, campaigns, profiles, presentations, and promotional materials.', icon: PenLine },
      { title: 'Website Updates', body: 'We support website sections, content, visuals, banners, campaign pages, product pages, and service pages.', icon: RefreshCw },
      { title: 'Email Marketing', body: 'We create email content for campaigns, announcements, offers, launches, and customer communication.', icon: FileText },
      { title: 'Performance Review', body: 'We review monthly activity and provide observations, insights, recommendations, and improvement points.', icon: Search },
      { title: 'Competitor & Market Notes', body: 'We review competitor activity and market direction so your brand stays aware and improves communication.', icon: BarChart3 },
      { title: 'Continuous Improvement', body: 'Each month, we improve communication, content, visuals, campaigns, and digital presence based on what the business needs next.', icon: RefreshCw }
    ],
    whoFor: 'Businesses that need ongoing creative, marketing, content, campaign, social media, website, reporting, and growth support without hiring a full internal team.',
    faq: [
      { question: 'What is included in monthly support?', answer: 'Monthly support can include creative direction, social media content, calendars, campaign support, paid ad creative, website updates, email marketing, reports, and content production support.' },
      { question: 'Are the monthly packages fixed?', answer: 'Packages can be structured based on business stage, workload, platforms, campaign needs, and creative requirements.' },
      { question: 'Can MiraStudio work like an external creative and marketing team?', answer: 'Yes. The monthly partnership is designed for businesses that need ongoing support without hiring a full internal creative and marketing team.' }
    ],
    cta: 'Need a creative and marketing team every month?'
  },
  {
    slug: 'custom-engagements',
    number: '06 / 06',
    title: 'Custom Engagements',
    path: '/services/custom-engagements',
    icon: Layers,
    seoTitle: 'Custom Creative & Marketing Projects | MiraStudio',
    description: 'MiraStudio supports custom projects including startup launches, brand refreshes, audits, creative direction, marketing direction, campaign planning, and digital product support.',
    h1: 'For brands that need focused support, special projects, or complete execution.',
    intro: ['Not every business needs the same service in the same way.', 'MiraStudio offers custom engagements for startups, growing businesses, digital products, campaign launches, brand refreshes, marketing challenges, and special projects that need a tailored approach.'],
    overview: 'Startup launch support, brand audits, creative direction, marketing direction, specialist coordination, digital product support, campaign planning, and full project execution.',
    preview: ['Startup Launch', 'Brand Audit', 'Creative Direction', 'Marketing Direction', 'Digital Products', 'Custom Projects'],
    image: images.architecture,
    imageAlt: 'Minimal architectural composition representing custom creative project direction.',
    details: [
      { title: 'Startup Launch Support', body: 'We help founders launch with naming, brand strategy, identity, website, pitch deck, social media launch content, and campaign materials.', icon: Sparkles },
      { title: 'Brand Refresh', body: 'We improve existing identity, messaging, visuals, website, social presence, and overall brand consistency.', icon: RefreshCw },
      { title: 'Brand Audits', body: 'We review brand, website, content, social media, and marketing materials to identify what works, what is unclear, and what needs improvement.', icon: Search },
      { title: 'Creative Direction', body: 'We guide the visual and communication direction of your brand, campaign, website, content, or product.', icon: Compass },
      { title: 'Marketing Direction', body: 'We organize campaign structure, content pillars, platform focus, and monthly communication priorities.', icon: Megaphone },
      { title: 'Digital Product Support', body: 'We support UI design, UX structure, brand integration, product presentation, interface direction, and launch materials.', icon: MonitorSmartphone },
      { title: 'Specialist Coordination', body: 'When a project needs additional specialists, we coordinate creative and technical direction so output stays aligned.', icon: Layers },
      { title: 'Campaign Planning', body: 'We plan campaigns from concept to execution: message, audience, visual direction, content structure, platform plan, and deliverables.', icon: ClipboardCheck },
      { title: 'Visual Problem-Solving', body: 'We solve brand confusion, weak presentation, inconsistent visuals, unclear website flow, and disconnected marketing content.', icon: Sparkles }
    ],
    whoFor: 'Businesses that need flexible, focused, or high-level support outside a standard package.',
    faq: [
      { question: 'What is a custom engagement?', answer: 'A custom engagement is a tailored project designed around a specific business need such as a launch, rebrand, audit, campaign, website, or digital product.' },
      { question: 'Can MiraStudio help with startup launches?', answer: 'Yes. MiraStudio supports startup launches with strategy, naming, identity, website, pitch deck, launch content, and marketing direction.' },
      { question: 'Can MiraStudio audit an existing brand?', answer: 'Yes. MiraStudio can review your brand, website, social media, content, and marketing materials to identify gaps and improvement opportunities.' }
    ],
    cta: 'Have a project that needs a custom approach?'
  }
];

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const workCards = [
  { title: 'Brand Identity System', category: 'Sample project category', image: images.packaging, industry: 'Retail / Product', services: 'Strategy, identity, packaging', description: 'A refined placeholder case-study category for complete identity systems, packaging, and brand applications.' },
  { title: 'Website & Digital Experience', category: 'Sample project category', image: images.laptop, industry: 'Technology / Services', services: 'UX, UI, development', description: 'A sample category for digital experiences designed around clarity, trust, conversion, and mobile-first behavior.' },
  { title: 'Campaign Direction', category: 'Sample project category', image: images.meeting, industry: 'Marketing / Launch', services: 'Campaign concept, content, ads', description: 'A campaign-focused placeholder for launch ideas, paid creative, seasonal direction, and content systems.' },
  { title: 'Packaging & Content Production', category: 'Sample project category', image: images.product, industry: 'Beauty / Lifestyle', services: 'Product visuals, photography, copy', description: 'A visual production category for product imagery, social assets, launch materials, and promotional storytelling.' }
];
