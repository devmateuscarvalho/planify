import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        produto: [
            { name: 'Funcionalidades', href: '#features' },
            { name: 'Preços', href: '#pricing' },
            { name: 'Demonstração', href: '#contact' },
            { name: 'Integrações', href: '#features' }
        ],
        empresa: [
            { name: 'Sobre nós', href: '#about' },
            { name: 'Blog', href: '#' },
            { name: 'Carreiras', href: '#' },
            { name: 'Imprensa', href: '#' }
        ],
        suporte: [
            { name: 'Central de ajuda', href: '#' },
            { name: 'Documentação', href: '#' },
            { name: 'Status do sistema', href: '#' },
            { name: 'Contato', href: '#contact' }
        ],
        legal: [
            { name: 'Termos de uso', href: '#' },
            { name: 'Política de privacidade', href: '#' },
            { name: 'Cookies', href: '#' },
            { name: 'LGPD', href: '#' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'YouTube', icon: Youtube, href: '#' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className="ml-3 text-2xl font-bold">Fitness Platform</span>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transformando negócios esportivos através da tecnologia.
                            Nossa plataforma SaaS oferece soluções completas para academias,
                            personal trainers e centros esportivos crescerem no digital.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary-400" />
                                <span className="text-gray-400">contato@fitnessplatform.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary-400" />
                                <span className="text-gray-400">(11) 99999-9999</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin size={18} className="text-primary-400" />
                                <span className="text-gray-400">São Paulo, SP - Brasil</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Produto</h3>
                        <ul className="space-y-2">
                            {footerLinks.produto.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Suporte</h3>
                        <ul className="space-y-2">
                            {footerLinks.suporte.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="max-w-2xl">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Fique por dentro das novidades
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Receba dicas exclusivas para seu negócio esportivo e novidades da plataforma.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Seu melhor email"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Fitness Platform. Todos os direitos reservados.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-all duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
