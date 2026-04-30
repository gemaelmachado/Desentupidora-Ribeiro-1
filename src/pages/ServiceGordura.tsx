import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Wrench, ShieldCheck, Clock, ArrowRight, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import gorduraImg from '/assets/caixa-de-gordura.webp';

const WHATSAPP_LINK = "https://wa.me/5561999263129?text=Olá! Gostaria de um orçamento para Limpeza de Caixa de Gordura em Brasília.";

export default function ServiceGordura() {
  useEffect(() => {
    document.title = "Limpeza de Caixa de Gordura em Brasília | Ribeiro 24h";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Especialista em limpeza de caixa de gordura em Brasília. Evite mau cheiro e transbordamentos com manutenção periódica em restaurantes e residências no DF. Atendimento 24h.');
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
              <Link to="/" title="Desentupidora Ribeiro DF - Home" className="hover:text-secondary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Caixa de Gordura</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Limpeza de Caixa de Gordura em Brasília
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Manutenção especializada para cozinhas residenciais e estabelecimentos gastronômicos. Evite o entupimento total da rede de esgoto com a higienização técnica da sua caixa de gordura.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Agendar limpeza de caixa de gordura em Brasília via WhatsApp" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg flex items-center transition-all shadow-lg">
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
                Especialista em Caixas de Gordura no Distrito Federal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  A caixa de gordura é um componente vital do sistema de esgoto, projetada para reter resíduos gordurosos antes que cheguem à rede pública. No entanto, sem a manutenção correta, essa gordura endurece, causando transbordamentos e o temido mau cheiro na cozinha. A Ribeiro, sua <Link to="/" title="Home Desentupidora Ribeiro Brasília" className="text-secondary font-bold hover:underline">Desentupidora em Brasília</Link>, oferece um serviço de limpeza profunda e descarte responsável.
                </p>
                <p>
                  Atendemos centenas de restaurantes, condomínios e residências particulares em todo o DF, utilizando equipamentos que removem até as camadas mais compactas de gordura petrificada, devolvendo a plena funcionalidade ao sistema hidráulico.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Processo Técnico de Limpeza</h3>
                <p>
                  O serviço de <strong>Limpeza de Caixa de Gordura em Brasília</strong> executado pela Ribeiro inclui:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Droplet className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Raspagem e Coleta:</strong> Remoção manual e mecânica de todos os resíduos sólidos retidos na caixa.</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Desobstrução de Saída:</strong> Limpeza dos canos de entrada e saída para garantir que não haja refluxo futuro.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Benefícios da Manutenção Regular</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Zero Mau Cheiro</h4>
                    <p className="text-sm">Elimina odores desagradáveis que afastam clientes e incomodam moradores.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Prevenção Total</h4>
                    <p className="text-sm">Evita que a gordura percorra e entupa toda a rede de esgoto do imóvel.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Higiene Sanitária</h4>
                    <p className="text-sm">Fundamental para a aprovação em inspeções da vigilância sanitária no DF.</p>
                  </div>
                </div>

                <p className="bg-gray-100 p-6 rounded-lg italic">
                  "Manter a caixa de gordura limpa é sinal de respeito ao meio ambiente e à saúde dos ocupantes do imóvel. Conte com a Ribeiro, sua <strong>Desentupidora em Brasília</strong>."
                </p>
              </div>
            </div>

            <aside className="lg:w-1/3 sticky top-32">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="font-heading text-2xl font-bold mb-6">Solicite Limpeza Agora</h3>
                <p className="text-gray-400 mb-8">Atendimento rápido para comércios e residências. Orçamentos sem compromisso em todo o Distrito Federal.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Equipes prontas em todo o DF</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Contratos de manutenção</span>
                  </div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Chamar Desentupidora Ribeiro no WhatsApp - Limpeza de Caixa de Gordura em Brasília"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Brasília
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interlinking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Nossas outras Soluções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/desentupimento-esgoto-brasilia" title="Serviço de Desentupimento de Esgoto em Brasília" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Esgoto Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/desentupimento-pias-ralos-brasilia" title="Serviço de Desentupimento de Pias e Ralos em Brasília" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Pias e Ralos Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-fossa-brasilia" title="Serviço de Limpeza de Fossa em Brasília - Expertise garantida" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Limpeza de Fossa Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/hidrojateamento-brasilia" title="Serviço de Hidrojateamento Técnico em Brasília" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Hidrojateamento Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
