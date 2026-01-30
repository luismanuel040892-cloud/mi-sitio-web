
import React from 'react';
import { Leaf, Ruler, Zap, Droplets, Package, Send, CheckCircle2 } from 'lucide-react';

const Humedales: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-12 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Sustentabilidad Urbana</span>
              <h1 className="mt-6 text-5xl font-extrabold text-slate-900 leading-tight">
                Humedales <br /> 
                <span className="text-green-600">de Bolsillo Modular</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Transformamos las aguas grises en vida. Nuestro sistema modular de <strong>45x40 cm</strong> procesa biológicamente el agua de lavado para ser reutilizada en riego, todo dentro de un diseño estético y compacto.
              </p>
              <div className="mt-10">
                <button className="bg-green-600 text-white px-10 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-200 flex items-center">
                  Consultar Sistema Modular <Leaf className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                {/* Imagen del Sistema Modular Gris */}
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/humedales-modular-45x40.png" 
                  alt="Humedal de Bolsillo Modular Gris 45x40cm" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-lg border-4 border-white">
                <div className="flex items-center gap-3">
                  <Ruler className="h-6 w-6 text-green-400" />
                  <p className="text-xl font-black">45 x 40 cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <Zap className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Modularidad</h3>
              <p className="text-slate-600 text-sm">Escala el sistema según tus necesidades añadiendo más bloques de 45x40cm.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <Droplets className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Biorremediación</h3>
              <p className="text-slate-600 text-sm">Utilizamos plantas específicas que filtran jabones y detergentes de forma natural.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <Package className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Cero Olores</h3>
              <p className="text-sm text-slate-600">Sistema cerrado y controlado que garantiza un ambiente limpio en patios y azoteas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Humedales;
