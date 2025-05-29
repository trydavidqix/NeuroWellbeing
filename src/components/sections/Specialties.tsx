import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaChild, FaUser, FaBrain, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const specialties = [
  {
    key: "tdah-criancas",
    icon: FaChild,
    title: "TDAH em Crianças",
    description:
      "Diagnóstico e tratamento especializado para crianças com TDAH, incluindo intervenção precoce e suporte familiar.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    path: "/especialidades/tdah-criancas",
  },
  {
    key: "tdah-adultos",
    icon: FaUser,
    title: "TDAH em Adultos",
    description:
      "Avaliação e tratamento para adultos com TDAH, focando em estratégias de adaptação e desenvolvimento pessoal.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    path: "/especialidades/tdah-adultos",
  },
  {
    key: "avaliacao-neuro",
    icon: FaBrain,
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação completa das funções cognitivas, emocionais e comportamentais para diagnóstico preciso.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    path: "/especialidades/avaliacao-neuro",
  },
  {
    key: "psicoterapia",
    icon: FaComments,
    title: "Psicoterapia",
    description:
      "Atendimento psicológico individual e em grupo, com abordagens terapêuticas modernas e eficazes.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    path: "/especialidades/psicoterapia",
  },
];

export default function Specialties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título e subtítulo
      gsap.from(".specialties-title", {
        scrollTrigger: {
          trigger: ".specialties-title",
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
    <section id="specialties" ref={sectionRef} className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="specialties-title section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nossas Especialidades
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oferecemos um atendimento especializado e personalizado em diversas
            áreas da saúde mental, com foco em TDAH e transtornos relacionados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.key}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <Link to={specialty.path}>
                <div className="relative h-48">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <specialty.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {specialty.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a href="#contact" className="btn-primary inline-flex items-center">
            Agende uma Consulta
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
