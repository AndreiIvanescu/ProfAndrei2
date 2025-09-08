import { Phone } from "lucide-react";
import { useEffect } from "react";
import profileImage from "@assets/WhatsApp Image 2025-06-14 at 18.57.18 (1)_1757331010735.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-primary/5 to-accent/5" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed animate-fade-in animate-delay-100 max-w-2xl mx-auto lg:mx-0" data-testid="hero-description">
              <strong>Profesor de matematică</strong> cu <span className="text-primary font-semibold">4 ani de experiență</span> și peste <span className="text-accent font-semibold">200 de elevi sprijiniți</span>. 
              Specializat în pregătirea pentru <em>Evaluarea Națională și Bacalaureat</em>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in animate-delay-200 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
                data-testid="hero-contact-button"
              >
                <Phone size={16} />
                <span>Programează o ședință</span>
              </button>
              <button 
                onClick={() => scrollToSection('rezultate')}
                className="border border-border px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-center text-sm sm:text-base"
                data-testid="hero-results-button"
              >
                Vezi rezultatele
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="text-center">
              <img 
                src={profileImage}
alt="Andrei Ivan - Profesor de matematică cu 4 ani experiență, specialist în pregătirea pentru Evaluarea Națională și Bacalaureat" 
                className="rounded-2xl shadow-2xl w-64 h-80 sm:w-80 sm:h-96 object-cover animate-fade-in mb-3 sm:mb-4"
                data-testid="hero-photo"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary animate-fade-in animate-delay-100" data-testid="hero-name">
                Andrei Ivan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  useEffect(() => {
    // Ensure proper spacing for mobile navigation
    const heroElement = document.querySelector('[data-testid="hero-section"]') as HTMLElement;
    if (heroElement && window.innerWidth < 768) {
      heroElement.style.paddingTop = '5rem';
    }
  }, []);
}
