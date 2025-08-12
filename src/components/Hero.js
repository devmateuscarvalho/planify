import { ArrowRight, Play, Shield, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
        <section className="gradient-bg pt-24 pb-16 overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                <TrendingUp size={16} className="mr-2" />
                                Plataforma de agendamentos e cobranças
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Sua plataforma{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                                    completa
                                </span>{' '}
                                para agendamentos e cobranças
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Transforme seu negócio com landing page personalizada, sistema de agendamentos,
                                cobranças recorrentes e gerenciamento completo. Ideal para qualquer empresa que
                                precisa organizar horários e receber pagamentos automaticamente.
                            </p>
                        </div>

                        {/* Client Types Grid */}
                        <div className="grid grid-cols-2 gap-2">
                            {businessTypes.map((type, index) => (
                                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="btn-primary inline-flex items-center justify-center group"
                            >
                                Quero saber mais
                                <ArrowRight
                                    size={20}
                                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                />
                            </button>

                            <button className="btn-secondary inline-flex items-center justify-center">
                                <Play size={20} className="mr-2" />
                                Ver demonstração
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex items-center space-x-2">
                                <Users size={20} className="text-primary-600" />
                                <span className="text-sm text-gray-600">+1000 empresas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield size={20} className="text-primary-600" />
                                <span className="text-sm text-gray-600">99.9% uptime</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image/Illustration */}
                    <div className="relative">
                        <div className="relative z-10">
                            {/* Main Card */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">A</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Agendamento</p>
                                            <p className="font-semibold text-gray-900">Consulta - 15:00</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                                        <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                                        <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <div className="text-sm text-gray-600">
                                            <p>Próximo horário</p>
                                            <p className="font-semibold text-gray-900">Disponível</p>
                                        </div>
                                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                                            <Play size={24} className="text-primary-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-12">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Online</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-12">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600">R$ 150</div>
                                    <div className="text-xs text-gray-500">por consulta</div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-primary-200/50 rounded-3xl -z-10 transform rotate-6 scale-110"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 