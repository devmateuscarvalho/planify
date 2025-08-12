import { Calendar, CheckCircle, Mail, MapPin, Phone, Send, Star, Target, Users } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const businessTypes = [
    { value: 'academia-estudio', label: 'Academia e Estúdio', icon: Users },
    { value: 'consultorio-clinica', label: 'Consultório e Clínica', icon: Target },
    { value: 'escola-curso', label: 'Escola e Curso', icon: Star },
    { value: 'salao-beleza', label: 'Salão de Beleza', icon: Users },
    { value: 'consultor-freelancer', label: 'Consultor e Freelancer', icon: Calendar },
    { value: 'loja-ecommerce', label: 'Loja e E-commerce', icon: Target },
    { value: 'restaurante-delivery', label: 'Restaurante e Delivery', icon: Users },
    { value: 'servico-profissional', label: 'Serviço Profissional', icon: Star },
    { value: 'evento-workshop', label: 'Evento e Workshop', icon: Calendar },
    { value: 'assinatura-recorrencia', label: 'Assinatura e Recorrência', icon: Target }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envio para API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você integraria com seu serviço de captura de leads
    console.log('Lead capturado:', data);
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset do estado após 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@plataforma.com',
      link: 'mailto:contato@plataforma.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mensagem enviada com sucesso!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Obrigado pelo seu interesse! Nossa equipe especializada entrará em contato 
              em até 24 horas para apresentar nossa plataforma de agendamentos e cobranças.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Enviar nova mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vamos conversar sobre seus agendamentos e cobranças?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para descobrir como nossa plataforma pode 
            transformar seu negócio com landing page, agendamentos e cobranças recorrentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite uma demonstração gratuita
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de negócio *
                  </label>
                  <select
                    id="business"
                    {...register('business', { required: 'Tipo de negócio é obrigatório' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                      errors.business ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    {businessTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.business && (
                    <p className="mt-1 text-sm text-red-600">{errors.business.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Conte-nos sobre seu negócio, desafios com agendamentos e cobranças, e como podemos ajudar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Solicitar demonstração
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Ao enviar este formulário, você concorda em receber comunicações 
                sobre nossos produtos e serviços.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de contato
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossa equipe especializada está pronta para ajudar você a escolher 
                o plano ideal e configurar sua plataforma em menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Types Overview */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Atendemos todos os tipos de negócio:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {businessTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <type.icon size={16} className="text-primary-500" />
                    <span>{type.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Por que escolher nossa plataforma?
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Focada em agendamentos e cobranças</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Implementação em menos de 24 horas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Suporte especializado 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Sem taxas de setup ou cancelamento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Planos personalizados ilimitados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 