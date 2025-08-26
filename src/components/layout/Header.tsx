import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary">
                Dra. Ana Silva
              </span>
              <p className="text-xs text-muted-foreground">
                Psicóloga • CRP 06/123456
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Contato
            </a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 font-medium">
            <a href="#contato"> Agendar Consulta</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
