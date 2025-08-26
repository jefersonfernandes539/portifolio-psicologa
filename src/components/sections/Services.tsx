"use client";

const services = [
  {
    titulo: "Terapia Individual",
    descricao:
      "Sessões personalizadas para tratar ansiedade, depressão e outros desafios emocionais.",
  },
  {
    titulo: "Terapia de Casal",
    descricao:
      "Apoio para melhorar a comunicação, resolver conflitos e fortalecer relacionamentos.",
  },
  {
    titulo: "Orientação Psicológica",
    descricao:
      "Consultas para desenvolvimento pessoal, manejo do estresse e tomadas de decisão conscientes.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.titulo}
              </h3>
              <p className="text-gray-600">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
