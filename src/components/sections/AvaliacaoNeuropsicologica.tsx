// components/Sections/AvaliacaoNeuro.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GiBrain } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AvaliacaoNeuro() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-20 bg-white text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/#/")}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 mt-8"
        >
          <FaArrowLeft className="mr-2" /> Voltar
        </button>

        <div className="flex items-center gap-3 mb-6">
          <GiBrain className="text-4xl text-purple-600" />
          <h2 className="text-3xl font-bold text-purple-700">
            Avaliação Neuropsicológica
          </h2>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A avaliação neuropsicológica é um processo detalhado que analisa as
          funções cognitivas, emocionais e comportamentais de uma pessoa.
          Essencial para diagnósticos precisos, ela fornece informações
          fundamentais sobre o funcionamento do cérebro em diversas situações do
          dia a dia.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Na <strong>NeuroWellbeing</strong>, utilizamos instrumentos
          reconhecidos cientificamente e conduzimos a avaliação com empatia e
          profissionalismo, garantindo um laudo claro e direcionado para o
          cuidado necessário.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Para que serve a avaliação?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Diagnóstico de TDAH, autismo, dislexia, entre outros</li>
              <li>Investigar dificuldades de memória, atenção e raciocínio</li>
              <li>Apoiar processos terapêuticos ou escolares</li>
              <li>
                Avaliar impactos de lesões cerebrais ou doenças neurológicas
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Etapas da avaliação
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Entrevista inicial com paciente e/ou responsáveis</li>
              <li>Aplicação de testes padronizados</li>
              <li>Análise detalhada dos resultados</li>
              <li>Entrega de laudo completo com devolutiva</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
