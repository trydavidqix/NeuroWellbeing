import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Specialties from "./components/sections/Specialties";
import Contact from "./components/sections/Contact";

// Importar os componentes das páginas de especialidade
import TdhaC from "./components/sections/TdhaCriancas";
import TdhaA from "./components/sections/TdhaAdultos";
import An from "./components/sections/AvaliacaoNeuropsicologica";
import Psi from "./components/sections/Psicoterapia";

// Registrar o plugin ScrollTrigger do GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Hook para obter a localização atual (URL)
  const location = useLocation();

  useEffect(() => {
    // Configuração global do GSAP
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
    });

    // Forçar uma atualização do ScrollTrigger após a montagem inicial
    ScrollTrigger.refresh();
  }, []);

  // Efeito para rolar para a âncora quando a localização muda
  useEffect(() => {
    // Usa requestAnimationFrame para garantir que a rolagem ocorra após a renderização
    requestAnimationFrame(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Rola suavemente até o elemento, ajustando para o cabeçalho fixo
          const headerOffset = 80; // Altura aproximada do cabeçalho
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          // Se o elemento com a âncora não for encontrado, rola para o topo
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        // Se não houver hash, rola para o topo da página
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });

    // Forçar uma atualização do ScrollTrigger a cada mudança de rota
    ScrollTrigger.refresh();
  }, [location]); // Executa sempre que a localização (URL) mudar

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Rota para a página inicial */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Specialties />
                <Contact />
              </>
            }
          />
          {/* Rotas para as páginas de especialidade */}
          <Route path="/especialidades/tdah-criancas" element={<TdhaC />} />
          <Route path="/especialidades/tdah-adultos" element={<TdhaA />} />
          <Route path="/especialidades/avaliacao-neuro" element={<An />} />
          <Route path="/especialidades/psicoterapia" element={<Psi />} />
          {/* Adicionar rotas para outras páginas se existirem */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Componente wrapper para usar o useLocation
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
