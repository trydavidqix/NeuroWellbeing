import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do texto
      if (textRef.current) {
        gsap.set(textRef.current.children, { y: 0, opacity: 1 });
        gsap.from(textRef.current.children, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        });
      }

      // Animação da imagem
      if (imageRef.current) {
        gsap.set(imageRef.current, { x: 0, opacity: 1, scale: 1 });
        gsap.from(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power4.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto e CTA */}
          <div ref={textRef} className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Cuidando da sua
              <span className="text-primary-600 block mt-2">Saúde Mental</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
            >
              Especialistas em TDAH e saúde mental, oferecendo atendimento
              humanizado e tratamento personalizado para crianças e adultos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/#contact" className="btn-primary group">
                Agende sua Avaliação
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/#specialties" className="btn-secondary">
                Conheça Nossas Especialidades
              </Link>
            </motion.div>
          </div>

          {/* Imagem */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Médico atendendo paciente em ambiente acolhedor"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </motion.div>
        </div>
      </div>

      {/* Elemento decorativo de fundo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
