
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Recycle, Globe, Target, Leaf, Car, LayoutGrid, Lightbulb, Rocket, Droplets, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-blue-500"></span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Ingeniería & Futuro</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl mb-8 leading-[0.9]">
              IMPULSORA DE <br />
              <span className="text-blue-600">INNOVACIONES</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-400 max-w-2xl">
              Somos un ecosistema de desarrollo tecnológico que transforma necesidades críticas en soluciones disruptivas y sostenibles de alto impacto ambiental.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                to="/portafolio"
                className="rounded-full bg-blue-600 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all flex items-center group"
              >
                Explorar Soluciones <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/nosotros" className="text-xs font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                Nuestra Misión <span className="text-blue-600">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-xs font-black leading-7 text-blue-600 uppercase tracking-[0.4em] mb-4">Nuestro ADN</h2>
            <p className="text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Innovación Multisectorial
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              No nos limitamos. Nuestra metodología permite incubar soluciones independientes en energía, movilidad, agua y agroindustria, asegurando impacto y escalabilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Ingeniería Disruptiva',
                description: 'Desde movilidad eléctrica hasta gestión hídrica, aplicamos ciencia de vanguardia.',
                icon: Lightbulb,
              },
              {
                name: 'Impacto ESG Real',
                description: 'Toda nuestra tecnología está diseñada bajo estrictos criterios de sostenibilidad.',
                icon: Recycle,
              },
              {
                name: 'Modelo Spin-Off',
                description: 'Estructuramos cada innovación como una unidad autónoma lista para escalar.',
                icon: Rocket,
              },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="rounded-2xl bg-blue-600 p-4 w-fit mb-8 shadow-lg shadow-blue-200">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-slate-900 mb-4">{feature.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Product: CIPO */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col">
              <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6">Producto Estrella</h2>
              <h3 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">CIPO: Abasto <br /><span className="text-blue-600">Automático</span></h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                La cisterna portátil automática es el ejemplo perfecto de nuestra capacidad inventiva: soluciona el desabasto doméstico sin obra civil costosa.
              </p>
              
              <div className="mb-16">
                <Link to="/cipo" className="inline-flex items-center px-10 py-5 text-xs font-black uppercase tracking-widest rounded-full shadow-2xl shadow-blue-500/20 text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1">
                  Explorar CIPO
                </Link>
              </div>
              
              {/* Foto del Equipo Oficina - Ajustada para no encimar */}
              <div className="relative mt-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-slate-200 rounded-[3rem] blur-2xl opacity-30"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/equipo-innovacion.png" 
                    alt="Equipo de Impulsora de Innovaciones trabajando en oficina" 
                    className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="bg-slate-950 p-8 text-white">
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-blue-600 rounded-2xl">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1">Cultura de Innovación</p>
                        <p className="text-sm font-bold text-slate-300">Impulsamos el talento mexicano con visión global.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32 space-y-8 mt-12 lg:mt-0">
              <div className="relative group aspect-square flex items-center justify-center bg-slate-950 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-900">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/50 via-transparent to-transparent"></div>
                </div>
                <Droplets className="h-40 w-40 text-blue-500/20 animate-pulse relative z-10" />
                <div className="absolute bottom-12 left-12 text-white z-20">
                  <p className="text-5xl font-black tracking-tighter">45L</p>
                  <p className="text-[10px] font-black opacity-50 uppercase tracking-[0.2em]">Suministro Vital</p>
                </div>
              </div>
              
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest">Tecnología Plug & Play</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Instalación en menos de 20 minutos por el usuario final, eliminando la dependencia de infraestructura centralizada costosa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full gap-4 p-8">
            {Array.from({length: 12}).map((_, i) => <div key={i} className="h-full border-r border-white/10"></div>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl font-black sm:text-6xl tracking-tighter mb-8 leading-none">ÚNETE A LA REVOLUCIÓN<br />TECNOLÓGICA</h2>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Buscamos socios estratégicos e inversionistas para escalar nuestras divisiones de energía, movilidad y agua.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link to="/contacto" className="bg-white text-blue-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-2xl shadow-black/20">
              Contactar Dirección
            </Link>
            <Link to="/portafolio" className="text-white border-2 border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
