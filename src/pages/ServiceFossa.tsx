import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Wrench, ShieldCheck, Clock, ArrowRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import caminhaoImg from '/assets/caminhao-limpa-fossa.webp';

const WHATSAPP_LINK = "https://wa.me/5561999263129?text=Olá! Gostaria de um orçamento para Limpeza de Fossa em Brasília.";

export default function ServiceFossa() {
  useEffect(() => {
    document.title = "Limpeza de Fossa em Brasília e DF | Ribeiro Desentupidora 24h";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Serviço profissional de limpeza de fossa em Brasília. Esvaziamento e transporte de resíduos com segurança e licenciamento ambiental. Ligue agora para a Ribeiro no DF.');
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
              <span className="text-white">Limpeza de Fossa</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Limpeza de Fossa em Brasília
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Esvaziamento e higienização técnica de fossas sépticas com caminhões auto-vácuo de alta capacidade. Atendimento residencial, industrial e rural em todo o DF.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg flex items-center transition-all shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Limpeza agora
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
                Referência em Esgotamento de Fossas no Distrito Federal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  A manutenção periódica de fossas é fundamental para evitar o transbordamento e a contaminação do solo e lençol freático. A Ribeiro se destaca como a principal <Link to="/" className="text-secondary font-bold hover:underline">Desentupidora em Brasília</Link> especializada no esgotamento técnico e transporte adequado de efluentes.
                </p>
                <p>
                  Operamos com licenciamento ambiental rigoroso, garantindo que o descarte dos resíduos seja feito em locais autorizados, respeitando todas as normas de segurança do DF. Seja para uma residência em um condomínio fechado ou para uma grande planta industrial, nossa frota está pronta para o desafio.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Tecnologia e Segurança Ambiental</h3>
                <p>
                  O serviço de <strong>Limpeza de Fossa em Brasília</strong> realizado pela Ribeiro conta com:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Truck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Caminhão Auto-Vácuo:</strong> Sucção potente que remove resíduos líquidos e pastosos com total vedação.</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Certificação Ambiental:</strong> Comprovante de descarte em estação de tratamento de esgoto oficial.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Vantagens da Ribeiro no Esgotamento</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Wrench className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Manutenção Preventiva</h4>
                    <p className="text-sm">Evite transbordamentos inesperados com cronogramas de limpeza.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Equipe Treinada</h4>
                    <p className="text-sm">Profissionais paramentados com EPIs e expertise técnica.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Atendimento DF</h4>
                    <p className="text-sm">Cobrimos todas as regiões administrativas com rapidez.</p>
                  </div>
                </div>

                <p className="bg-gray-100 p-6 rounded-lg italic">
                  "Manter sua fossa limpa é uma questão de saúde pública e preservação patrimonial. Confie na nossa autoridade como <strong>Desentupidora em Brasília</strong>."
                </p>
              </div>
            </div>

            <aside className="lg:w-1/3 sticky top-32">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="font-heading text-2xl font-bold mb-6">Agende seu Esgotamento</h3>
                <p className="text-gray-400 mb-8">Frota moderna de caminhões limpa-fossa disponível para atendimento imediato ou programado em Brasília.</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Brasília
                </a>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 relative group">
                <img src={caminhaoImg} alt="Caminhão moderno de limpeza de fossa da Ribeiro em Brasília" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-white font-bold">Sucção profissional e descarte certificado.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interlinking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Explorar mais Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/desentupimento-esgoto-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Esgoto Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/desentupimento-pias-ralos-brasilia" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Pias e Ralos Brasília</h3>
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
