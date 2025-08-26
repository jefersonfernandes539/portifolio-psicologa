import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-primary">
              Dra. Ana Silva
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">
              Psicóloga • CRP 06/123456
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dra. Ana Silva. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
