import { Star, Trophy, Award, Medal, Crown, Target } from "lucide-react";

export default function Results() {
  return (
    <section id="rezultate" className="py-12 sm:py-16 bg-muted/30" data-testid="results-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="results-title">
            Rezultate Impresionante
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="results-subtitle">
            Succesul elevilor mei vorbește despre calitatea predării
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="bg-card p-3 sm:p-6 rounded-xl border border-border text-center hover-lift animate-scale-in animate-delay-100" data-testid="stat-bac-min">
            <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">8.80</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Nota minimă la Bacalaureat</p>
          </div>
          <div className="bg-card p-3 sm:p-6 rounded-xl border border-border text-center hover-lift animate-scale-in animate-delay-200" data-testid="stat-en-min">
            <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">9.10</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Nota minimă la Evaluarea Națională</p>
          </div>
          <div className="bg-card p-3 sm:p-6 rounded-xl border border-border text-center hover-lift animate-scale-in animate-delay-300" data-testid="stat-perfect-scores">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">6</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Note de 10 în 2025</p>
          </div>
          <div className="bg-card p-3 sm:p-6 rounded-xl border border-border text-center hover-lift animate-scale-in animate-delay-400" data-testid="stat-students">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">200+</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Elevi sprijiniți</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 p-6 sm:p-8 rounded-2xl border-2 border-primary/20 shadow-lg" data-testid="performance-2025">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Performanțe 2025</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">Rezultate excepționale obținute de elevii mei</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-primary/30 text-center hover:shadow-lg transition-all duration-300" data-testid="en-performance">
              <div className="absolute -top-3 -right-3">
                <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                  EXCEPȚIONAL
                </div>
              </div>
              <div className="mb-3">
                <Medal className="text-primary mx-auto mb-2" size={32} />
                <h4 className="text-lg sm:text-xl font-bold text-primary">Evaluarea Națională</h4>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 mb-2">
                <p className="text-3xl sm:text-4xl font-black text-primary mb-1">4 ELEVI</p>
                <div className="flex items-center justify-center space-x-1">
                  <p className="text-sm sm:text-base font-bold text-primary">NOTA 10</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Performanță de elită în 2025</p>
            </div>
            
            <div className="relative bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-accent/30 text-center hover:shadow-lg transition-all duration-300" data-testid="bac-performance">
              <div className="absolute -top-3 -right-3">
                <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                  REMARCABIL
                </div>
              </div>
              <div className="mb-3">
                <Trophy className="text-accent mx-auto mb-2" size={32} />
                <h4 className="text-lg sm:text-xl font-bold text-accent">Bacalaureat</h4>
              </div>
              <div className="bg-accent/10 rounded-lg p-3 mb-2">
                <p className="text-3xl sm:text-4xl font-black text-accent mb-1">2 ELEVI</p>
                <div className="flex items-center justify-center space-x-1">
                  <p className="text-sm sm:text-base font-bold text-primary">NOTA 10</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Excelență academică în 2025</p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full border border-primary/30">
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                6 NOTE DE 10 ÎN 2025 - RECORD PERSONAL!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
