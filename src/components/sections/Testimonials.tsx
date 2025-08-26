"use client";

const depoimentos = [
  {
    nome: "Maria Silva",
    texto:
      "Excelente profissional! Entregou o projeto antes do prazo e com qualidade impecável.",
  },
  {
    nome: "João Santos",
    texto: "Muito atencioso e competente, recomendo de olhos fechados.",
  },
  {
    nome: "Ana Costa",
    texto: "Superou minhas expectativas, trouxe soluções criativas e eficazes.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-600 italic mb-4">{`"${item.texto}"`}</p>
              <h4 className="text-lg font-semibold text-gray-800">
                - {item.nome}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
