
import React from 'react';
import { 
  Droplets, 
  Zap, 
  Car, 
  Utensils, 
  Cpu, 
  Trees, 
  ArrowRight, 
  Sun, 
  Battery, 
  Flame, 
  Wind,
  LayoutGrid
} from 'lucide-react';

// Added React.FC type to handle standard React props like 'key' correctly during prop spreading
const ProjectCard: React.FC<{ title: string, subtitle: string, items: string[], icon: any, colorClass: string }> = ({ title, subtitle, items, icon: Icon, colorClass }) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
    <div className={`p-4 rounded-2xl w-fit ${colorClass} mb-6 transition-transform group-hover:scale-110`}>
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">{subtitle}</p>
    <ul className="space-y-3 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-slate-600 text-sm">
          <span className="mr-2 text-slate-300">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Portafolio: React.FC = () => {
  const categories = [
    {
      title: "Manejo Doméstico del Agua",
      subtitle: "Gestión Hídrica de Última Milla",
      icon: Droplets,
      colorClass: "bg-blue-100 text-blue-600",
      items: [
        "CIPO (Cisterna Portátil)",
        "SCALL (Sistema de Captación de Agua de Lluvia)",
        "Aquaduoo",
        "Bomba de Lápiz (Tecnología Enrique)",
        "Tapete Filtrante",
        "Purificadores de Alta Gama",
        "Biodigestores Urbanos"
      ]
    },
    {
      title: "Cogeneración Eléctrica",
      subtitle: "Energía Limpia y Almacenamiento",
      icon: Zap,
      colorClass: "bg-yellow-100 text-yellow-600",
      items: [
        "Diseño y construcción de equipos propios",
        "Energía Solar Fotovoltaica",
        "Hidrógeno como vector energético",
        "Sistemas de Almacenamiento de Baterías",
        "Biocombustibles y Estufas de Bioenergía",
        "Venta de Energía: Modelos que usan nuestra energía"
      ]
    },
    {
      title: "Movilidad Eléctrica",
      subtitle: "Greyscale Brand",
      icon: Car,
      colorClass: "bg-purple-100 text-purple-600",
      items: [
        "Vehículos Eléctricos Greyscale",
        "Modelos de Negocio B2B para logística",
        "Ecosistemas que utilicen nuestros vehículos",
        "Infraestructura de carga integrada"
      ]
    },
    {
      title: "Fintech y Minería",
      subtitle: "Activos Digitales",
      icon: Cpu,
      colorClass: "bg-slate-100 text-slate-600",
      items: [
        "Minería de Bitcoins",
        "Renta de poder de cómputo",
        "Administración y mantenimiento de instalaciones",
        "Infraestructura escalable para cripto-activos"
      ]
    },
    {
      title: "Agro e Industria Alimentaria",
      subtitle: "Producción y Manejo",
      icon: Utensils,
      colorClass: "bg-orange-100 text-orange-600",
      items: [
        "Industrialización de alimentos caseros",
        "Modelos B2B y B2C para distribución alimentaria",
        "Producción bajo estándares de alta eficiencia",
        "Tecnología de empaque y conservación"
      ]
    },
    {
      title: "Muebles, Madera y Diseño",
      subtitle: "Innovación en Estructuras",
      icon: Trees,
      colorClass: "bg-green-100 text-green-600",
      items: [
        "Diseño de Muebles y carpintería tecnológica",
        "Estructuras de madera de alto rendimiento",
        "Sistemas modulares para vivienda",
        "Tecnología integrada en mobiliario urbano"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <LayoutGrid className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold sm:text-7xl mb-8 leading-tight">
              Portafolio de <span className="text-blue-500">Innovación</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Impulsora de Innovaciones S.A.S. es un semillero de modelos de negocio independientes y disruptivos, diseñados para transformar industrias enteras mediante tecnología de vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Metrics/Text */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-slate-900">Estructura Spin-Off</h2>
                    <p className="mt-4 text-slate-600">
                        Cada uno de nuestros proyectos nace como una respuesta tecnológica a una necesidad real. Los estructuramos como unidades de negocio autónomas para asegurar agilidad, escalabilidad y rentabilidad sostenida.
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <p className="text-4xl font-black text-blue-600">6+</p>
                        <p className="text-sm font-bold text-slate-500 uppercase mt-1">Líneas de Negocio</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <p className="text-4xl font-black text-blue-600">2026</p>
                        <p className="text-sm font-bold text-slate-500 uppercase mt-1">Lanzamientos Meta</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <ProjectCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">El Futuro es lo que estamos construyendo hoy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-blue-100">
                <div className="space-y-4">
                    <Sun className="h-10 w-10 mx-auto opacity-50" />
                    <h4 className="font-bold text-white">Soberanía Energética</h4>
                    <p className="text-sm">Buscamos modelos donde el usuario gestione sus propios recursos vitales.</p>
                </div>
                <div className="space-y-4">
                    <Flame className="h-10 w-10 mx-auto opacity-50" />
                    <h4 className="font-bold text-white">Cero Emisiones</h4>
                    <p className="text-sm">Toda nuestra movilidad y cogeneración apunta a la descarbonización total.</p>
                </div>
                <div className="space-y-4">
                    <Wind className="h-10 w-10 mx-auto opacity-50" />
                    <h4 className="font-bold text-white">Ecosistemas B2B</h4>
                    <p className="text-sm">Creamos infraestructuras para que otras empresas prosperen con nuestra tecnología.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="grid grid-cols-12 h-full">
                        {Array.from({length: 12}).map((_, i) => (
                            <div key={i} className="border-r border-white/20 h-full"></div>
                        ))}
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-6">¿Interesado en una unidad de negocio?</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
                    Buscamos aliados estratégicos, inversionistas y socios de canal para escalar cada una de nuestras divisiones tecnológicas.
                </p>
                <a href="/#/contacto" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                    Contactar con Dirección de Innovación <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Portafolio;
