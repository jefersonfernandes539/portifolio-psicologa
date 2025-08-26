import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto text-center max-w-5xl">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-2 text-sm font-medium"
        >
          Psicóloga Clínica • Especialista em Psicanálise • CRP 06/123456
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight">
          Transformando vidas através da
          <span className="text-secondary block mt-2">
            {" "}
            escuta especializada
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Oferecendo um espaço seguro e confidencial para o seu desenvolvimento
          pessoal.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-medium"
          >
            <Calendar className="mr-3 h-5 w-5" />
            <a href="#contato"> Agendar Primeira Consulta</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg font-medium border-2 bg-transparent"
          >
            <Phone className="mr-3 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
