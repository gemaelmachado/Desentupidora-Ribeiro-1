import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  useEffect(() => {
    document.title = "Página Não Encontrada | Desentupidora Ribeiro";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Página não encontrada.');
    }
  }, []);

  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto"
      >
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-secondary/30"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar para Home
        </Link>
      </motion.div>
    </div>
  );
}
