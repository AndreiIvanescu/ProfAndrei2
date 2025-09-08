import { Calculator, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Calculator className="text-primary" size={20} />
            <span className="font-semibold text-base sm:text-lg">ProfAndrei</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('despre')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-despre"
            >
              Despre
            </button>
            <button 
              onClick={() => scrollToSection('rezultate')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-rezultate"
            >
              Rezultate
            </button>
            <button 
              onClick={() => scrollToSection('studii')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-studii"
            >
              Studii
            </button>
            <button 
              onClick={() => scrollToSection('metodologie')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-metodologie"
            >
              Metodologie
            </button>
            <button 
              onClick={() => scrollToSection('preturi')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-preturi"
            >
              Prețuri
            </button>
            <button 
              onClick={() => scrollToSection('testimoniale')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-testimoniale"
            >
              Testimoniale
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Desktop Contact Button */}
          <div className="hidden sm:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-accent-foreground px-3 sm:px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors flex items-center space-x-2 text-sm"
              data-testid="nav-contact-button"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">Contact</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-200 border border-border/50 hover:border-primary/30"
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? (
              <X size={22} className="text-primary" />
            ) : (
              <Menu size={22} className="text-foreground hover:text-primary transition-colors" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-card/98 backdrop-blur-md shadow-lg animate-slide-down">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('despre')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-despre"
              >
                👨‍🏫 Despre
              </button>
              <button 
                onClick={() => scrollToSection('rezultate')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-rezultate"
              >
                🏆 Rezultate
              </button>
              <button 
                onClick={() => scrollToSection('studii')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-studii"
              >
                🎓 Studii
              </button>
              <button 
                onClick={() => scrollToSection('metodologie')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-metodologie"
              >
                📚 Metodologie
              </button>
              <button 
                onClick={() => scrollToSection('preturi')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-preturi"
              >
                💰 Prețuri
              </button>
              <button 
                onClick={() => scrollToSection('testimoniale')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-testimoniale"
              >
                ⭐ Testimoniale
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 font-semibold"
                data-testid="mobile-nav-contact"
              >
                📞 Contact
              </button>
              
              <div className="pt-3 border-t border-border/30">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground px-4 py-3 rounded-lg font-semibold hover:from-accent/90 hover:to-accent transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  data-testid="mobile-nav-contact-button"
                >
                  <Phone size={18} />
                  <span>Sună acum</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target?.closest('[data-testid="navigation"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
}
