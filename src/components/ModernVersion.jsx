import { services, highlights, painPoints, processSteps } from '../data'
import { ArrowRight, MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function ModernVersion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Eng. Projetos
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#dores" className="hover:text-blue-600 transition-colors">
              Problemas
            </a>
            <a
              href="#servicos"
              className="hover:text-blue-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="hover:text-blue-600 transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#contato"
              className="hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </nav>
          <button className="hidden md:flex bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20 transition-all active:scale-95 items-center gap-2">
            <MessageCircle size={18} />
            Falar no WhatsApp
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl flex flex-col px-6 py-6 gap-6">
            <nav className="flex flex-col gap-4 font-medium text-slate-600 text-lg">
              <a href="#dores" onClick={() => setIsMenuOpen(false)}>
                Problemas
              </a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </a>
              <a href="#processo" onClick={() => setIsMenuOpen(false)}>
                Como Funciona
              </a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
            </nav>
            <button className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Falar no WhatsApp
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left mt-8 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-xs md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Especialista em Regularização
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Seu Imóvel Não Tem Habite-se e a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Venda Travou?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
            Regularizamos toda a documentação para você não perder o comprador.
            Soluções completas em engenharia e projetos para garantir a
            valorização do seu patrimônio.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full">
            <button className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/20 transition-all flex items-center justify-center gap-2 group">
              <MessageCircle size={20} />
              Quero Destravar Minha Venda
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-3xl -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
            alt="Engenharia e Projetos"
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Dores (Pain Points) */}
      <section className="py-24 px-6 bg-white" id="dores">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Isso aconteceu com você?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A irregularidade do imóvel pode causar prejuízos reais e travar
              seus planos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-slate-50" id="servicos">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Soluções Técnicas & Jurídicas
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">
                Atuação completa em todas as etapas da regularização e projetos
                de engenharia.
              </p>
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors group">
              Ver todos os serviços
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex items-start gap-4 cursor-pointer"
              >
                <div className="text-blue-500 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 px-6 bg-blue-600 text-white" id="processo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Como Resolvemos
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Nosso método comprovado para destravar a venda do seu imóvel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                  <step.icon size={36} className="text-blue-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-slate-900 text-slate-300 py-20 px-6" id="contato">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Destrave sua venda hoje.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Não deixe a burocracia desvalorizar seu patrimônio. Agende uma
            consulta técnica agora.
          </p>
          <button className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20 flex items-center gap-2 mx-auto">
            <MessageCircle size={24} />
            Agendar Consulta Técnica
          </button>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="font-bold text-white text-xl">Eng. Projetos</div>
          <div>
            &copy; {new Date().getFullYear()} Especialista em Regularização
            Imobiliária. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
