import { Calculator } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calculator className="text-primary" size={20} />
          <span className="font-semibold text-lg">ProfAndrei</span>
        </div>
        <p className="text-muted-foreground mb-4" data-testid="footer-description">
          Meditații matematică - Experiență, rezultate și pasiune pentru predare
        </p>
        <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
          © 2025 ProfAndrei. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
