import { motion } from 'framer-motion';
import type { FAQ as FAQType } from '../data/site';
import { Container, SectionTitle } from './ui';

export default function FAQAccordion({ items }: { items: FAQType[] }) {
  return <section className="bg-cream py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><SectionTitle eyebrow="FAQ" title="Clear answers for focused decisions."/><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,ease:[.22,1,.36,1]}} className="overflow-hidden rounded-[2rem] border border-line bg-ivory shadow-[0_18px_60px_rgba(17,17,17,0.045)]">{items.map(item => <details key={item.question} className="group border-b border-line p-6 last:border-b-0 open:bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-medium tracking-tight">{item.question}<span className="text-muted transition group-open:rotate-45">+</span></summary><p className="mt-5 max-w-2xl text-sm leading-7 text-graphite">{item.answer}</p></details>)}</motion.div></div></Container></section>
}
