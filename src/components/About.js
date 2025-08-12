import { BarChart3, Calendar, CreditCard, Heart, Target, Users, Zap } from 'lucide-react';
import React from 'react';

const About = () => {
    const stats = [
        { icon: Users, value: '1000+', label: 'Empresas ativas' },
        { icon: Calendar, value: '50k+', label: 'Agendamentos realizados' },
        { icon: Heart, value: '98%', label: 'Satisfação dos clientes' },
        { icon: Zap, value: '24h', label: 'Tempo de implementação' },
    ];

    const businessSegments = [
        {
            title: 'Landing Page Personalizada',
            description: 'Página única para captar clientes e permitir agendamentos online',
            icon: Users,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Sistema de Agendamentos',
            description: 'Calendário integrado com controle de horários disponíveis',
            icon: Calendar,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Cobranças Recorrentes',
            description: 'Pagamentos automáticos com planos personalizados',
            icon: Heart,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Gerenciamento Completo',
            description: 'Backoffice para controlar clientes, pagamentos e operações',
            icon: Target,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Focada no que realmente importa para seu negócio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nossa plataforma foi desenvolvida especificamente para resolver os principais
                        desafios: captar clientes, organizar agendamentos e receber pagamentos
                        de forma automática e organizada.
                    </p>
                </div>

                {/* Business Segments */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {businessSegments.map((segment, index) => (
                        <div key={index} className="text-center group">
                            <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                <segment.icon size={28} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{segment.title}</h4>
                            <p className="text-sm text-gray-600">{segment.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Por que empresas escolhem nossa plataforma?
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Target size={24} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Foco no essencial</h4>
                                    <p className="text-gray-600">
                                        Não complicamos com funcionalidades desnecessárias. Focamos em
                                        agendamentos, cobranças e landing page - exatamente o que você precisa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Zap size={24} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Implementação rápida</h4>
                                    <p className="text-gray-600">
                                        Em menos de 24 horas, sua landing page estará funcionando e
                                        captando agendamentos automaticamente.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Heart size={24} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Suporte especializado</h4>
                                    <p className="text-gray-600">
                                        Nossa equipe entende de agendamentos e cobranças e está sempre
                                        disponível para ajudar você.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CreditCard size={24} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Planos personalizados</h4>
                                    <p className="text-gray-600">
                                        Crie seus próprios planos de assinatura e cobranças recorrentes
                                        para seus clientes de forma flexível.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image/Illustration */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                        <BarChart3 size={32} className="text-primary-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        Resultados comprovados
                                    </h4>
                                    <p className="text-gray-600">
                                        Empresas que usam nossa plataforma veem resultados
                                        reais em seus negócios.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-primary-600">15+</div>
                                        <div className="text-sm text-gray-600">Segmentos atendidos</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-primary-600">50+</div>
                                        <div className="text-sm text-gray-600">Cidades atendidas</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-medium text-gray-700">Online</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
                            <div className="text-center">
                                <div className="text-lg font-bold text-primary-600">24/7</div>
                                <div className="text-xs text-gray-500">Suporte</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                                <stat.icon size={28} className="text-primary-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About; 