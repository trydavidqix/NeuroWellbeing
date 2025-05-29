// components/Sections/BlogTDAHAdults.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaUserTie, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogTDAHAdults() {
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
      className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Botão Voltar */}
        <button
          onClick={() => navigate("/#/")}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 mt-8"
        >
          <FaArrowLeft className="mr-2" /> Voltar
        </button>

        <div className="flex items-center gap-3 mb-6">
          <FaUserTie className="text-indigo-600 text-3xl" />
          <h2 className="text-3xl font-bold text-indigo-700">
            TDAH em Adultos
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          O TDAH não é apenas uma condição da infância — muitos adultos vivem
          com o transtorno sem saber. Os sintomas podem impactar diretamente o
          desempenho no trabalho, nas relações pessoais e na autoestima. A
          identificação correta e o tratamento adequado podem transformar a
          qualidade de vida.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Na <strong>NeuroWellbeing</strong>, oferecemos um ambiente acolhedor e
          especializado para adultos que buscam entender melhor seu
          comportamento e encontrar estratégias eficazes de adaptação e
          crescimento pessoal.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Sintomas comuns em adultos
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dificuldade em organizar tarefas e cumprir prazos</li>
              <li>Esquecimentos frequentes</li>
              <li>Desatenção em conversas ou reuniões</li>
              <li>Sentimentos de frustração ou baixa autoestima</li>
              <li>Impulsividade em decisões e falas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Como ajudamos
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Avaliação clínica e psicológica completa</li>
              <li>Terapia focada em TDAH com técnicas comportamentais</li>
              <li>Orientação sobre rotina, foco e produtividade</li>
              <li>Acompanhamento regular com profissionais especializados</li>
              <li>Autoconhecimento e fortalecimento emocional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
