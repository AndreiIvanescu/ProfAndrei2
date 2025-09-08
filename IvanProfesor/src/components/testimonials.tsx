import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Popescu",
    grade: "Clasa a 8-a",
    rating: 5,
    text: "Profesorul Andrei mi-a explicat matematica într-un mod foarte clar și răbdător. Am trecut de la note de 6-7 la nota 10 la Evaluarea Națională! Metodele lui sunt geniale și îți dau încredere.",
    result: "Nota 10 la Evaluarea Națională"
  },
  {
    name: "Alexandru Dumitrescu", 
    grade: "Clasa a 12-a",
    rating: 5,
    text: "Am avut probleme mari cu matematica la liceu. Domnul Andrei a reușit să mă ajute să înțeleg conceptele pe care le evitam ani întregi. La Bacalaureat am luat 9.80! Recomand cu încredere.",
    result: "Nota 9.80 la Bacalaureat"
  },
  {
    name: "Elena Răducanu",
    grade: "Părinte elev clasa a 8-a",
    rating: 5,
    text: "Fiul meu a lucrat cu profesorul Andrei pentru Evaluarea Națională. A fost o transformare incredibilă - de la anxietate și note mici, la încredere și nota 10! Un profesor dedicat și foarte competent.",
    result: "Nota 10 la Evaluarea Națională"
  },
  {
    name: "Mihai Constantinescu",
    grade: "Clasa a 12-a", 
    rating: 5,
    text: "Meditațiile cu domnul Andrei m-au ajutat enorm la pregătirea pentru admiterea la Politehnica. Explică foarte clar, are răbdare și se asigură că înțelegi cu adevărat. Am intrat la facultate cu note mari!",
    result: "Admis la Politehnica București"
  },
  {
    name: "Ioana Marinescu",
    grade: "Clasa a 11-a",
    rating: 5,
    text: "Profesor excepțional! Mi-a schimbat complet perspectiva asupra matematicii. Acum îmi place să rezolv probleme și am încredere în mine. Metodologia lui personalizată face diferența.",
    result: "Creștere de la nota 5 la nota 9"
  },
  {
    name: "Cristian Gheorghe",
    grade: "Părinte elev clasa a 12-a",
    rating: 5,
    text: "Fiica mea a lucrat cu profesorul Andrei timp de un an pentru Bacalaureat. Rezultatul: nota 10 la matematică! Este un profesor dedicat care își iubește cu adevărat meseria. Mulțumim!",
    result: "Nota 10 la Bacalaureat"
  }
];

export default function Testimonials() {
  return (
    <section id="testimoniale" className="py-12 sm:py-16 bg-muted/30" data-testid="testimonials-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="testimonials-title">
            Ce Spun Elevii și Părinții
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-subtitle">
            Mărturii reale ale succesului la Evaluarea Națională și Bacalaureat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-4 sm:p-6 rounded-xl border border-border hover-lift animate-fade-in relative"
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute top-3 right-3 text-primary/20">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed italic" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`testimonial-grade-${index}`}>
                      {testimonial.grade}
                    </p>
                  </div>
                </div>
                <div className="mt-2 inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold" data-testid={`testimonial-result-${index}`}>
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 px-4 py-2 rounded-full border border-yellow-200 dark:border-yellow-800">
            <Star className="text-yellow-500 fill-current" size={16} />
            <span className="text-sm sm:text-base font-bold text-yellow-700 dark:text-yellow-300">
              Peste 200 de elevi mulțumiți - Note de 10 garantate cu dedicare!
            </span>
            <Star className="text-yellow-500 fill-current" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}