import { Helmet } from 'react-helmet-async';
import { organizationSchema, professionalServiceSchema } from '../lib/schema';
import { site } from '../data/site';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  schemas?: Array<Record<string, unknown> | null>;
};

export default function SEO({ title, description, path, schemas = [] }: SEOProps) {
  const url = `${site.url}${path}`;
  const allSchemas = [organizationSchema, professionalServiceSchema, ...schemas].filter(Boolean);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
