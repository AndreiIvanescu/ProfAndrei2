import { Phone, Users, MessageSquare } from "lucide-react";

export default function Contact() {
  const phoneNumber = "40770303631";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="contact-title">
            Contactează-mă
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Sunt aici să te ajut să excelezi la matematică
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-slide-up animate-delay-200">
          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border" data-testid="contact-info">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Informații de contact</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4" data-testid="contact-phone">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Telefon</p>
                  <a 
                    href={`tel:+${phoneNumber}`}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
                    data-testid="phone-link"
                  >
                    +{phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4" data-testid="contact-whatsapp">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">WhatsApp</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Mesaj preferat pentru răspuns rapid</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4" data-testid="contact-availability">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-accent" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Disponibilitate</p>
                  <p className="text-accent font-medium text-sm sm:text-base">Doar 2 locuri disponibile</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                data-testid="whatsapp-button"
              >
                <MessageSquare size={18} />
                <span>Trimite mesaj pe WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border" data-testid="contact-instructions">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Instrucțiuni pentru contact</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-muted/50 rounded-lg" data-testid="instruction-phone">
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">📞 Dacă nu răspund la telefon</h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Lăsați mesaj pe WhatsApp și vă voi contacta înapoi în cel mai scurt timp.
                </p>
              </div>
              
              <div className="p-3 sm:p-4 bg-accent/10 rounded-lg" data-testid="instruction-response">
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">⚡ Răspuns rapid</h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  WhatsApp este modalitatea preferată pentru un răspuns rapid și eficient.
                </p>
              </div>
              
              <div className="p-3 sm:p-4 bg-primary/10 rounded-lg" data-testid="instruction-ready">
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">📚 Pregătit să încep</h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Sunt pregătit să încep meditațiile imediat, cu materiale și metodologie adaptate fiecărui elev.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
