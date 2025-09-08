export default function Methodology() {
  const steps = [
    {
      number: "1",
      title: "Verificarea lecției anterioare",
      description: "Începem fiecare ședință prin verificarea înțelegerii materiei predate anterior."
    },
    {
      number: "2",
      title: "Predarea lecției noi",
      description: "Explic definiții, teoreme și demonstrații folosind desene explicative și exemple concrete."
    },
    {
      number: "3",
      title: "Rezolvarea exercițiilor",
      description: "Rezolvăm împreună exerciții și probleme pentru a pune în practică teoria învățată."
    },
    {
      number: "4",
      title: "Temă pentru acasă",
      description: "La final dau temă pentru acasă pentru consolidarea cunoștințelor."
    }
  ];

  return (
    <section id="metodologie" className="py-12 sm:py-16 bg-muted/30" data-testid="methodology-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="methodology-title">
            Cum decurge o ședință?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="methodology-subtitle">
            Metodologie structurată pentru rezultate optime
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 sm:space-x-6 bg-card p-4 sm:p-6 rounded-xl border border-border hover-lift animate-slide-up"
              style={{animationDelay: `${index * 0.15}s`}}
              data-testid={`methodology-step-${index}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base sm:text-lg flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" data-testid={`step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-accent/10 border border-accent/20 rounded-xl" data-testid="methodology-adaptability">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">Adaptabilitate completă</h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Putem porni de la noțiuni de bază și ajunge la probleme complexe, în funcție de ritmul elevului.
          </p>
        </div>
      </div>
    </section>
  );
}
