import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  Quote, 
  Wrench, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  ArrowRight, 
  MessageCircle,
  ChevronDown,
  Droplet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import images
import logoImg from './assets/logo.webp';
import caminhaoImg from './assets/caminhao-limpa-fossa.webp';
import fossaImg from './assets/fossa.webp';
import hidrojateamentoImg from './assets/hidrojateamento.webp';
import esgotoImg from './assets/desentupimento-de-esgoto.webp';
import gorduraImg from './assets/caixa-de-gordura.webp';
import piasImg from './assets/pias-e-ralos.webp';
import vasosImg from './assets/vasos-e-sanitarios.webp';

const WHATSAPP_NUMBER = "5561999263129";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento com a Desentupidora Ribeiro.`;

// Main Application Component for Desentupidora Ribeiro
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      title: "Desentupimento em Geral",
      icon: <Wrench className="w-6 h-6" />,
      description: "Serviço completo para remoção de entupimentos em tubulações residenciais, comerciais e industriais, garantindo o fluxo normal da água e esgoto.",
      image: fossaImg
    },
    {
      title: "Hidrojateamento",
      icon: <Droplets className="w-6 h-6" />,
      description: "Limpeza profunda com jato de água de alta pressão, ideal para remover sujeiras, incrustações e gorduras das tubulações.",
      image: hidrojateamentoImg
    },
    {
      title: "Desentupimento de Esgoto",
      icon: <Droplet className="w-6 h-6" />,
      description: "Solução rápida para redes de esgoto entupidas, eliminando obstruções e evitando refluxos e mau cheiro.",
      image: esgotoImg
    },
    {
      title: "Caixa de Gordura",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Limpeza e desobstrução de caixas de gordura, prevenindo acúmulo de resíduos e problemas na rede de esgoto.",
      image: gorduraImg
    },
    {
      title: "Pias e Ralos",
      icon: <CheckCircle2 className="w-6 h-6" />,
      description: "Desobstrução eficiente de pias e ralos, removendo gordura, restos de alimentos e sujeiras, evitando alagamentos.",
      image: piasImg
    },
    {
      title: "Vasos Sanitários",
      icon: <ThumbsUp className="w-6 h-6" />,
      description: "Remoção de obstruções em vasos sanitários com técnicas seguras e eficientes, evitando danos ao sistema.",
      image: vasosImg
    }
  ];

  const differentials = [
    {
      title: "Atendimento Personalizado",
      description: "Foco em resultados e expertise especializada no segmento para cada cliente.",
      icon: <ThumbsUp className="w-8 h-8 text-secondary" />
    },
    {
      title: "Atendimento 24 Horas",
      description: "Equipe pronta para emergências a qualquer momento do dia ou da noite.",
      icon: <Clock className="w-8 h-8 text-secondary" />
    },
    {
      title: "Qualidade Garantida",
      description: "Não comprometemos a qualidade técnica ou ética profissional por questões comerciais.",
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />
    },
    {
      title: "Preço Justo e Transparente",
      description: "Orçamentos claros sem surpresas, superando preocupações com custos.",
      icon: <CheckCircle2 className="w-8 h-8 text-secondary" />
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Síndico Profissional",
      text: "A Desentupidora Ribeiro resolveu um problema crônico no nosso condomínio que outras empresas não conseguiram. Profissionalismo e eficiência do início ao fim.",
      image: "https://picsum.photos/seed/user1/150/150"
    },
    {
      name: "Mariana Costa",
      role: "Gerente de Restaurante",
      text: "Precisávamos de uma limpeza urgente na caixa de gordura em pleno fim de semana. O atendimento foi rápido e o serviço impecável. Recomendo de olhos fechados.",
      image: "https://picsum.photos/seed/user2/150/150"
    },
    {
      name: "Roberto Almeida",
      role: "Proprietário de Indústria",
      text: "O serviço de hidrojateamento deles é de primeira linha. Trouxe segurança e tranquilidade para nossa operação, evitando paradas indesejadas.",
      image: "https://picsum.photos/seed/user3/150/150"
    }
  ];

  const faqs = [
    {
      q: "Vocês atendem 24 horas?",
      a: "Sim, a Desentupidora Ribeiro oferece atendimento 24 horas para emergências, garantindo rapidez na solução de problemas a qualquer momento."
    },
    {
      q: "Quais tipos de desentupimento vocês realizam?",
      a: "Realizamos desentupimento de esgoto, pia, ralos, calhas, colunas, vasos sanitários e caixas de gordura, atendendo residências, comércios e indústrias."
    },
    {
      q: "O que é hidrojateamento e quando é necessário?",
      a: "O hidrojateamento é uma limpeza com jato de água de alta pressão, ideal para remover gordura, sujeira pesada e resíduos acumulados nas tubulações."
    },
    {
      q: "Vocês fazem limpeza de caixa de gordura?",
      a: "Sim, realizamos limpeza e desentupimento de caixa de gordura, evitando mau cheiro, entupimentos e problemas na rede de esgoto."
    },
    {
      q: "O atendimento é rápido?",
      a: "Sim, prezamos por agilidade e eficiência, atendendo o mais rápido possível para evitar maiores transtornos ao cliente."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:gilvanribeiro8584@gmail.com" className="flex items-center hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              gilvanribeiro8584@gmail.com
            </a>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Seg à Sáb - 7h às 18h (Plantão 24h)
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/desentupidoraribeiro" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center group shrink-0">
            <div className="relative flex items-center h-10 md:h-12 min-w-[150px]">
              <img 
                src={logoImg} 
                alt="Desentupidora Ribeiro Logo" 
                className="h-full w-auto object-contain block transition-transform group-hover:scale-105 duration-300"
                loading="eager"
                decoding="async"
                width={180}
                height={48}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error("Erro ao carregar logo:", e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.parentElement?.classList.remove('min-w-[150px]');
                }}
              />
              <div className="hidden flex items-center space-x-2">
                <Droplets className="w-8 h-8 text-primary shrink-0" />
                <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight whitespace-nowrap">
                  Desentupidora<span className="text-secondary">Ribeiro</span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="font-medium hover:text-secondary transition-colors">Sobre Nós</a>
            <a href="#servicos" className="font-medium hover:text-secondary transition-colors">Serviços</a>
            <a href="#diferenciais" className="font-medium hover:text-secondary transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="font-medium hover:text-secondary transition-colors">Depoimentos</a>
            <a href="#contato" className="font-medium hover:text-secondary transition-colors">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-medium transition-colors flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 border-b">Sobre Nós</a>
                <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 border-b">Serviços</a>
                <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 border-b">Diferenciais</a>
                <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 border-b">Depoimentos</a>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 border-b">Contato</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-3 rounded-md font-medium text-center flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src={caminhaoImg} 
            alt="Caminhão limpa fossa da Desentupidora Ribeiro" 
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            width={1920}
            height={1080}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-white border border-secondary/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Atendimento 24 Horas em Brasília
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              Desentupidora em Brasília: Entregar resultados excepcionais que superam expectativas.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto text-balance">
              Ajudamos empresas e profissionais que buscam qualidade e profissionalismo a resolverem problemas com entupimentos de forma rápida, segura e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-secondary/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Atendimento Agora
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Sobre Nós */}
      <section id="sobre" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Qualidade e relacionamento duradouro são fundamentais para o sucesso
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  A Desentupidora Ribeiro, liderada pelos sócios <strong className="text-primary">Gilvan Ribeiro</strong> e <strong className="text-primary">Agnaldo Ribeiro dos Santos</strong>, nasceu com o propósito de elevar o padrão de serviços de desentupimento e hidrojateamento em Brasília. Nossa jornada é marcada pelo compromisso inabalável com a excelência técnica e a satisfação total de nossos clientes.
                </p>
                <p>
                  Entendemos que problemas hidráulicos geram transtornos significativos. Por isso, nosso diferencial é o <strong className="text-primary">atendimento personalizado com foco em resultados e expertise especializada no segmento</strong>. Nunca comprometemos a qualidade técnica ou ética profissional por questões comerciais.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-4xl font-heading font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Anos de Experiência</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-4xl font-heading font-bold text-primary">24h</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Atendimento de Emergência</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Gilvan Ribeiro Card */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500" 
                    alt="Gilvan Ribeiro" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={500}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <p className="text-white font-heading font-bold text-lg">Gilvan Ribeiro</p>
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">Sócio Fundador</p>
                  </div>
                </div>

                {/* Agnaldo Ribeiro Card */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" 
                    alt="Agnaldo Ribeiro dos Santos" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={500}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <p className="text-white font-heading font-bold text-lg">Agnaldo Ribeiro</p>
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">Sócio Fundador</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <p className="text-primary font-medium text-center italic">
                  "Nossa missão é oferecer soluções definitivas com transparência e respeito ao cliente."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Serviços e Soluções */}
      <section id="servicos" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Soluções Especializadas para sua Tranquilidade
            </h2>
            <p className="text-lg text-gray-600">
              A Desentupidora Ribeiro é especializada em serviços de desentupimento e hidrojateamento 24 horas, atendendo residências, comércios e indústrias que enfrentam problemas com entupimentos e acúmulo de resíduos.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveServiceTab(index)}
                className={`flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all border-2 text-center ${
                  activeServiceTab === index 
                    ? 'bg-primary text-white border-primary shadow-lg scale-[1.02]' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-100 hover:border-primary/30'
                }`}
              >
                <span className={`mr-3 transition-colors ${activeServiceTab === index ? 'text-secondary' : 'text-primary'}`}>
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  key={activeServiceTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    {services[activeServiceTab].icon}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    {services[activeServiceTab].title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {services[activeServiceTab].description}
                  </p>
                  <div className="bg-gray-50 border-l-4 border-secondary p-4 mb-8 rounded-r-md">
                    <p className="text-sm text-gray-700 font-medium">
                      Ideal para empresas e profissionais que buscam superar a dificuldade em encontrar serviços de qualidade e confiança no mercado.
                    </p>
                  </div>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary font-bold hover:text-secondary-dark transition-colors group"
                  >
                    Falar com um Especialista
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                <motion.img
                  key={`img-${activeServiceTab}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={services[activeServiceTab].image}
                  alt={services[activeServiceTab].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Diferenciais Competitivos */}
      <section id="diferenciais" className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Por que escolher a Desentupidora Ribeiro?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Nosso compromisso é entregar resultados excepcionais que superam expectativas e geram valor real para o seu negócio ou residência.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {differentials.map((diff, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4">{diff.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-2">{diff.title}</h3>
                  <p className="text-gray-300">{diff.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Depoimentos e Prova Social */}
      <section id="depoimentos" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Experiência Comprovada no Mercado
            </h2>
            <p className="text-lg text-gray-600">
              Veja o que empresas e profissionais que buscam qualidade e profissionalismo dizem sobre nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-8 italic relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                    loading="lazy"
                    decoding="async"
                    width={56}
                    height={56}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600">Tire suas dúvidas sobre nossos serviços especializados.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all"
              >
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-primary pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action Final */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto text-balance">
            Pronto para entregar resultados excepcionais que superam expectativas?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Não deixe que problemas hidráulicos parem o seu negócio ou causem transtornos em sua casa. Fale conosco agora mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-secondary/30"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Solicitar Atendimento Agora
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 7. Localização */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Onde Estamos</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendemos em toda Brasília e região metropolitana com agilidade e prontidão.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Endereço</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Qr 603 - Rua 1 - Chácara 39<br />
                        Condomínio Vida Nova - Lote 1c<br />
                        Samambaia - Brasília - DF<br />
                        CEP: 72331-150
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Telefone</p>
                      <p className="text-gray-600 text-sm">(61) 99926-3129</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">E-mail</p>
                      <p className="text-gray-600 text-sm">gilvanribeiro8584@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.766345634563!2d-48.08634563456345!3d-15.86634563456345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a330000000000%3A0x0000000000000000!2sSamambaia%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1712750000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Desentupidora Ribeiro"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <a href="#" className="flex items-center mb-6 bg-white/5 p-3 rounded-lg inline-flex group transition-colors hover:bg-white/10">
                <div className="relative flex items-center h-10">
                  <img 
                    src={logoImg} 
                    alt="Desentupidora Ribeiro Logo" 
                    className="h-full w-auto object-contain brightness-0 invert block"
                    loading="lazy"
                    decoding="async"
                    width={150}
                    height={40}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      console.error("Erro ao carregar logo footer:", e.currentTarget.src);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden flex items-center space-x-2">
                    <Droplets className="w-8 h-8 text-secondary shrink-0" />
                    <span className="font-heading font-bold text-xl text-white tracking-tight whitespace-nowrap">
                      Desentupidora<span className="text-secondary">Ribeiro</span>
                    </span>
                  </div>
                </div>
              </a>
              <p className="text-gray-400 mb-6">
                Especialistas em desentupimento e hidrojateamento em Brasília. Qualidade e relacionamento duradouro são fundamentais para o nosso sucesso.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/desentupidoraribeiro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Desentupimento em Geral</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Hidrojateamento</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Limpeza de Caixa de Gordura</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Desentupimento de Esgoto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Horário de Atendimento</h4>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Segunda a Sábado</span>
                  <span className="text-white">07:00 - 18:00</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="text-secondary font-bold">Plantão Emergencial</span>
                  <span className="text-white font-bold">24 Horas</span>
                </li>
              </ul>
              <div className="mt-8">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center border border-gray-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Desentupidora Ribeiro. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com foco em resultados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco agora!
        </span>
      </a>
    </div>
  );
}
