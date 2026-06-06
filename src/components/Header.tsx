import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, services } from '../data/site';
import { Button, Container } from './ui';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium tracking-[-0.01em] transition duration-300 ${isActive ? 'text-ink' : 'text-graphite hover:text-ink'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/65 bg-cream/82 backdrop-blur-2xl supports-[backdrop-filter]:bg-cream/72">
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-6 lg:h-[84px]">
          <Link
            to="/"
            className="focus-ring rounded-full text-[22px] font-semibold tracking-[-0.055em] text-ink"
            aria-label="MiraStudio home"
          >
            MiraStudio
          </Link>

          <nav className="hidden items-center gap-9 xl:gap-11 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.path}
                    className="relative py-7"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      className={`flex items-center gap-1.5 text-sm font-medium tracking-[-0.01em] transition duration-300 ${servicesActive ? 'text-ink' : 'text-graphite hover:text-ink'}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services <ChevronDown size={14} strokeWidth={1.7} className={`transition duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.985, filter: 'blur(8px)' }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: 10, scale: 0.985, filter: 'blur(8px)' }}
                          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-[68px] w-[390px] -translate-x-1/2 rounded-[2rem] border border-line bg-white/95 p-3 shadow-[0_28px_90px_rgba(17,17,17,0.12)] backdrop-blur-2xl"
                        >
                          {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.025, duration: 0.22 }}
                              >
                                <Link
                                  to={service.path}
                                  onClick={() => setServicesOpen(false)}
                                  className="group grid grid-cols-[42px_1fr] gap-3 rounded-[1.45rem] px-3 py-3.5 text-left transition duration-300 hover:bg-cream/80"
                                >
                                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition duration-300 group-hover:border-ink/25 group-hover:shadow-[0_12px_35px_rgba(17,17,17,0.07)]">
                                    <Icon size={17} strokeWidth={1.55} />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-medium tracking-[-0.02em] text-ink">{service.title}</span>
                                    <span className="mt-1 block text-xs leading-5 text-muted">{service.preview.slice(0, 3).join(' · ')}</span>
                                  </span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink key={item.path} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" className="min-h-[46px] px-5">Start a project</Button>
          </div>

          <button
            className="focus-ring rounded-full border border-line bg-white/65 p-3 text-ink shadow-[0_10px_35px_rgba(17,17,17,0.04)] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={23} strokeWidth={1.7} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] min-h-[100dvh] overflow-y-auto bg-cream px-5 py-5 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="text-[22px] font-semibold tracking-[-0.055em] text-ink">
                MiraStudio
              </Link>
              <button
                className="rounded-full border border-line bg-white/70 p-3 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X size={23} strokeWidth={1.7} />
              </button>
            </div>

            <motion.nav
              className="grid gap-3 pb-10"
              aria-label="Mobile navigation"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
            >
              {navigation.filter((item) => item.label !== 'Services').map((item) => (
                <motion.div key={item.path} variants={{ hidden: { opacity: 0, y: 14, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-[1.65rem] border border-line bg-white/62 px-5 py-5 text-3xl font-medium leading-none tracking-[-0.055em] text-ink shadow-[0_12px_40px_rgba(17,17,17,0.04)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{ hidden: { opacity: 0, y: 14, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
                className="rounded-[1.65rem] border border-line bg-white/62 p-4 shadow-[0_12px_40px_rgba(17,17,17,0.04)]"
              >
                <div className="mb-2 flex items-center justify-between px-1">
                  <p className="text-xs font-medium uppercase tracking-[.22em] text-muted">Services</p>
                  <span className="text-xs text-muted">06</span>
                </div>
                <div className="grid gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={service.path}
                      onClick={() => setOpen(false)}
                      className="grid grid-cols-[44px_1fr] items-center gap-3 rounded-[1.25rem] px-2 py-3.5 transition active:bg-cream/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream/75 text-xs text-muted">
                        {service.number.slice(0, 2)}
                      </span>
                      <span className="text-xl font-medium tracking-[-0.04em] text-ink">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 14, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>
                <Button to="/contact" onClick={() => setOpen(false)} className="mt-3 w-full min-h-[56px]" variant="dark">
                  Start a project
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
