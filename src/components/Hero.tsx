import { motion } from 'framer-motion';
import { Button, Container, Eyebrow } from './ui';

const softReveal = { opacity: 1, y: 0, filter: 'blur(0px)' };
const hiddenReveal = { opacity: 0, y: 24, filter: 'blur(10px)' };

export function HomeHero({ image }: { image: string }) {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 sm:pt-40 lg:pt-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <motion.div initial={hiddenReveal} animate={softReveal} transition={{duration:.82,ease:[.22,1,.36,1]}}>
            <Eyebrow>Creative · Marketing · Digital Growth</Eyebrow>
            <h1 className="mt-6 max-w-6xl text-5xl font-medium leading-[.94] tracking-tightest sm:text-7xl lg:text-[6.9rem]">Creative, marketing, and digital systems for brands ready to grow.</h1>
            <div className="mt-8 grid max-w-4xl gap-5 text-base leading-8 text-graphite sm:text-lg lg:grid-cols-2">
              <p>MiraStudio helps founders, startups, and businesses build complete brand systems, digital experiences, marketing content, and ongoing growth support.</p>
              <p>From strategy and identity to websites, campaigns, social media, content production, development, and monthly marketing support, we help businesses move from idea to presence, and from presence to growth.</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button to="/contact">Start a project</Button><Button to="/services" variant="outline">Explore services</Button></div>
          </motion.div>

          <motion.figure
            initial={{opacity:0,y:42,scale:.985,filter:'blur(8px)'}}
            animate={{opacity:1,y:0,scale:1,filter:'blur(0px)'}}
            transition={{duration:.95,delay:.12,ease:[.22,1,.36,1]}}
            className="relative overflow-hidden rounded-[2.35rem] border border-line bg-white p-3 editorial-shadow"
          >
            <motion.div className="aspect-[4/5] overflow-hidden rounded-[1.85rem] lg:aspect-[4/5]" whileHover={{ scale: 0.985 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <img src={image} alt="Premium editorial studio workspace representing MiraStudio brand and digital work." className="h-full w-full object-cover transition duration-1000 hover:scale-105"/>
            </motion.div>
            <figcaption className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/20 bg-ink/75 p-4 text-cream backdrop-blur-md">
              <p className="text-xs uppercase tracking-[.22em] text-champagne">Studio systems</p>
              <p className="mt-2 text-xl tracking-tight">Brand, digital, content, and marketing built in one direction.</p>
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string | string[]; image?: string; alt?: string }) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];
  return (
    <section className="bg-cream pt-32 sm:pt-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_.86fr] lg:items-end">
          <motion.div initial={hiddenReveal} animate={softReveal} transition={{duration:.7,ease:[.22,1,.36,1]}}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[.97] tracking-tightest sm:text-7xl lg:text-[5.8rem]">{title}</h1>
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-graphite sm:text-lg">{paragraphs.map(p => <p key={p}>{p}</p>)}</div>
          </motion.div>
          {image && (
            <motion.figure initial={{opacity:0,y:30,scale:.985}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.82,delay:.08,ease:[.22,1,.36,1]}} className="overflow-hidden rounded-[2.25rem] border border-line bg-white p-3 shadow-[0_24px_75px_rgba(17,17,17,0.065)]">
              <div className="aspect-[16/12] overflow-hidden rounded-[1.75rem]"><img src={image} alt={alt} className="h-full w-full object-cover"/></div>
            </motion.figure>
          )}
        </div>
      </Container>
    </section>
  );
}
