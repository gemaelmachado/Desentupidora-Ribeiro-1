import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Menu, 
  X, 
  MessageCircle,
  Droplets,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/assets/logo.png';

const WHATSAPP_NUMBER = "5561985849011";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento com a Desentupidora Ribeiro.`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Scroll to top or to hash on route change
  useEffect(() => {
    // Dynamic Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    // Remove trailing slash if it exists (except for the root '/') to avoid duplicate URL crawling
    let cleanPathname = location.pathname;
    if (cleanPathname.endsWith('/') && cleanPathname !== '/') {
      cleanPathname = cleanPathname.slice(0, -1);
    }
    const currentUrl = `https://www.desentupidoraribeiro.com${cleanPathname}`;
    canonical.setAttribute("href", currentUrl);

    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:desentupidoraribeiro1@gmail.com" title="Enviar e-mail para Desentupidora Ribeiro" className="flex items-center hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              desentupidoraribeiro1@gmail.com
            </a>
            <div className="flex items-center" title="Horário de funcionamento da Desentupidora Ribeiro">
              <Clock className="w-4 h-4 mr-2" />
              Seg à Sáb - 7h às 18h (Plantão 24h)
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/desentupidoraribeiro" target="_blank" rel="noopener noreferrer" title="Siga a Desentupidora Ribeiro no Instagram" aria-label="Siga-nos no Instagram" className="hover:text-secondary transition-colors">
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" title="Desentupidora Ribeiro - Home" className="flex items-center group shrink-0">
            <div className="relative flex items-center h-10 md:h-12">
              <img 
                src={logoImg} 
                alt="Desentupidora Ribeiro - Desentupidora em Brasília" 
                title="Desentupidora Ribeiro - Especialista em Desentupimento"
                className="h-full w-auto object-contain block transition-transform group-hover:scale-105 duration-300"
                loading="eager"
                decoding="async"
                width={180}
                height={48}
                referrerPolicy="no-referrer"
              />
              <div className="hidden flex items-center space-x-2">
                <Droplets className="w-8 h-8 text-primary shrink-0" />
                <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight whitespace-nowrap">
                  Desentupidora<span className="text-secondary">Ribeiro</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#sobre" title="Conheça a história da Desentupidora Ribeiro" className="font-medium hover:text-secondary transition-colors">Sobre Nós</Link>
            <div className="relative group py-2">
              <Link to="/#servicos" title="Veja nossos serviços de desentupimento em Brasília" className="font-medium hover:text-secondary transition-colors flex items-center gap-1">
                Serviços
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] overflow-hidden">
                <div className="py-1">
                  <Link to="/desentupimento-esgoto-brasilia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-medium transition-colors border-b border-gray-100/50 last:border-0" title="Desentupimento de Esgoto em Brasília">Desentupimento de Esgoto</Link>
                  <Link to="/desentupimento-pias-ralos-brasilia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-medium transition-colors border-b border-gray-100/50 last:border-0" title="Desentupimento de Pias e Ralos em Brasília">Pias e Ralos</Link>
                  <Link to="/hidrojateamento-brasilia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-medium transition-colors border-b border-gray-100/50 last:border-0" title="Hidrojateamento em Brasília">Hidrojateamento</Link>
                  <Link to="/limpeza-caixa-gordura-brasilia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-medium transition-colors" title="Limpeza de Caixa de Gordura em Brasília">Caixa de Gordura</Link>
                </div>
              </div>
            </div>
            <Link to="/#diferenciais" title="Por que escolher a Desentupidora Ribeiro" className="font-medium hover:text-secondary transition-colors">Diferenciais</Link>
            <Link to="/#contato" title="Entre em contato com a Desentupidora Ribeiro" className="font-medium hover:text-secondary transition-colors">Contato</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Falar com a Desentupidora em Brasília via WhatsApp" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-medium transition-colors flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2 focus:ring-2 focus:ring-primary rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-4">
                <Link to="/#sobre" onClick={() => setIsMobileMenuOpen(false)} title="Sobre a Desentupidora Ribeiro" className="font-medium py-2 border-b">Sobre Nós</Link>
                <div className="flex flex-col border-b">
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="font-medium py-2 flex justify-between items-center w-full text-left text-gray-800 animate-none"
                    title="Exibir serviços da Desentupidora Ribeiro"
                  >
                    <span>Serviços</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 flex flex-col space-y-3 pb-3 pt-1"
                      >
                        <Link to="/desentupimento-esgoto-brasilia" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors" title="Serviço de Desentupimento de Esgoto">Desentupimento de Esgoto</Link>
                        <Link to="/desentupimento-pias-ralos-brasilia" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors" title="Serviço de Desentupimento de Pias e Ralos">Pias e Ralos</Link>
                        <Link to="/hidrojateamento-brasilia" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors" title="Serviço de Hidrojateamento">Hidrojateamento</Link>
                        <Link to="/limpeza-caixa-gordura-brasilia" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors" title="Serviço de Limpeza de Caixa de Gordura">Caixa de Gordura</Link>
                        <Link to="/#servicos" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="text-xs font-semibold text-primary hover:text-secondary transition-colors pt-1">Ver Todos os Serviços →</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link to="/#diferenciais" onClick={() => setIsMobileMenuOpen(false)} title="Diferenciais da Desentupidora Ribeiro" className="font-medium py-2 border-b">Diferenciais</Link>
                <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)} title="Fale com a Desentupidora Ribeiro" className="font-medium py-2 border-b">Contato</Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Chamar Desentupidora em Brasília no WhatsApp" className="bg-primary text-white px-4 py-3 rounded-md font-medium text-center flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/" title="Desentupidora Ribeiro - Voltar ao topo" className="flex items-center mb-6 inline-flex group transition-colors">
                <div className="relative flex items-center h-10">
                  <img 
                    src={logoImg} 
                    alt="Desentupidora Ribeiro - Desentupidora em Brasília" 
                    title="Desentupidora Ribeiro - Especialista em Desentupimento"
                    className="h-full w-auto object-contain block brightness-0 invert"
                    loading="lazy"
                    decoding="async"
                    width={150}
                    height={40}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
              <p className="text-gray-400 mb-6">
                Especialistas em desentupimento e hidrojateamento em Brasília. Qualidade e relacionamento duradouro são fundamentais para o nosso sucesso.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/desentupidoraribeiro" target="_blank" rel="noopener noreferrer" title="Visite o perfil da Desentupidora Ribeiro no Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços Rápidos</h3>
              <ul className="space-y-3">
                <li><Link to="/desentupimento-esgoto-brasilia" title="Serviço de Desentupimento de Esgoto em Brasília" className="hover:text-secondary transition-colors">Desentupimento de Esgoto</Link></li>
                <li><Link to="/desentupimento-pias-ralos-brasilia" title="Serviço de Desentupimento de Pias e Ralos em Brasília" className="hover:text-secondary transition-colors">Pias e Ralos</Link></li>
                <li><Link to="/hidrojateamento-brasilia" title="Serviço de Hidrojateamento em Brasília" className="hover:text-secondary transition-colors">Hidrojateamento</Link></li>
                <li><Link to="/limpeza-caixa-gordura-brasilia" title="Serviço de Limpeza de Caixa de Gordura em Brasília" className="hover:text-secondary transition-colors">Caixa de Gordura</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Horário de Atendimento</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span>Segunda a Sábado</span>
                   <span className="text-white">07:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span>Emergências</span>
                   <span className="text-secondary font-bold">24 Horas</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-2">Siga-nos:</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Desentupidora Ribeiro. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com foco em resultados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        title="Falar com a Desentupidora Ribeiro no WhatsApp - Atendimento 24h em Brasília"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" aria-hidden="true" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco agora!
        </span>
      </a>
    </div>
  );
}
