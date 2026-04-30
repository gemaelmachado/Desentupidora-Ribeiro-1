import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Wrench, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import esgotoImg from '/assets/desentupimento-de-esgoto.webp';

const WHATSAPP_LINK = "https://wa.me/5561999263129?text=Olá! Gostaria de um orçamento para Desentupimento de Esgoto em Brasília.";

export default function ServiceEsgoto() {
  useEffect(() => {
    document.title = "Desentupimento de Esgoto em Brasília | Ribeiro Desentupidora 24h";
    // For SEO meta tags, usually you'd use react-helmet, but we can set them manually for simplicity in this environment
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Precisando de desentupimento de esgoto em Brasília? A Ribeiro oferece solução rápida, 24h e com garantia. Equipamentos modernos para limpeza técnica de esgoto no DF.');
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <nav className="flex mb-6 text-sm text-gray-300 font-medium">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Desentupimento de Esgoto</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Desentupimento de Esgoto em Brasília
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soluções imediatas para redes de esgoto obstruídas. Atendimento especializado 24 horas para residências, condomínios e empresas em todo o Distrito Federal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg flex items-center transition-all shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Orçamento via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Especialista em Desentupimento de Esgoto no Distrito Federal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  O entupimento da rede de esgoto é uma das emergências hidráulicas mais sérias, podendo causar refluxos, mau cheiro e riscos à saúde. A Ribeiro, sua <Link to="/" className="text-secondary font-bold hover:underline">Desentupidora em Brasília</Link>, utiliza tecnologia de ponta para diagnosticar e resolver obstruções de qualquer complexidade.
                </p>
                <p>
                  Atendemos com prontidão em todas as regiões administrativas do DF, garantindo que o fluxo do esgoto seja restabelecido com higiene e segurança técnica. Nosso processo envolve desde a inspeção detalhada até a desobstrução completa sem a necessidade de quebrar pisos ou paredes desnecessariamente.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Equipamentos de Última Geração</h3>
                <p>
                  Para garantir a eficiência do serviço de <strong>Desentupimento de Esgoto em Brasília</strong>, operamos com maquinário de alto desempenho:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Wrench className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Máquinas Roto-Rooter:</strong> Cabos flexíveis que percorrem a tubulação eliminando obstruções sólidas.</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Vídeo Inspeção:</strong> Câmeras de alta resolução para identificar o ponto exato e a causa do entupimento.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Por que escolher a Ribeiro para seu Esgoto?</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Plantão 24h</h4>
                    <p className="text-sm">Atendimento emergencial imediato em qualquer horário.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Garantia Total</h4>
                    <p className="text-sm">Serviço certificado com garantia técnica de satisfação.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Preço Justo</h4>
                    <p className="text-sm">Orçamento transparente e focado na solução real.</p>
                  </div>
                </div>

                <p className="bg-gray-100 p-6 rounded-lg italic">
                  "Nosso compromisso é restabelecer a tranquilidade do seu imóvel com a expertise de quem é referência como <strong>Desentupidora em Brasília</strong>."
                </p>
              </div>
            </div>

            <aside className="lg:w-1/3 sticky top-32">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="font-heading text-2xl font-bold mb-6">Solicite Orçamento Grátis</h3>
                <p className="text-gray-400 mb-8">Atendimento rápido para Brasília e entorno. Receba um técnico em menos de 1 hora.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Orçamento sem compromisso</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Visita técnica imediata</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Equipe especializada</span>
                  </div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Plantão 24h
                </a>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 relative group">
                <img src={esgotoImg} alt="Técnico realizando desentupimento de esgoto em Brasília" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-white font-bold">Tecnologia avançada em desobstrução técnica.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interlinking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Outros Serviços Especializados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/desentupimento-pias-ralos-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Pias e Ralos Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-fossa-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Limpeza de Fossa Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/hidrojateamento-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Hidrojateamento Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-caixa-gordura-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Caixa de Gordura Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
