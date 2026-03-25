import {
  services,
  highlights,
  testimonials,
  painPoints,
  processSteps,
} from '../data'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,ChevronDown,
  Star,
  ShieldCheck,
  TrendingUp,
  Building,
  BarChart3,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import StatCard from './PremiumComponents/StatCard'



export default function PremiumVersion() {
   
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedIdx, setExpandedIdx] = useState(null)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-600 font-sans selection:bg-amber-900/10 selection:text-amber-900 overflow-x-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-stone-400/10 blur-[120px]"></div>
      </div>

      {/* Glass Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/50 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-light tracking-[0.2em] text-stone-900 uppercase flex items-center gap-2 md:gap-3">
            <ShieldCheck className="text-amber-700" size={24} />
            <span className="font-bold">Eng</span>enharia
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase text-stone-500">
            <a
              href="#problemas"
              className="hover:text-amber-700 transition-colors"
            >
              Problemas
            </a>
            <a
              href="#servicos"
              className="hover:text-amber-700 transition-colors"
            >
              Soluções
            </a>
            <a
              href="#metodo"
              className="hover:text-amber-700 transition-colors"
            >
              Método
            </a>
            <a href="#sobre" className="hover:text-amber-700 transition-colors">
              Expertise
            </a>
            <a
              href="#valores"
              className="hover:text-amber-700 transition-colors"
            >
              Valores
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white bg-stone-900 px-8 py-3 rounded-none hover:bg-stone-800 transition-all hover:shadow-lg">
              <MessageCircle size={16} />
              Falar no WhatsApp
            </button>

            {/* Mobile Menu Button - REINSERIDO AQUI */}
            <button
              className="md:hidden text-stone-900 p-2 z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>{' '}
        {/* Fecha o container da logo/nav */}
        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-stone-200 shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex flex-col px-8 py-12 gap-10">
                <nav className="flex flex-col gap-8 text-sm font-medium tracking-[0.2em] uppercase text-stone-600">
                  {[
                    { name: 'Problemas', href: '#problemas' },
                    { name: 'Soluções', href: '#servicos' },
                    { name: 'Método', href: '#metodo' },
                    { name: 'Expertise', href: '#sobre' },
                    { name: 'Valores', href: '#valores' },
                  ].map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-amber-700 transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button className="w-full flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white bg-stone-900 py-5 group">
                    <MessageCircle
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                    Falar no WhatsApp
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Arquitetura Premium"
            className="w-full h-full object-cover opacity-[0.15] grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/80 to-stone-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 border border-amber-700/20 bg-amber-700/5 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="text-amber-800 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Alto Padrão em Regularização
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 leading-[1.1] mb-6 md:mb-8 tracking-tight">
              O valor oculto do seu <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-stone-600">
                patrimônio.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-500 font-light max-w-2xl mb-10 md:mb-12 leading-relaxed">
              Seu imóvel está irregular e a venda travou? Engenharia de precisão
              e inteligência jurídica para destravar negociações e maximizar sua
              rentabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="w-full sm:w-auto group relative px-8 py-4 bg-stone-900 text-white font-bold text-xs md:text-sm tracking-widest uppercase overflow-hidden flex justify-center">
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle size={18} />
                  Destravar Minha Venda
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-amber-700 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border border-stone-300 text-stone-700 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-stone-200/50 transition-colors backdrop-blur-sm text-center">
                Nossas Soluções
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section
        className="py-32 relative z-10 bg-white border-t border-stone-200"
        id="problemas"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4">
              O Preço da Irregularidade
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-stone-900">
              Riscos ao seu Patrimônio
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative p-10 bg-stone-50 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-8 border border-red-100">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-light text-stone-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-stone-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Steps */}
      <section
        className="py-32 relative z-10 bg-stone-900 text-stone-50"
        id="metodo"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">
              Método Exclusivo
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-white">
              Como Resolvemos
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {idx !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-amber-700/50 to-transparent"></div>
                )}
                <div className="w-24 h-24 rounded-full border border-amber-700/30 flex items-center justify-center mb-8 bg-stone-800 relative z-10">
                  <step.icon
                    size={40}
                    strokeWidth={1}
                    className="text-amber-500"
                  />
                </div>
                <h4 className="text-2xl font-light text-white mb-4">
                  {step.title}
                </h4>
                <p className="text-stone-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-24 md:py-32 relative z-10 bg-stone-100 border-y border-stone-200"
        id="servicos"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header com animação mais rápida para mobile */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-3">
                Portfólio de Soluções
              </h2>
              <h3 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight">
                Serviços Especializados
              </h3>
            </motion.div>

            <button className="text-xs md:text-sm font-bold tracking-widest uppercase text-stone-900 flex items-center gap-2 hover:text-amber-700 transition-colors group">
              Ver Catálogo Completo
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>

          {/* Grid: 2 colunas mobile, 4 desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone-200 border border-stone-200 overflow-hidden">
            {services.map((service, idx) => {
              const isExpanded = expandedIdx === idx

              return (
                <motion.div
                  key={idx}
                  layout
                  // No mobile, removemos o delay longo para não parecer que o site está travado
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.4,
                    delay:
                      window.innerWidth < 768 ? (idx % 2) * 0.1 : idx * 0.05,
                  }}
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                  className={`bg-white p-5 md:p-8 group hover:bg-stone-50 transition-colors cursor-pointer relative flex flex-col min-h-[160px] md:min-h-[200px] ${
                    isExpanded ? 'z-20' : 'z-10'
                  }`}
                >
                  <div className="flex justify-between items-start relative z-10 mb-4">
                    <service.icon
                      size={23}
                      strokeWidth={1.5}
                      className={`${isExpanded ? 'text-amber-700' : 'text-stone-400'} group-hover:text-amber-700 transition-colors`}
                    />
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-stone-300"
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </div>

                  <h4
                    className={`text-[12px] md:text-lg font-light leading-tight transition-colors relative z-10 ${
                      isExpanded
                        ? 'text-stone-900 font-normal'
                        : 'text-stone-700 group-hover:text-stone-900'
                    }`}
                  >
                    {service.name}
                  </h4>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'circOut' }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="mt-4 text-[12px] md:text-sm text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                          {service.description ||
                            'Solução técnica de alta precisão para o seu projeto.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-4">
                    <div
                      className={`h-px transition-all duration-700 ${isExpanded ? 'w-full bg-amber-700' : 'w-6 bg-stone-200'}`}
                    ></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust & Data Section (New Animated Graphs) */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4">
              Inteligência de Mercado
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-stone-900">
              O Impacto da Regularização
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <StatCard
              icon={TrendingUp}
              label="Valorização"
              prefix="+"
              value={35}
              suffix="%"
              description="Aumento médio no valor de mercado do imóvel após a regularização completa e emissão do Habite-se."
              barColor="bg-amber-600"
              barWidth="85%"
            />

            <StatCard
              icon={Building}
              label="Casos de Sucesso"
              prefix="+"
              value={1240}
              description="Processos de regularização, desmembramento e aprovação de projetos concluídos com êxito pela nossa equipe."
              barColor="bg-stone-900"
              barWidth="100%"
              delay={0.2}
            />

            <StatCard
              icon={BarChart3}
              label="Liquidez"
              value={3}
              suffix="x"
              description="Mais rapidez na venda ou locação. Imóveis com documentação em dia são a preferência absoluta do mercado."
              barColor="bg-amber-600"
              barWidth="90%"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Highlights / Expertise */}
      <section
        className="py-32 relative z-10 bg-stone-50 border-t border-stone-200"
        id="sobre"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4">
              Nossa Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-stone-900">
              Pilares de Atuação
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative p-10 bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <item.icon
                  size={40}
                  strokeWidth={1}
                  className="text-amber-700 mb-8"
                />
                <h4 className="text-2xl font-light text-stone-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-stone-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Commitment */}
      <section
        className="py-32 relative z-10 bg-stone-900 text-stone-50"
        id="valores"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">
                Compromisso
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-8">
                Nossos Valores Inegociáveis
              </h3>
              <p className="text-stone-400 font-light leading-relaxed text-lg mb-8">
                Acreditamos que a engenharia vai muito além de plantas e
                cálculos. Trata-se de proteger investimentos, viabilizar sonhos
                e garantir a tranquilidade jurídica e estrutural de cada
                cliente.
              </p>
              <button className="text-sm font-bold tracking-widest uppercase text-white flex items-center gap-2 hover:text-amber-500 transition-colors group">
                Fale com um Especialista
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: 'Transparência',
                  desc: 'Comunicação clara e honesta em todas as etapas do processo, sem surpresas.',
                },
                {
                  title: 'Excelência',
                  desc: 'Rigor técnico absoluto e atualização constante com as normas vigentes.',
                },
                {
                  title: 'Agilidade',
                  desc: 'Otimização inteligente de prazos sem jamais comprometer a qualidade.',
                },
                {
                  title: 'Exclusividade',
                  desc: 'Atendimento personalizado e focado nas necessidades únicas do seu projeto.',
                },
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l border-amber-700/30 pl-6"
                >
                  <h4 className="text-xl font-medium text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-stone-400 font-light text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-32 relative z-10 bg-white border-t border-stone-200"
        id="depoimentos"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4">
              Depoimentos
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-stone-900">
              Visão dos Investidores
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 border border-stone-200 bg-white shadow-sm relative"
              >
                <div className="flex gap-1 text-amber-500 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl font-light text-stone-600 italic mb-8 leading-relaxed">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-bold border border-stone-200">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-stone-900 font-medium">{test.name}</h5>
                    <span className="text-sm text-amber-700">{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 border-t border-stone-200 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            Pronto para destravar sua venda?
          </h2>
          <p className="text-xl text-stone-400 font-light max-w-2xl mx-auto mb-12">
            Agende uma consultoria técnica exclusiva e descubra o caminho mais
            rápido para regularizar seu patrimônio.
          </p>
          <button className="px-10 py-5 bg-amber-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-500 transition-all hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] flex items-center gap-3 mx-auto">
            <MessageCircle size={20} />
            Agendar Consulta Técnica
          </button>
        </div>
        <div className="border-t border-stone-800 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest uppercase text-stone-500">
            <div className="flex items-center gap-2 text-stone-300">
              <ShieldCheck size={16} className="text-amber-600" />
              Engenharia Premium
            </div>
            <div>
              &copy; {new Date().getFullYear()} Especialista em Regularização
              Imobiliária. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
