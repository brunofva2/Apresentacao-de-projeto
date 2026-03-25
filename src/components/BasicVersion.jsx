import { services, highlights, painPoints, processSteps } from '../data'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function BasicVersion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#002147] text-white py-6 px-4 md:px-8 flex justify-between items-center relative z-50">
        <div className="text-2xl font-bold tracking-tight">
          Engenharia Civil
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#dores" className="hover:underline">
            Problemas
          </a>
          <a href="#servicos" className="hover:underline">
            Serviços
          </a>
          <a href="#processo" className="hover:underline">
            Como Funciona
          </a>
          <a href="#contato" className="hover:underline">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-[#00152e] flex flex-col px-4 py-6 gap-4 md:hidden border-t border-white/10 shadow-xl">
            <a
              href="#dores"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Problemas
            </a>
            <a
              href="#servicos"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#contato"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200 text-center md:text-left flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="text-[#002147] font-bold tracking-wider uppercase mb-4 text-xs md:text-sm">
            Especialista em Regularização Imobiliária
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002147] mb-4 leading-tight">
            Seu Imóvel Não Tem Habite-se e a Venda Travou?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl">
            Regularizamos toda a documentação para você não perder o comprador.
            Atendimento especializado para garantir a segurança jurídica do seu
            patrimônio.
          </p>
          <button className="w-full md:w-auto bg-[#15803d] text-white px-8 py-4 rounded-md font-bold hover:bg-[#166534] transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0">
            <MessageCircle size={24} />
            QUERO DESTRAVAR MINHA VENDA
          </button>
        </div>
      </section>

      {/* Dores (Pain Points) */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" id="dores">
        <h2 className="text-3xl font-bold text-[#002147] mb-10 text-center">
          Isso aconteceu com você?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-8 rounded-lg text-center bg-white shadow-sm"
            >
              <div className="flex justify-center mb-4 text-[#b91c1c]">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50 border-y border-gray-200"
        id="servicos"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002147] mb-10 text-center">
            Soluções Técnicas & Jurídicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-4 flex items-center gap-3 rounded-md shadow-sm"
              >
                <service.icon className="text-[#002147]" size={24} />
                <span className="font-medium text-gray-700">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section
        className="py-16 px-4 md:px-8 bg-[#002147] text-white"
        id="processo"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Como Resolvemos
          </h2>
          <div className="flex flex-col gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 bg-[#00152e] p-6 rounded-lg"
              >
                <div className="text-amber-500">
                  <step.icon size={40} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-[#0f172a] text-white py-16 px-4 md:px-8 text-center"
        id="contato"
      >
        <h2 className="text-3xl font-bold mb-6">Destrave sua venda hoje.</h2>
        <p className="mb-8 text-gray-300 max-w-xl mx-auto">
          Não deixe a burocracia desvalorizar seu patrimônio. Entre em contato
          agora.
        </p>
        <button className="bg-[#15803d] text-white px-8 py-4 rounded-md font-bold hover:bg-[#166534] transition-colors flex items-center gap-2 mx-auto">
          <MessageCircle size={24} />
          AGENDAR CONSULTA TÉCNICA
        </button>
        <div className="mt-16 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Engenharia Civil - Especialista em
          Regularização Imobiliária. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
