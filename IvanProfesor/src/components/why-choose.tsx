import { GraduationCap, Brain, Heart, Users, Award, PenTool } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: GraduationCap,
      title: "Experiență Vastă",
      description: "4 ani de experiență în predare și peste 200 de elevi sprijiniți în procesul de învățare."
    },
    {
      icon: Brain,
      title: "Studii Specializate",
      description: "Studii în matematică și informatică, cu explicații clare și logice, folosind exemple și scheme vizuale."
    },
    {
      icon: Heart,
      title: "Atmosferă Prietenoasă",
      description: "Creez o atmosferă relaxată și prietenoasă, astfel încât elevul să se simtă confortabil."
    },
    {
      icon: Users,
      title: "Psihologia Copilului",
      description: "Am studiat psihologia copilului, lucru care mă ajută să mă adaptez ușor fiecărui nivel."
    },
    {
      icon: Award,
      title: "Cursuri de Specialitate",
      description: "Am urmat cursuri de specialitate pentru a preda mai bine și a mă apropia mai mult de copii."
    },
    {
      icon: PenTool,
      title: "Autor de Probleme",
      description: "Compun și public probleme de matematică în reviste de specialitate."
    }
  ];

  return (
    <section id="despre" className="py-12 sm:py-16" data-testid="why-choose-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="why-choose-title">
            De ce să mă alegeți pe mine?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="why-choose-subtitle">
            Experiența și pasiunea pentru predare fac diferența
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-4 sm:p-6 rounded-xl border border-border hover-lift animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`feature-card-${index}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="text-primary" size={18} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
