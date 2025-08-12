import { Quote, Star } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Carlos Silva',
            role: 'Proprietário da Academia Power Gym',
            business: 'Academia',
            content: 'A plataforma revolucionou completamente minha academia. Em apenas 3 meses, aumentei em 40% o número de alunos e automatizei 80% dos processos administrativos.',
            rating: 5,
            avatar: 'CS',
            results: ['+40% alunos', '80% automação']
        },
        {
            name: 'Dra. Ana Costa',
            role: 'Dentista',
            business: 'Consultório',
            content: 'Como dentista, sempre tive dificuldade para organizar horários e cobranças. Agora tudo é automático e posso focar no que realmente importa: meus pacientes.',
            rating: 5,
            avatar: 'AC',
            results: ['100% automático', 'Foco nos pacientes']
        },
        {
            name: 'Mariana Santos',
            role: 'Proprietária do Salão Beauty',
            business: 'Salão de Beleza',
            content: 'A área do cliente personalizada aumentou significativamente minhas reservas online. O sistema de agendamento é intuitivo e minhas clientes adoram a facilidade.',
            rating: 5,
            avatar: 'MS',
            results: ['+60% reservas', 'Clientes satisfeitas']
        },
        {
            name: 'Roberto Lima',
            role: 'Proprietário da Escola de Idiomas',
            business: 'Escola',
            content: 'Gerenciar turmas, pagamentos e comunicação com pais era um pesadelo. Com a plataforma, tudo ficou organizado e profissional.',
            rating: 5,
            avatar: 'RL',
            results: ['100% organizado', 'Profissional']
        },
        {
            name: 'Fernanda Alves',
            role: 'Consultora de Marketing',
            business: 'Consultoria',
            content: 'Como consultora, a plataforma me ajudou a organizar reuniões, cobranças e comunicação com clientes. Resultados impressionantes!',
            rating: 5,
            avatar: 'FA',
            results: ['Reuniões organizadas', 'Comunicação eficiente']
        },
        {
            name: 'Dr. Paulo Mendes',
            role: 'Fisioterapeuta',
            business: 'Clínica',
            content: 'A plataforma é perfeita para profissionais de saúde. Agendamento online, controle de pacotes e pagamentos automáticos. Excelente!',
            rating: 5,
            avatar: 'PM',
            results: ['Agendamento online', 'Pagamentos automáticos']
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        O que nossos clientes de diferentes segmentos dizem
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Veja como nossa plataforma está transformando negócios 
                        em todos os segmentos, gerando resultados reais.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card p-6 group hover:scale-105 transition-all duration-300">
                            {/* Business Type Badge */}
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                                    {testimonial.business}
                                </span>
                            </div>

                            {/* Quote Icon */}
                            <div className="mb-4">
                                <Quote size={24} className="text-primary-400" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Results */}
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {testimonial.results.map((result, resultIndex) => (
                                        <span
                                            key={resultIndex}
                                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium"
                                        >
                                            {result}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-3">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl font-bold mb-2">98%</div>
                            <div className="text-primary-100">Satisfação dos clientes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">40%</div>
                            <div className="text-primary-100">Aumento médio de clientes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">80%</div>
                            <div className="text-primary-100">Redução de tarefas administrativas</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">15+</div>
                            <div className="text-primary-100">Segmentos atendidos</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Faça parte dessa transformação
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Independente do seu segmento, nossa plataforma pode 
                        transformar seu negócio e gerar resultados reais.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary text-lg px-8 py-4"
                    >
                        Solicitar demonstração
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 