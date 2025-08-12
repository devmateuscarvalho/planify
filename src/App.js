import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <About />
                <Features />
                <Testimonials />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App; 