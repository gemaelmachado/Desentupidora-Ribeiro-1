import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Wrench, ShieldCheck, Clock, ArrowRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import hidrojateamentoImg from '/assets/hidrojateamento.webp';

const WHATSAPP_LINK = "https://wa.me/5561999263129?text=Olá! Gostaria de um orçamento para Hidrojateamento em Brasília.";

export default function ServiceHidrojateamento() {
  useEffect(() => {
    document.title = "Hidrojateamento de Alta Pressão em Brasília | Ribeiro 24h";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Limpeza técnica e desentupimento com hidrojateamento de alta pressão em Brasília. Solução ideal para indústrias, comércios e condomínios no DF. Atendimento 24h.');
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
              <span className="text-white">Hidrojateamento</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hidrojateamento em Brasília
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tecnologia de limpeza técnica por alta pressão para tubulações industriais, comerciais e prediais. A solução definitiva contra incrustações e gordura pesada.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg flex items-center transition-all shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Desejo um Orçamento Técnico
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
                Limpeza Profissional com Hidrojato no Distrito Federal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  O hidrojateamento é o método mais eficaz e ecológico de limpeza de tubulações. Como sua <Link to="/" className="text-secondary font-bold hover:underline">Desentupidora em Brasília</Link> especializada, a Ribeiro utiliza bombas de altíssima pressão que cortam raízes, desintegram placas de gordura e removem detritos encrostados no interior dos canos sem o uso de produtos químicos corrosivos.
                </p>
                <p>
                  Este serviço é especialmente indicado para condomínios, indústrias e grandes cozinhas comerciais que necessitam de uma manutenção profunda para evitar paradas críticas. Nossa equipe técnica domina o manejo dos bicos especiais para cada tipo de obstrução, garantindo a restauração total do diâmetro original da tubulação.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Tecnologia Hidráulica de Precisão</h3>
                <p>
                  O sucesso do <strong>Hidrojateamento em Brasília</strong> realizado pela nossa empresa baseia-se em:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Droplets className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Bombas de alta Vazão:</strong> Pressão regulável que permite desde a limpeza delicada até o corte de obstáculos sólidos.</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Bicos Rotativos:</strong> Ferramentas que giram 360º no interior do cano, garantindo que nenhuma sujeira permaneça nas paredes.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Aplicações Recomendadas em Brasília</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Wrench className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Redes Pluviais</h4>
                    <p className="text-sm">Limpeza de calhas e galerias antes do período de chuvas em Brasília.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Droplets className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Colunas Prediais</h4>
                    <p className="text-sm">Manutenção vertical em prédios residenciais e comerciais no DF.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Plantão 24h</h4>
                    <p className="text-sm">Emergências industriais resolvidas com rapidez tática.</p>
                  </div>
                </div>

                <p className="bg-gray-100 p-6 rounded-lg italic">
                  "O hidrojateamento é a tecnologia que nos permite atuar como a mais completa <strong>Desentupidora em Brasília</strong>, resolvendo o que outros não conseguem."
                </p>
              </div>
            </div>

            <aside className="lg:w-1/3 sticky top-32">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="font-heading text-2xl font-bold mb-6">Orçamento Hidrojato</h3>
                <p className="text-gray-400 mb-8">Avaliação técnica no local sem compromisso. Atendimento imediato em todo o Distrito Federal.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Equipamento de última geração</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Pague no cartão ou faturado</span>
                  </div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Técnico DF
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interlinking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Complemente sua Manutenção</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/desentupimento-esgoto-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Esgoto Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/desentupimento-pias-ralos-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Pias e Ralos Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-fossa-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Limpeza de Fossa Brasília</h3>
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
