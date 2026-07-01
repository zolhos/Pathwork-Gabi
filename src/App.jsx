import SchemaMarkup from './components/SchemaMarkup';
import Hero from './components/Hero';
import SymptomSection from './components/SymptomSection';
import HelperRole from './components/HelperRole';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <>
      {/* GEO Structured Data Integration */}
      <SchemaMarkup />

      {/* Site Header */}
      <header className="site-header">
        <div className="container nav-container">
          <a href="#" className="logo">G.M. <span>Pathwork</span></a>
          <nav>
            <ul className="nav-menu">
              <li><a href="#hero" className="nav-link">Início</a></li>
              <li><a href="#about" className="nav-link">Sobre o Método</a></li>
              <li><a href="#helper" className="nav-link">O Helper</a></li>
              <li><a href="#contact" className="nav-link">Atendimento</a></li>
              <li><a href="#faq" className="nav-link">Dúvidas</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SymptomSection />
        <HelperRole />
        <ContactSection />
        <FAQ />
      </main>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container footer-container">
          <p>&copy; {new Date().getFullYear()} G.M. Terapia e Facilitação Pathwork. Todos os direitos reservados.</p>
          <p>Campinas - Valinhos - Vinhedo - SP</p>
        </div>
      </footer>
    </>
  );
}
