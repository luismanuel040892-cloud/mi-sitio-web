
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8 uppercase">HABLEMOS DE<br /><span className="text-blue-600">INNOVACIÓN</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ya sea que busques una solución CIPO, un humedal modular o quieras invertir en nuestro portafolio tecnológico, estamos listos para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            {[
              { icon: Phone, label: "Teléfonos", vals: ["55 1012 8022", "55 3847 8464", "55 1817 5454"] },
              { icon: Mail, label: "Correos", vals: ["impulsoradeinnovaciones@gmail.com", "alfredo.romero326@gmail.com"] },
              { icon: MapPin, label: "Ubicación", vals: ["Coyoacán, Ciudad de México", "Calle Gral. Anaya No. 21"] }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="p-4 bg-white rounded-2xl shadow-xl shadow-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.label}</p>
                  {item.vals.map((v, j) => (
                    <p key={j} className="text-lg font-black text-slate-900 tracking-tight">{v}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form Side with Correct ID for Anchor */}
          <div id="formulario" className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl p-12 md:p-16 border border-slate-100 scroll-mt-32">
            <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tighter uppercase flex items-center">
              <MessageSquare className="mr-4 text-blue-600" /> Envíanos un mensaje
            </h2>
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Mensaje recibido. Un especialista técnico se pondrá en contacto pronto.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nombre</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 font-bold" placeholder="Tu nombre..." required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 font-bold" placeholder="email@ejemplo.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Proyecto de Interés</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 font-bold appearance-none">
                  <option>Cotización Cisterna CIPO</option>
                  <option>Humedales Modulares</option>
                  <option>Inversión / Portafolio ESG</option>
                  <option>Movilidad Eléctrica Greyscale</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Mensaje</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 font-bold" placeholder="Escribe aquí tu requerimiento..."></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-16 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center group">
                Enviar Requerimiento <Send className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
