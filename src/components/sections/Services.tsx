"use client";

const servicos = [
  {
    titulo: "Desenvolvimento Web",
    descricao: "Criação de sites modernos, responsivos e otimizados.",
  },
  {
    titulo: "Aplicações Fullstack",
    descricao: "Do backend ao frontend, soluções completas e escaláveis.",
  },
  {
    titulo: "Integrações",
    descricao: "Integração com APIs e sistemas externos de forma eficiente.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
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
