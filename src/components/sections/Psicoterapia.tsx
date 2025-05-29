// components/Sections/Psicoterapia.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaUserFriends, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Psicoterapia() {
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
          <FaUserFriends className="text-4xl text-pink-600" />
          <h2 className="text-3xl font-bold text-pink-700">Psicoterapia</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Nossa equipe oferece atendimento psicológico individual e em grupo,
          utilizando abordagens terapêuticas modernas e baseadas em evidências,
          com foco na saúde emocional e na qualidade de vida.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          O processo psicoterapêutico é personalizado para cada paciente,
          respeitando suas vivências e necessidades. A{" "}
          <strong>NeuroWellbeing</strong> acredita na escuta empática e no
          acolhimento como ferramentas fundamentais para promover mudanças reais
          e duradouras.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Modalidades de atendimento
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Psicoterapia individual para crianças, adolescentes e adultos
              </li>
              <li>
                Atendimento em grupo com foco em habilidades sociais e
                emocionais
              </li>
              <li>
                Suporte psicológico para familiares de pacientes com TDAH e
                outras condições
              </li>
              <li>Orientação parental e acompanhamento escolar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Benefícios da psicoterapia
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Redução de sintomas de ansiedade e depressão</li>
              <li>Melhora da autoestima e da autonomia emocional</li>
              <li>Desenvolvimento de habilidades de enfrentamento</li>
              <li>Fortalecimento dos vínculos afetivos e sociais</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
