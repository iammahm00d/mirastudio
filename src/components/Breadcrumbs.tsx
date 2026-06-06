import { Link } from 'react-router-dom';
import { Container } from './ui';

export default function Breadcrumbs({ items }: { items: { label: string; path: string }[] }) {
  return <Container className="pt-24"><nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[.18em] text-muted">{items.map((item, index) => <span key={item.path}>{index > 0 && <span className="mx-2">/</span>}<Link to={item.path} className="hover:text-ink">{item.label}</Link></span>)}</nav></Container>
}
