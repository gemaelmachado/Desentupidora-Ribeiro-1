import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceEsgoto from './pages/ServiceEsgoto';
import ServicePias from './pages/ServicePias';
import ServiceHidrojateamento from './pages/ServiceHidrojateamento';
import ServiceGordura from './pages/ServiceGordura';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

// Main Application Component for Desentupidora Ribeiro
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desentupimento-esgoto-brasilia" element={<ServiceEsgoto />} />
          <Route path="/desentupimento-pias-ralos-brasilia" element={<ServicePias />} />
          <Route path="/hidrojateamento-brasilia" element={<ServiceHidrojateamento />} />
          <Route path="/limpeza-caixa-gordura-brasilia" element={<ServiceGordura />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
