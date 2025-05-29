// components/Sections/BlogTDAHKids.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChild, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TdhaC() {
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
        {/* Botão Voltar */}
        <button
          onClick={() => navigate("/#/")}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 mt-8"
        >
          <FaArrowLeft className="mr-2" /> Voltar
        </button>

        <div className="flex items-center gap-3 mb-6">
          <FaChild className="text-pink-500 text-3xl" />
          <h2 className="text-3xl font-bold text-pink-600">TDAH em Crianças</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é uma
          condição neurológica que afeta milhões de crianças em todo o mundo. Em
          muitos casos, os primeiros sinais surgem ainda na infância, impactando
          diretamente o desempenho escolar, social e emocional da criança.
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          No consultório <strong>NeuroWellbeing</strong>, oferecemos um
          atendimento humanizado e especializado, focado no diagnóstico precoce,
          tratamento personalizado e no acompanhamento contínuo da criança e sua
          família.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Sintomas mais comuns
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dificuldade em manter a atenção</li>
              <li>Comportamento impulsivo e agitado</li>
              <li>Esquecimento frequente</li>
              <li>Dificuldade em seguir instruções</li>
              <li>Irritabilidade ou frustração fácil</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Nossa abordagem
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Entrevista detalhada com pais e responsáveis</li>
              <li>Aplicação de testes neuropsicológicos</li>
              <li>Plano de intervenção com equipe multidisciplinar</li>
              <li>Orientação familiar e escolar</li>
              <li>Revisões periódicas e acompanhamento constante</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
