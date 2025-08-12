import { Building, Check, Crown, Star, Target, Users, X, Zap } from 'lucide-react';
import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('all');

  const businessTypes = [
    { id: 'all', name: 'Todos os tipos', icon: Target },
    { id: 'servicos', name: 'Serviços', icon: Users },
    { id: 'vendas', name: 'Vendas', icon: Building },
    { id: 'educacao', name: 'Educação', icon: Target }
  ];

  const plans = [
    {
      name: 'Básico',
      icon: Star,
      price: { monthly: 97, annual: 77 },
      description: 'Perfeito para pequenas empresas e profissionais autônomos',
      features: [
        'Landing page personalizada',
        'Sistema de agendamentos básico',
        'Até 100 agendamentos/mês',
        'Cobranças recorrentes simples',
        'Gestão básica de clientes',
        'App mobile básico',
        'Suporte por email',
        'Relatórios básicos'
      ],
      notIncluded: [
        'Planos personalizados ilimitados',
        'Integrações avançadas',
        'Suporte prioritário',
        'Múltiplas localizações'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600',
      bestFor: ['Profissionais autônomos', 'Pequenas empresas', 'Startups']
    },
    {
      name: 'Profissional',
      icon: Zap,
      price: { monthly: 197, annual: 157 },
      description: 'Ideal para empresas em crescimento',
      features: [
        'Tudo do plano Básico',
        'Agendamentos ilimitados',
        'Planos personalizados ilimitados',
        'Cobranças recorrentes avançadas',
        'Gestão de até 1000 clientes',
        'Integrações com WhatsApp',
        'Relatórios avançados',
        'Suporte por chat',
        'Múltiplas localizações',
        'App mobile completo',
        'CRM avançado',
        'Backup em nuvem'
      ],
      notIncluded: [
        'Suporte prioritário 24/7',
        'Consultoria personalizada',
        'API personalizada'
      ],
      popular: true,
      color: 'from-primary-500 to-primary-600',
      bestFor: ['Empresas médias', 'Consultórios', 'Estúdios']
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 397, annual: 317 },
      description: 'Para grandes empresas e redes',
      features: [
        'Tudo do plano Profissional',
        'Gestão ilimitada de clientes',
        'Suporte prioritário 24/7',
        'Consultoria personalizada',
        'Integrações avançadas',
        'API personalizada',
        'Treinamento da equipe',
        'Setup personalizado',
        'Múltiplas unidades',
        'Relatórios customizados',
        'Integração com CRM',
        'Suporte multilíngue'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-yellow-500 to-yellow-600',
      bestFor: ['Grandes empresas', 'Redes de negócios', 'Corporações']
    }
  ];

  const getFilteredFeatures = (plan) => {
    if (selectedBusinessType === 'all') return plan.features;
    
    // Filtros específicos por tipo de negócio
    const businessSpecificFeatures = {
      servicos: [
        'Gestão de consultas',
        'Controle de horários',
        'Agendamento online',
        'Comunicação com clientes'
      ],
      vendas: [
        'Gestão de produtos',
        'Controle de estoque',
        'E-commerce integrado',
        'Relatórios de vendas'
      ],
      educacao: [
        'Gestão de alunos',
        'Controle de turmas',
        'Pagamentos por módulos',
        'Comunicação com pais'
      ]
    };

    return [...plan.features, ...(businessSpecificFeatures[selectedBusinessType] || [])];
  };

  return (
    <section id="pricing" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planos focados em agendamentos e cobranças
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho e tipo do seu negócio. 
            Todos incluem landing page, agendamentos e cobranças recorrentes.
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="flex flex-wrap justify-center">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedBusinessType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedBusinessType === type.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <type.icon size={16} />
                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Anual
                <span className="ml-1 text-xs text-green-600 font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular
                  ? 'transform scale-105 border-2 border-primary-500'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="card p-8 h-full">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 font-medium">
                      Economia de R$ {(plan.price.monthly - plan.price.annual) * 12}/ano
                    </p>
                  )}
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">Ideal para:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {plan.bestFor.map((business, businessIndex) => (
                      <span
                        key={businessIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {business}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Incluído no plano:</h4>
                  {getFilteredFeatures(plan).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-4 mt-6">Não incluído:</h4>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <X size={18} className="text-red-500 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.popular ? 'Começar agora' : 'Escolher plano'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar você a escolher 
              o plano ideal e configurar sua plataforma em menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Falar com especialista
              </button>
              <button className="btn-secondary">
                Ver comparação completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 