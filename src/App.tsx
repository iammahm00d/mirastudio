import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();
  return <div className="min-h-screen bg-cream text-ink"><Header/><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/about" element={<About/>}/><Route path="/work" element={<Work/>}/><Route path="/contact" element={<Contact/>}/></Routes></AnimatePresence><Footer/></div>
}
