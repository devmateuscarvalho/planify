import { BarChart3, BookOpen, Calendar, CreditCard, Database, MessageCircle, Settings, Shield, Smartphone, Target, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Landing Page Personalizada',
      description: 'Página única e atrativa para captar clientes e permitir agendamentos online com design responsivo.',
      color: 'from-blue-500 to-blue-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Calendar,
      title: 'Sistema de Agendamentos',
      description: 'Calendário integrado com controle de horários disponíveis, confirmações automáticas e gestão de conflitos.',
      color: 'from-green-500 to-green-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: CreditCard,
      title: 'Cobranças Recorrentes',
      description: 'Pagamentos automáticos com planos personalizados, múltiplas formas de pagamento e controle de assinaturas.',
      color: 'from-purple-500 to-purple-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Users,
      title: 'Área do Cliente',
      description: 'Portal personalizado para seus clientes acessarem agendamentos, histórico e gerenciarem seus planos.',
      color: 'from-orange-500 to-orange-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Settings,
      title: 'Backoffice Integrado',
      description: 'Painel administrativo completo para gerenciar clientes, agendamentos, pagamentos e configurações.',
      color: 'from-red-500 to-red-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Database,
      title: 'Gestão de Clientes',
      description: 'CRM completo com histórico de agendamentos, preferências e segmentação de clientes.',
      color: 'from-indigo-500 to-indigo-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: BookOpen,
      title: 'Planos Personalizados',
      description: 'Crie seus próprios planos de assinatura com diferentes preços, durações e benefícios.',
      color: 'from-pink-500 to-pink-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: MessageCircle,
      title: 'Comunicação Integrada',
      description: 'WhatsApp, email e SMS automáticos para lembretes, confirmações e follow-ups.',
      color: 'from-yellow-500 to-yellow-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Analytics',
      description: 'Dashboard completo com métricas de agendamentos, conversões, receitas e performance do negócio.',
      color: 'from-teal-500 to-teal-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Aplicativo para clientes agendarem, visualizarem horários e gerenciarem seus planos.',
      color: 'from-cyan-500 to-cyan-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: Shield,
      title: 'Segurança e Compliance',
      description: 'Proteção de dados, backup automático, LGPD e controle de permissões por usuário.',
      color: 'from-emerald-500 to-emerald-600',
      segments: ['Todos os segmentos']
    },
    {
      icon: TrendingUp,
      title: 'Integrações',
      description: 'Conecte com ferramentas populares: WhatsApp, Instagram, Google Calendar, Stripe e mais.',
      color: 'from-rose-500 to-rose-600',
      segments: ['Todos os segmentos']
    }
  ];

  const businessTypes = [
    'Academias e Estúdios',
    'Consultórios e Clínicas',
    'Escolas e Cursos',
    'Salões de Beleza',
    'Consultores e Freelancers',
    'Lojas e E-commerce',
    'Restaurantes e Delivery',
    'Serviços Profissionais',
    'Eventos e Workshops',
    'Assinaturas e Recorrência'
  ];

  return (
    <section id="features" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recursos essenciais para agendamentos e cobranças
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece exatamente o que você precisa: landing page,
            agendamentos, cobranças recorrentes e gerenciamento completo.
          </p>
        </div>

        {/* Business Types */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Funciona para qualquer tipo de empresa:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 group hover:scale-105 transition-all duration-300">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Applicable Segments */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">Aplicável para:</p>
                <div className="flex flex-wrap gap-1">
                  {feature.segments.map((segment, segIndex) => (
                    <span
                      key={segIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {segment}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para transformar seus agendamentos e cobranças?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Independente do seu segmento, nossa plataforma tem as ferramentas certas
              para organizar horários e receber pagamentos automaticamente.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Começar gratuitamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 