import { Check, Star, Calculator, Trophy } from "lucide-react";

const pricingPlans = [
  {
    title: "Meditații în Grupă",
    subtitle: "Grupe Restrânse 2-4 Copii",
    price: "50",
    currency: "LEI", 
    period: "/ oră",
    description: "Învățare în grup mic cu interacțiune și motivație reciprocă",
    icon: Trophy,
    color: "accent",
    popular: true,
    availability: "3 locuri disponibile",
    features: [
      "Grupă mică: doar 2-4 elevi",
      "Interacțiune și colaborare",
      "Preț accesibil pentru familii",
      "Motivație prin competiție sănătoasă",
      "Materiale comune și exerciții",
      "Atmosferă dinamică și prietenoasă"
    ]
  },
  {
    title: "Meditații Individuale",
    subtitle: "Atenție Personalizată",
    price: "80",
    currency: "LEI",
    period: "/ oră",
    description: "Lucru individual cu atenție completă și metodologii personalizate",
    icon: Calculator,
    color: "primary",
    popular: false,
    availability: "1 loc disponibil",
    features: [
      "Atenție 100% personalizată",
      "Ritm de învățare adaptat",
      "Materiale exclusive pentru tine",
      "Flexibilitate completă în program",
      "Suport WhatsApp între ședințe",
      "Progres rapid și eficient"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="preturi" className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-accent/5" data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="pricing-title">
            Prețuri Meditații Matematică
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="pricing-subtitle">
            Tarife transparente și accesibile pentru toate tipurile de pregătire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-card border-2 ${plan.popular ? 'border-accent shadow-lg scale-105' : 'border-border'} rounded-xl p-6 sm:p-8 hover-lift animate-fade-in`}
                style={{animationDelay: `${index * 0.2}s`}}
                data-testid={`pricing-card-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star size={14} className="fill-current" />
                      <span>CEL MAI POPULAR</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  {(plan as any).availability && (
                    <div className="mb-6">
                      <div className={`inline-flex items-center px-6 py-3 rounded-lg text-sm sm:text-base font-bold border-2 ${(plan as any).availability.includes('1 loc') ? 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800' : 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'}`}>
                        ⚡ {(plan as any).availability.toUpperCase()}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-${plan.color}/10 flex items-center justify-center`}>
                      <IconComponent className={`text-${plan.color}`} size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2" data-testid={`pricing-title-${index}`}>
                    {plan.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4" data-testid={`pricing-subtitle-${index}`}>
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-4xl sm:text-5xl font-bold text-${plan.color}`} data-testid={`pricing-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg font-semibold text-muted-foreground ml-1">
                      {plan.currency}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid={`pricing-period-${index}`}>
                    {plan.period}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed" data-testid={`pricing-description-${index}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3" data-testid={`pricing-feature-${index}-${featureIndex}`}>
                      <Check className={`text-${plan.color} mt-0.5 flex-shrink-0`} size={16} />
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'} text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base`}
                  data-testid={`pricing-button-${index}`}
                >
                  Începe Acum
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}