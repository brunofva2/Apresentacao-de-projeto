import { motion } from 'motion/react'
import {
  TrendingDown,
  Search,
  Smartphone,
  Globe,
  MessageCircle,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutTemplate,
} from 'lucide-react'

export default function Proposal() {
  const plans = [
    {
      name: 'Essencial',
      price: '500',
      description: 'Ideal para começar sua presença digital.',
      features: [
        'Página simples e direta',
        'Apresentação do serviço',
        'Botão de WhatsApp',
        'Posicionamento no Google',
      ],
      color: 'text-slate-400',
      border: 'border-slate-800',
      bg: 'bg-slate-900/50',
    },
    {
      name: 'Profissional',
      price: '700',
      popular: true,
      description: 'Mais completo, focado em alta conversão.',
      features: [
        'Tudo do plano Essencial',
        'Seção detalhada de dores',
        'Melhor estrutura de vendas',
        'Layout mais estratégico',
      ],
      color: 'text-blue-400',
      border: 'border-blue-500/50',
      bg: 'bg-blue-900/10',
    },
    {
      name: 'Premium',
      price: '900',
      description: 'Para quem quer resultado de verdade.',
      features: [
        'Tudo do Profissional',
        'Estrutura completa de autoridade',
        'Mais seções estratégicas',
        'Foco em clientes investidores',
      ],
      color: 'text-amber-400',
      border: 'border-amber-500/50',
      bg: 'bg-amber-900/10',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-600/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* 1. CAPA */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                Proposta de Presença Digital
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Gabriel Costa
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-light mb-8">
              Engenharia & Regularização Imobiliária
            </p>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Posicionamento no Google + Página Profissional para captação de
              clientes e investidores.
            </p>
          </motion.div>
        </section>

        {/* 2. PROBLEMA */}
        <section className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                  <TrendingDown className="text-red-400" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Hoje seu negócio pode estar perdendo clientes
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Muitas pessoas procuram serviços de regularização no Google
                  todos os dias. Se a sua empresa não aparece ou não transmite
                  confiança, você acaba perdendo oportunidades e honorários para
                  concorrentes menos qualificados.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. SOLUÇÃO & 4. ENTREGÁVEIS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A solução é simples
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Criamos uma página profissional que apresenta seu serviço de
                forma clara, gera confiança imediata e facilita o contato direto
                pelo WhatsApp.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: LayoutTemplate,
                  title: 'Página Profissional',
                  desc: 'Design moderno e personalizado.',
                },
                {
                  icon: Smartphone,
                  title: '100% Responsivo',
                  desc: 'Adaptado perfeitamente para celular.',
                },
                {
                  icon: Globe,
                  title: 'Posicionamento',
                  desc: 'Estrutura otimizada para o Google.',
                },
                {
                  icon: Zap,
                  title: 'Foco em Conversão',
                  desc: 'Botão direto para seu WhatsApp.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <item.icon className="text-blue-400 mb-4" size={28} />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PLANOS */}
        <section className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Planos de Investimento
              </h2>
              <p className="text-lg text-slate-400">
                Escolha a estrutura ideal para o seu momento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative p-8 rounded-3xl border ${plan.border} ${plan.bg} backdrop-blur-sm ${plan.popular ? 'lg:-translate-y-4 shadow-2xl shadow-blue-900/20' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Melhor Custo-Benefício
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.color}`}>
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 h-10">
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">
                      R$ {plan.price}
                    </span>
                    <span className="text-slate-500"> /único</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle2
                          className={plan.color}
                          size={20}
                          shrink={0}
                        />
                        <span className="text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                  >
                    Escolher {plan.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. DIFERENCIAL & 7. EXTRAS */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-amber-400" size={28} />
                <h3 className="text-2xl font-bold text-white">
                  Por que fazer comigo?
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Além de criar o site, eu já deixo ele pronto para aparecer no
                Google, garantindo que seu negócio tenha presença online desde o
                início. Isso evita retrabalho e faz você começar com mais
                vantagem sobre a concorrência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Personalizações Extras
              </h3>
              <p className="text-slate-400 mb-6 text-sm">
                Caso queira adicionar mais páginas específicas no futuro (ex:
                Loteamentos, Captação de Investidores):
              </p>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-white font-medium">Página Adicional</span>
                <span className="text-blue-400 font-bold">R$ 100 a R$ 300</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. FECHAMENTO (CTA) */}
        <section className="py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos colocar seu negócio no Google?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Me chama no WhatsApp e começamos o seu projeto ainda hoje 🚀
            </p>
            <button className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-all hover:shadow-lg hover:shadow-green-600/20">
              <MessageCircle size={24} />
              Falar no WhatsApp
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
