
import React from 'react';
import { PieChart, TrendingUp, ShieldCheck, Zap, Globe, Award, Leaf } from 'lucide-react';

const ADValor: React.FC = () => {
  return (
    <div className="bg-white animate-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="bg-emerald-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">AD Valor: Plataforma de Impacto y Gestión</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Transformamos la innovación tecnológica en valor ambiental medible y monetizable. AD Valor es el vehículo que conecta la tecnología CIPO con las agendas globales de sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Medición', desc: 'Documentamos cada litro de agua gestionado eficientemente.', icon: PieChart },
              { title: 'Financiamiento', desc: 'Acceso a bonos de carbono y créditos ambientales.', icon: TrendingUp },
              { title: 'Cumplimiento', desc: 'Ayudamos a empresas a cumplir sus metas ESG.', icon: ShieldCheck },
              { title: 'Escalabilidad', desc: 'Modelo replicable a nivel nacional e internacional.', icon: Globe }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Schemes */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Esquemas de Implementación 2026</h2>
            <p className="mt-4 text-slate-600">Modelos de colaboración diseñados para maximizar el alcance social y ambiental.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Scheme 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Esquema 1</span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Gobierno / Escuelas</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-slate-600">
                  <Zap className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>Instalación de CIPO en planteles educativos.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Zap className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>Reducción de consumo de agua potable.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Zap className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>Elegibilidad para financiamiento verde institucional.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase">Beneficio Clave</p>
                <p className="text-lg font-bold text-slate-900">Escalabilidad Nacional</p>
              </div>
            </div>

            {/* Scheme 2 */}
            <div className="bg-emerald-600 rounded-3xl p-8 shadow-xl text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">Esquema 2</span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Empresa Patrocinadora</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-emerald-50">
                  <Award className="h-4 w-4 text-emerald-300 mr-3 mt-1" />
                  <span>Financiamiento corporativo de instalaciones.</span>
                </li>
                <li className="flex items-start text-sm text-emerald-50">
                  <Award className="h-4 w-4 text-emerald-300 mr-3 mt-1" />
                  <span>Obtención de Créditos Ambientales y métricas ESG.</span>
                </li>
                <li className="flex items-start text-sm text-emerald-50">
                  <Award className="h-4 w-4 text-emerald-300 mr-3 mt-1" />
                  <span>Beneficios fiscales y reputación de marca.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-emerald-500">
                <p className="text-xs font-bold text-emerald-200 uppercase">Beneficio Clave</p>
                <p className="text-lg font-bold">Impacto Social Tangible</p>
              </div>
            </div>

            {/* Scheme 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Esquema 3</span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Alianza Público-Privada</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-slate-600">
                  <Leaf className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>Gobierno aporta espacio y operación.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Leaf className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>Sector privado financia la innovación.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Leaf className="h-4 w-4 text-emerald-500 mr-3 mt-1" />
                  <span>AD Valor gestiona certificación de impacto.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase">Beneficio Clave</p>
                <p className="text-lg font-bold text-slate-900">Resiliencia Hídrica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Credits CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Monetiza el Impacto Ambiental</h2>
          <p className="text-lg text-slate-600 mb-12">
            Nuestra plataforma no solo mide el ahorro de agua, sino que lo traduce en indicadores financieros que permiten la sostenibilidad a largo plazo de los proyectos.
          </p>
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
            Solicitar Portafolio de Inversión AD Valor
          </button>
        </div>
      </section>
    </div>
  );
};

export default ADValor;
