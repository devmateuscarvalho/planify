import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="ml-2 text-xl font-bold text-gray-900">Fitness Platform</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            Funcionalidades
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            Preços
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            Contato
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary"
                        >
                            Começar Agora
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-6 space-y-4">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="block w-full text-left text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                            >
                                Sobre
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="block w-full text-left text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                            >
                                Funcionalidades
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="block w-full text-left text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                            >
                                Preços
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                            >
                                Contato
                            </button>
                            <div className="pt-4">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="btn-primary w-full"
                                >
                                    Começar Agora
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 