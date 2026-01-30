
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Droplets, Settings, ShieldCheck, Zap, Ruler, Box, HeartHandshake, Home as HomeIcon } from 'lucide-react';

const CIPO: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="z-10 order-2 lg:order-1">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-800 mb-8">
                Tecnología Hídrica Certificada
              </span>
              <h1 className="text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                CISTERNA <br /> 
                <span className="text-blue-600">CIPO</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
                La solución inteligente para el abasto de agua en zonas urbanas. Automática, portátil y diseñada para una instalación sin complicaciones técnicas.
              </p>
              
              <div className="space-y-5 mb-12">
                {[
                  { label: "Sin Obra Civil", desc: "Cero excavaciones o daños estructurales." },
                  { label: "Plug & Play", desc: "Instalación manual en menos de 20 min." },
                  { label: "Automatizada", desc: "Control de nivel inteligente para bombeo." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-600 rounded-lg p-1.5 text-white shadow-lg shadow-blue-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {/* Botón corregido para enviar al formulario de contacto */}
                <Link to="/contacto#formulario" className="inline-flex justify-center items-center px-10 py-5 text-xs font-black uppercase tracking-widest text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30">
                  Cotizar mi CIPO <Zap className="ml-3 h-4 w-4 fill-current" />
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white group aspect-square flex items-center justify-center">
                {/* Imagen de la Cisterna Azul - Asegurada carga */}
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/cipo-blue-45x40.png" 
                  alt="Cisterna CIPO Azul Automática" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-8 rounded-[2rem] shadow-2xl z-20 border-4 border-white">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Capacidad Base</p>
                <p className="text-4xl font-black tracking-tighter">45 LITROS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tight flex items-center">
                <Settings className="mr-4 text-blue-600 h-6 w-6" /> Ficha Técnica
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Dimensiones", val: "45 x 40 x 40 cm" },
                  { label: "Motor", val: "½ HP Alta Presión" },
                  { label: "Cuerpo", val: "Polietileno Reforzado" },
                  { label: "Garantía", val: "1 Año de Fábrica", highlight: true }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                    <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest">{spec.label}</span>
                    <span className={`font-black text-sm uppercase tracking-tight ${spec.highlight ? 'text-blue-600' : 'text-slate-900'}`}>{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl w-fit mb-8 shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-6 uppercase">Ingeniería para la vida diaria</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Diseñamos CIPO para ser la respuesta definitiva al desabasto en zonas densamente pobladas. Su diseño modular permite que cualquier persona pueda asegurar su suministro de agua sin depender de plomeros o excavaciones costosas.
              </p>
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                <HeartHandshake className="h-5 w-5" /> Desarrollo Mexicano de Vanguardia
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CIPO;
