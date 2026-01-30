
import React from 'react';
import { Users, History, Lightbulb, Target, CheckCircle, Handshake, Building2, Eye, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Introduction */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Impulsora de Innovaciones S.A.S.</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Surgimos como un centro de ingeniería y desarrollo orientado a crear soluciones tecnológicas disruptivas para problemáticas sociales y productivas. No somos solo una empresa; somos un ecosistema donde la ciencia aplicada se convierte en impacto real.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-slate-700">Innovación Multisectorial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-slate-700">Impacto Ambiental Medible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-slate-700">Modelo de Negocio Spin-Off</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-12 text-white flex flex-col justify-center min-h-[400px]">
                <Lightbulb className="h-16 w-16 text-blue-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4 italic">Ingeniería que trasciende.</h2>
                <p className="text-slate-400">Cada proyecto en nuestro portafolio es un testimonio de excelencia técnica y compromiso social.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col">
              <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mb-6 shadow-lg shadow-blue-200">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Impulsar el desarrollo tecnológico y la innovación disruptiva para resolver problemáticas complejas de la sociedad y la industria, transformando ideas en unidades de negocio sostenibles, eficientes y competitivas a nivel global.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col">
              <div className="bg-blue-500 text-white p-4 rounded-2xl w-fit mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-slate-300 leading-relaxed">
                Ser el principal semillero de innovaciones en México para el 2030, reconocido por nuestra capacidad de diversificación tecnológica y por crear un impacto positivo medible en el medio ambiente y la calidad de vida de las personas.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl w-fit mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center"><Shield className="h-4 w-4 text-blue-500 mr-2" /> Innovación Disruptiva</li>
                <li className="flex items-center"><Shield className="h-4 w-4 text-blue-500 mr-2" /> Sostenibilidad Ambiental</li>
                <li className="flex items-center"><Shield className="h-4 w-4 text-blue-500 mr-2" /> Excelencia Técnica</li>
                <li className="flex items-center"><Shield className="h-4 w-4 text-blue-500 mr-2" /> Colaboración Estratégica</li>
                <li className="flex items-center"><Shield className="h-4 w-4 text-blue-500 mr-2" /> Responsabilidad Social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Handshake className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">Nuestro Ecosistema de Aliados</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Colaboramos con instituciones de prestigio para validar y escalar nuestras diversas líneas tecnológicas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { name: 'Alcaldía Coyoacán', category: 'Aliado Estratégico' },
              { name: 'Municipio Nezahualcóyotl', category: 'Aliado Estratégico' },
              { name: 'FUMEC / TechBA', category: 'Aceleración' },
              { name: 'Instituciones Educativas', category: 'I+D y Validación' },
              { name: 'Entidades Gubernamentales', category: 'Impacto Social' },
              { name: 'Consultores Especializados', category: 'Estrategia' },
              { name: 'Proveedores de Alta Gama', category: 'Componentes' },
              { name: 'Distribuidores Autorizados', category: 'Canales' },
              { name: 'Fondos de Gobierno', category: 'Capitalización' },
              { name: 'IMPI México', category: 'Propiedad Intelectual' }
            ].map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-shadow text-center">
                <div className="bg-slate-50 p-3 rounded-full mb-4">
                  <Building2 className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{partner.name}</h4>
                <p className="text-xs text-blue-600 mt-1 uppercase tracking-wider">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Organization */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Estructura Organizacional</h2>
              <p className="text-slate-400">Nuestro equipo está diseñado de forma funcional para maximizar la capacidad inventiva en diversos campos tecnológicos.</p>
            </div>
            <Users className="h-12 w-12 text-blue-500 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: 'Dirección General', focus: 'Estrategia y Liderazgo (Alfredo Romero)' },
              { role: 'Ingeniería', focus: 'Desarrollo Técnico y I+D (Luis Herrera / Enrique Borja)' },
              { role: 'Marketing y Ventas', focus: 'Estrategias B2B y Canales Digitales' },
              { role: 'Administración', focus: 'Operación y Gestión de Inventarios' }
            ].map((dept, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
                <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">{dept.role}</h4>
                <p className="text-white font-medium">{dept.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
