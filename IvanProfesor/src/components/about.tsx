import { CheckCircle } from "lucide-react";

export default function About() {
  const qualities = [
    "Sunt o persoană calmă și răbdătoare, care explică pas cu pas și face materia ușor de înțeles.",
    "Știu să adaptez limbajul și ritmul de predare în funcție de copil, pentru ca fiecare să înțeleagă materia pe înțelesul său.",
    "Îmi place să îi ajut pe copii să descopere logica din spatele formulelor și să capete încredere în forțele proprii.",
    "Compun și public probleme de matematică în reviste de specialitate, fiind mereu la curent cu noutățile din domeniu."
  ];

  return (
    <section className="py-12 sm:py-16" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Profesor predând matematică" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left" data-testid="about-title">
              Despre mine
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
              {qualities.map((quality, index) => (
                <p key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}} data-testid={`about-quality-${index}`}>
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>{quality}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
