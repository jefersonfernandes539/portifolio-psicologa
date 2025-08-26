"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Estou aqui para ajudá-lo(a). Entre em contato para agendar sua
            consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  Telefone
                </h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
                <p className="text-sm text-muted-foreground">
                  WhatsApp disponível
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  E-mail
                </h3>
                <p className="text-muted-foreground">
                  contato@draanasilva.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground">
                  Rua das Flores, 123 - Sala 45
                  <br />
                  Vila Madalena, São Paulo - SP
                  <br />
                  CEP: 05435-000
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">
                Horários de Atendimento
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Agende sua Consulta
              </CardTitle>
              <CardDescription>
                Preencha o formulário e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-card-foreground">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Conte-me um pouco sobre o que você gostaria de trabalhar..."
                />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
