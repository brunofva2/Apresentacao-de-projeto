import {
  FileCheck,
  HardHat,
  TrendingUp,
  ShieldCheck,
  Map,
  Zap,
  Droplets,
  Building2,
  FileText,
  Flame,
  Maximize,
  FileSignature,
  DollarSign,
  AlertTriangle,
  Home,
  Search,
} from 'lucide-react'

export const painPoints = [
  {
    icon: DollarSign,
    title: 'Desvalorização Real',
    description:
      'Imóveis irregulares perdem valor de mercado. Não deixe seu patrimônio desvalorizar.',
  },
  {
    icon: AlertTriangle,
    title: 'Financiamento Negado',
    description:
      'Bancos não aprovam crédito para imóveis sem a documentação em dia.',
  },
  {
    icon: Home,
    title: 'Venda Impedida',
    description:
      'O cartório não realiza a transferência de propriedade sem o Habite-se.',
  },
]

export const processSteps = [
  {
    icon: Search,
    title: '1. Diagnóstico',
    description: 'Análise detalhada da situação do seu imóvel.',
  },
  {
    icon: FileText,
    title: '2. Projetos',
    description: 'Desenvolvimento de laudos e plantas técnicas.',
  },
  {
    icon: FileCheck,
    title: '3. Aprovação',
    description: 'Habite-se em mãos e venda liberada.',
  },
]

export const services = [
  { name: 'Averbação', icon: FileSignature },
  { name: 'Incorporação', icon: Building2 },
  { name: 'Desmembramento', icon: Map },
  { name: 'Regularização de Construção', icon: ShieldCheck },
  { name: 'CND', icon: FileText },
  { name: 'Bombeiros', icon: Flame },
  { name: 'Retificação de Área', icon: Maximize },
  { name: 'Unificação', icon: Map },
  { name: 'Projetos Elétricos', icon: Zap },
  { name: 'Projetos Hidro', icon: Droplets },
  { name: 'Terraplanagem', icon: HardHat },
  { name: 'Habite-se / INCRA / CAR', icon: FileCheck },
]

export const highlights = [
  {
    title: 'Regularização Imobiliária',
    description:
      'Valorize seu patrimônio em até 50% com a documentação em dia.',
    icon: FileCheck,
  },
  {
    title: 'Engenharia e Projetos',
    description:
      'Projetos otimizados com foco total em segurança e economia para sua obra.',
    icon: HardHat,
  },
  {
    title: 'Assessoria para Investidores',
    description:
      'Análise de viabilidade técnica e legal para investimentos seguros em SC.',
    icon: TrendingUp,
  },
]

export const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'Investidor Imobiliário',
    text: 'A assessoria foi fundamental para a viabilidade do nosso último empreendimento em SC. Profissionalismo e agilidade.',
  },
  {
    name: 'Mariana Silva',
    role: 'Proprietária',
    text: 'Consegui regularizar minha casa e o valor de mercado subiu consideravelmente. Excelente trabalho!',
  },
  {
    name: 'Roberto Almeida',
    role: 'Construtor',
    text: 'Os projetos elétricos e hidrossanitários foram entregues no prazo e com muita qualidade técnica.',
  },
]
