import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaUserMd, FaHeart, FaBrain, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: FaUserMd,
    title: "Equipe Especializada",
    description:
      "Profissionais altamente qualificados e em constante atualização.",
  },
  {
    icon: FaHeart,
    title: "Atendimento Humanizado",
    description:
      "Cuidamos de cada paciente com empatia e dedicação individual.",
  },
  {
    icon: FaBrain,
    title: "Tratamento Personalizado",
    description: "Desenvolvemos planos de tratamento únicos para cada caso.",
  },
  {
    icon: FaHandshake,
    title: "Acompanhamento Contínuo",
    description:
      "Oferecemos suporte constante durante todo o processo de tratamento.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título e subtítulo
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Animação dos cards
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power4.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="about-title section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sobre a NeuroWellbeing
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos uma clínica especializada em saúde mental, com foco em TDAH e
            transtornos relacionados. Nossa missão é proporcionar um atendimento
            de excelência, combinando conhecimento técnico com acolhimento
            humanizado.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 mb-6">
                Na NeuroWellbeing, acreditamos que cada pessoa merece uma
                atenção especial e personalizada. Nosso compromisso é oferecer
                um tratamento de qualidade, baseado em evidências científicas e
                adaptado às necessidades individuais de cada paciente.
              </p>
              <p className="text-gray-600">
                Trabalhamos em conjunto com pacientes e familiares para
                desenvolver estratégias efetivas de tratamento, promovendo
                melhor qualidade de vida e bem-estar emocional.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/qiSuC4X.png"
                alt="Equipe médica em reunião"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
