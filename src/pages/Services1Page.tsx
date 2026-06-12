import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Search,
  Terminal,
  Code2,
  Server,
  Monitor,
  Sliders,
  Network,
  Package,
} from 'lucide-react';

export default function Services1Page() {
  const services = [
    {
      title: 'Methodology Consulting',
      icon: Search,
      points: [
        'Data analysis and statistics',
        'Machine learning',
        'Artificial intelligence',
        'Experiment design',
        'Method development',
        'Data and text mining'
      ]
    },
    {
      title: 'Scientific Programming',
      icon: Terminal,
      points: [
        'R, Python, Julia package development',
        'Code review and optimization',
        'Porting code to low-level languages',
        'Parallel and distributed computing',
        'In-database data science',
        'GPU / FPGA programming'
      ]
    },
    {
      title: 'Application Development and Integration',
      icon: Code2,
      points: [
        'Desktop and web applications',
        'Automation of analyses or predictive modeling',
        'Data science APIs',
        'Scientific data stores',
        'Big data architecture',
        'Data science tooling'
      ]
    },
    {
      title: 'Data Science Platforms',
      icon: Server,
      points: [
        'Data analysis orchestration',
        'Machine learning platform design',
        'Data science infrastructure setup and hosting',
        'Data science APIs as a service',
        'Managed services for scientific data stores'
      ]
    }
  ];

  const products = [
    {
      title: 'Architect',
      icon: Monitor,
      points: [
        'IDE for data science, state of the art',
        'Comfort and productivity for the R, Python and Julia developer',
        'Support of low-level languages (C, C++, FORTRAN)',
        'Server version for teams and HPC environments',
        'Fully open source, including all enterprise features'
      ]
    },
    {
      title: 'ShinyProxy',
      icon: Sliders,
      points: [
        'Shiny app deployment for companies and large organizations',
        'Highly scalable design using Docker infrastructure',
        'Authentication and authorization, single-sign on deployments',
        'Usage statistics and administrator views',
        'Fully open source, including all enterprise features'
      ]
    },
    {
      title: 'R Service Bus',
      icon: Network,
      points: [
        'Middleware for automation of R-based jobs',
        'Rich set of supported protocols (REST, SOAP, e-mail protocols, etc.)',
        'Integrated management of multiple R pools for distributed computing',
        'Synchronous and asynchronous APIs, admin API',
        'Supports plain R scripts and packages out of the box'
      ]
    },
    {
      title: 'RDepot',
      icon: Package,
      points: [
        'Corporate management of R package repositories',
        'RESTful APIs for package submission and repository generation',
        'Authentication and authorization for actions on multiple repositories',
        'Support of continuous integration infrastructure',
        'Highly available repository set-up and full audit trails'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0f269a]/20 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-left relative overflow-hidden">
        {/* Soft background mesh accents */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            SERVICES 1
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-4xl font-sans py-2">
            Informatics & Data Science Services
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-light">
            Empower your scientific and development teams with elite methodology consulting, customized programming, scalable deployment architectures, and open-source analytics platforms.
          </p>
        </div>
      </section>

      {/* Row 1: Explore Our Services */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wider uppercase font-sans">
              Explore Our Services
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,38,154,0.06)] duration-300 transition-all relative overflow-hidden group min-h-[380px]"
                >
                  {/* Styled top blue bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f269a] to-blue-500 rounded-t-3xl"></div>
                  
                  {/* Icon section */}
                  <div className="flex justify-center mb-6 mt-2">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0f269a] group-hover:scale-110 duration-300 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide text-center mb-6 font-sans min-h-[40px] flex items-center justify-center">
                    {svc.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3.5 pl-1 text-xs text-slate-600 font-medium flex-grow">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-blue-500"></span>
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Row 2: Discover Our Products */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wider uppercase font-sans">
              Discover Our Products
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,38,154,0.06)] duration-300 transition-all relative overflow-hidden group min-h-[380px]"
                >
                  {/* Styled top blue bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f269a] to-blue-500 rounded-t-3xl"></div>
                  
                  {/* Icon section */}
                  <div className="flex justify-center mb-6 mt-2">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0f269a] group-hover:scale-110 duration-300 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide text-center mb-6 font-sans min-h-[40px] flex items-center justify-center">
                    {prod.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3.5 pl-1 text-xs text-slate-600 font-medium flex-grow">
                    {prod.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-blue-500"></span>
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
