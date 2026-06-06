import { site, services, type FAQ, type Service } from '../data/site';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  description: site.description,
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  email: site.email,
  priceRange: 'Custom pricing',
  areaServed: 'Global',
  description: site.description,
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: service.title, description: service.description }
  }))
};

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} by ${site.name}`,
    serviceType: service.title,
    description: service.description,
    url: `${site.url}${service.path}`,
    provider: { '@type': 'ProfessionalService', name: site.name, url: site.url },
    areaServed: 'Global'
  };
}

export function faqSchema(faq?: FAQ[]) {
  if (!faq?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`
    }))
  };
}
