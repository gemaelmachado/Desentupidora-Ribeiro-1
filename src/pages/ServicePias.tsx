import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Wrench, ShieldCheck, Clock, ArrowRight, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import piasImg from '/assets/pias-e-ralos.webp';

const WHATSAPP_LINK = "https://wa.me/5561999263129?text=Olá! Gostaria de um orçamento para Desentupimento de Pias e Ralos em Brasília.";

export default function ServicePias() {
  useEffect(() => {
    document.title = "Desentupimento de Pias e Ralos em Brasília | Ribeiro Desentupidora 24h";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Problemas com pias ou ralos entupidos em Brasília? Atendimento imediato 24h. Desobstrução profissional de pias de cozinha e ralos de banheiro no DF.');
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
              <Link to="/" title="Ir para Home - Desentupidora Ribeiro Brasília" className="hover:text-secondary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Pias e Ralos</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Desentupimento de Pias e Ralos em Brasília
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Atendimento ágil para resolver obstruções em cozinhas, banheiros e áreas de serviço. Tecnologia que limpa sem danificar suas tubulações.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Orçamento imediato para desentupimento de pias e ralos no DF via WhatsApp" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg flex items-center transition-all shadow-lg">
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
                Solução Rápida para Pias e Ralos no DF
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Pias que não escoam e ralos transbordando são transtornos comuns, mas que exigem uma intervenção profissional para evitar danos maiores à rede hidráulica. Como sua <Link to="/" title="Home Desentupidora Ribeiro" className="text-secondary font-bold hover:underline">Desentupidora em Brasília</Link> de confiança, a Ribeiro oferece desobstrução técnica que remove 100% dos resíduos acumulados.
                </p>
                <p>
                  Utilizamos métodos que preservam a integridade dos canos de PVC ou metal, eliminando gordura, restos de alimentos, fios de cabelo e outros objetos que impedem o fluxo normal da água. Atendemos todas as RAs de Brasília com agilidade incomparável.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Metodologia e Equipamentos</h3>
                <p>
                  Garantimos um serviço limpo e eficaz para <strong>Desentupimento de Pias e Ralos em Brasília</strong> usando:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Droplet className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Sondas Flexíveis:</strong> Equipamentos que alcançam curvas complexas do encanamento removendo a sujeira sem quebra-quebra.</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-secondary mr-3 shrink-0" />
                    <span><strong>Limpeza Hidrostática:</strong> Uso de pressão controlada para desobstruir pias de cozinha severamente comprometidas por gordura.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Diferenciais Ribeiro Brasília</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Chegada Rápida</h4>
                    <p className="text-sm">Técnicos distribuídos por todo o DF para menor tempo de espera.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Serviço Limpo</h4>
                    <p className="text-sm">Garantimos a limpeza do local após a execução do serviço.</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Atendimento 24h</h4>
                    <p className="text-sm">Problemas com ralo não têm hora, nós também não.</p>
                  </div>
                </div>

                <p className="bg-gray-100 p-6 rounded-lg italic">
                  "Seja em apartamentos ou casas comerciais, a referência como <strong>Desentupidora em Brasília</strong> é a garantia de um ralo funcionando perfeitamente."
                </p>
              </div>
            </div>

            <aside className="lg:w-1/3 sticky top-32">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="font-heading text-2xl font-bold mb-6">Fale no WhatsApp Agora</h3>
                <p className="text-gray-400 mb-8">Resolva o entupimento da sua pia em poucos minutos. Atendimento personalizado para Brasília.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Preço fixo por serviço</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    <span className="text-white font-medium">Equipes em todo o DF</span>
                  </div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Falar com a Desentupidora Ribeiro no WhatsApp - Desentupimento de Pias e Ralos em Brasília"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Plantão 24h
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interlinking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Saiba mais sobre Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/desentupimento-esgoto-brasilia" title="Serviço de Desentupimento de Esgoto em Brasília" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Esgoto Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-fossa-brasilia" title="Serviço de Limpeza de Fossa em Brasília - Solução garantida" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Limpeza de Fossa Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/hidrojateamento-brasilia" title="Serviço de Hidrojateamento Técnico em Brasília" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Hidrojateamento Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
            <Link to="/limpeza-caixa-gordura-brasilia" title="Serviço de Limpeza de Caixa de Gordura no DF" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">Caixa de Gordura Brasília</h3>
              <ArrowRight className="w-5 h-5 mt-4 text-gray-400 group-hover:text-secondary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
