
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Zap, Leaf, LayoutGrid } from 'lucide-react';
import Home from './pages/Home';
import CIPO from './pages/CIPO';
import Humedales from './pages/Humedales';
import ADValor from './pages/ADValor';
import About from './pages/About';
import Contact from './pages/Contact';
import Portafolio from './pages/Portafolio';

const Logo = ({ className = "h-8 w-8" }) => (
  <div className="relative flex items-center justify-center">
    <Droplets className={`${className} text-blue-600 relative z-10`} />
    <Zap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 fill-current animate-pulse" />
    <Leaf className="absolute -bottom-1 -left-1 h-4 w-4 text-green-500 fill-current" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Cisterna CIPO', path: '/cipo' },
    { name: 'Humedales', path: '/humedales' },
    { name: 'AD Valor', path: '/ad-valor' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Logo className="h-9 w-9" />
              <div className="flex flex-col">
                <span className="font-black text-lg leading-none tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                  IMPULSORA DE
                </span>
                <span className="font-black text-lg leading-none tracking-tighter text-blue-600">
                  INNOVACIONES
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/cipo" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Adquirir CIPO
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/cipo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-4 text-sm font-bold uppercase tracking-widest text-white bg-blue-600 rounded-xl shadow-lg"
              >
                Adquirir CIPO
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <Logo className="h-7 w-7" />
            <span className="font-black text-xl text-white tracking-tighter">IMPULSORA DE INNOVACIONES S.A.S.</span>
          </div>
          <p className="text-sm max-w-md leading-relaxed">
            Ecosistema de ingeniería y desarrollo tecnológico que transforma la sostenibilidad hídrica y energética en realidades tangibles para la industria y el hogar.
          </p>
          <div className="mt-8 space-y-2 text-xs">
            <p className="flex items-center gap-2"><Leaf className="h-3 w-3 text-green-500" /> Coyoacán, Ciudad de México, CP 04120.</p>
            <p className="flex items-center gap-2"><Droplets className="h-3 w-3 text-blue-500" /> Calle General Anaya No. 21, Col. San Diego Churubusco.</p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Innovaciones</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/cipo" className="hover:text-blue-400 transition-colors">Cisterna Portátil CIPO</Link></li>
            <li><Link to="/humedales" className="hover:text-blue-400 transition-colors">Humedales Modulares</Link></li>
            <li><Link to="/portafolio" className="hover:text-blue-400 transition-colors">Energía & Movilidad</Link></li>
            <li><Link to="/ad-valor" className="hover:text-blue-400 transition-colors">Plataforma AD Valor</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Corporativo</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/nosotros" className="hover:text-blue-400 transition-colors">Nuestra Misión</Link></li>
            <li><Link to="/portafolio" className="hover:text-blue-400 transition-colors">Portafolio ESG</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-400 transition-colors">Contacto Directo</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold">
        <p>&copy; 2025 IMPULSORA DE INNOVACIONES S.A.S. INGENIERÍA CON PROPÓSITO.</p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">WhatsApp</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-inter selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/cipo" element={<CIPO />} />
            <Route path="/humedales" element={<Humedales />} />
            <Route path="/ad-valor" element={<ADValor />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
