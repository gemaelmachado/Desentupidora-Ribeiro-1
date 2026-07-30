import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = "5561985849011";

export default function Contato() {
  const [formState, setFormState] = useState({
    nome: '',
    telefone: '',
    servico: 'Desentupimento de Esgoto',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contato | Desentupidora Ribeiro em Brasília";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entre em contato com a Desentupidora Ribeiro. Solicite um orçamento para desentupimento, hidrojateamento e limpeza de fossa em Brasília. Atendimento 24 horas.');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Optional: Also redirect to WhatsApp
    const text = `Olá! Meu nome é ${formState.nome}. Gostaria de solicitar um orçamento para ${formState.servico}. ${formState.mensagem}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormState({ nome: '', telefone: '', servico: 'Desentupimento de Esgoto', mensagem: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

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
              <Link to="/" className="hover:text-white transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contato</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fale com a <span className="text-secondary">Desentupidora Ribeiro</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Estamos prontos para atender você 24 horas por dia. Solicite seu orçamento sem compromisso e resolva seu problema com rapidez e garantia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            
            {/* Contact Information & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">Nossos Contatos</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Atendemos em toda Brasília e região metropolitana com agilidade e prontidão. Nossa equipe está sempre a postos.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Telefone / WhatsApp</p>
                      <p className="text-gray-600">(61) 98584-9011</p>
                      <p className="text-secondary font-medium mt-1">Atendimento 24 Horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">E-mail</p>
                      <p className="text-gray-600">desentupidoraribeiro1@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Endereço</p>
                      <p className="text-gray-600 leading-relaxed">
                        Qr 603 - Rua 1 - Chácara 39<br />
                        Condomínio Vida Nova - Lote 1c<br />
                        Samambaia - Brasília - DF<br />
                        CEP: 72331-150
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">Solicite um Orçamento</h2>
              <p className="text-gray-600 mb-8">Preencha o formulário abaixo e retornaremos rapidamente.</p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700">Obrigado pelo contato. Você será redirecionado para o WhatsApp para continuarmos o atendimento.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      value={formState.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone"
                      value={formState.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                      placeholder="(61) 90000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="servico" className="block text-sm font-semibold text-gray-700 mb-2">Qual serviço você precisa?</label>
                    <select 
                      id="servico" 
                      name="servico"
                      value={formState.servico}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="Desentupimento de Esgoto">Desentupimento de Esgoto</option>
                      <option value="Desentupimento de Pias e Ralos">Desentupimento de Pias e Ralos</option>
                      <option value="Hidrojateamento">Hidrojateamento</option>
                      <option value="Limpeza de Caixa de Gordura">Limpeza de Caixa de Gordura</option>
                      <option value="Limpeza de Fossa">Limpeza de Fossa</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem (opcional)</label>
                    <textarea 
                      id="mensagem" 
                      name="mensagem"
                      value={formState.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white resize-none"
                      placeholder="Detalhes sobre o problema..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Solicitação
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">Seus dados estão seguros conosco.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
