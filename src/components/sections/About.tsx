"use client";

import { Brain, Heart, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Sobre Mim</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sou psicóloga formada pela Universidade de São Paulo (USP) e
              especialista em Psicanálise pelo Instituto Sedes Sapientiae. Minha
              abordagem é baseada na escuta atenta e no acolhimento, criando um
              ambiente seguro para que você possa explorar seus sentimentos e
              encontrar caminhos para o bem-estar.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Acredito que cada pessoa tem sua singularidade e merece um
              atendimento personalizado. Meu objetivo é acompanhá-lo(a) nessa
              jornada de autoconhecimento e crescimento pessoal.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-secondary" />
                <span className="text-card-foreground">
                  Formação em Psicologia - USP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-secondary" />
                <span className="text-card-foreground">
                  Especialização em Psicanálise
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-card-foreground">
                  Atendimento Individual e Familiar
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-card rounded-lg p-8 border border-border">
              <Image
                src="/psicologa.png"
                alt="Dr. Ana Silva - Psicóloga"
                width={440}
                height={220}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Dr. Ana Silva
                </h3>
                <p className="text-muted-foreground">
                  Psicóloga • CRP 06/123456
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
