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
      "https://img.freepik.com/fotos-gratis/mulher-fazendo-terapia-da-fala-com-um-garotinho-loiro_23-2149110225.jpg?t=st=1748510256~exp=1748513856~hmac=923b567cf35201db76930f6a8cdef58dcb6604e3b2a07dc978e08d5e0c7ea20f&w=1380",
    path: "/especialidades/tdah-criancas",
  },
  {
    key: "tdah-adultos",
    icon: FaUser,
    title: "TDAH em Adultos",
    description:
      "Avaliação e tratamento para adultos com TDAH, focando em estratégias de adaptação e desenvolvimento pessoal.",
    image:
      "https://img.freepik.com/fotos-gratis/vista-frontal-do-psicologo-que-consulta-um-paciente_23-2148567328.jpg?t=st=1748510306~exp=1748513906~hmac=6c7ee05267be9f59d76e9e91ee1be76ad1991a59b34fb88cfcac5ade6a544bf9&w=1380",
    path: "/especialidades/tdah-adultos",
  },
  {
    key: "avaliacao-neuro",
    icon: FaBrain,
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação completa das funções cognitivas, emocionais e comportamentais para diagnóstico preciso.",
    image:
      "https://ucarecdn.com/8a46e183-09d6-4d59-a0cc-28992cab4806/-/crop/980x400/center/-/format/webp/",
    path: "/especialidades/avaliacao-neuro",
  },
  {
    key: "psicoterapia",
    icon: FaComments,
    title: "Psicoterapia",
    description:
      "Atendimento psicológico individual e em grupo, com abordagens terapêuticas modernas e eficazes.",
    image:
      "https://www.conexasaude.com.br/blog/wp-content/uploads/2020/07/psicoterapia-768x512.jpg",
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
                    className={`w-full h-full object-cover ${
                      index === 1 || index === 2 || index === 3 || index === 4 
                        ? "object-top"
                        : ""
                    }`}
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
          <Link to="/#contact" className="btn-primary inline-flex items-center">
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
