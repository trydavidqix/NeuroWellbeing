import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HashRouter as Router,  // TROCA AQUI
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

import TdhaC from "./components/sections/TdhaCriancas";
import TdhaA from "./components/sections/TdhaAdultos";
import An from "./components/sections/AvaliacaoNeuropsicologica";
import Psi from "./components/sections/Psicoterapia";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });

    ScrollTrigger.refresh();
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
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
          <Route path="/especialidades/tdah-criancas" element={<TdhaC />} />
          <Route path="/especialidades/tdah-adultos" element={<TdhaA />} />
          <Route path="/especialidades/avaliacao-neuro" element={<An />} />
          <Route path="/especialidades/psicoterapia" element={<Psi />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router> {/* Aqui usa HashRouter */}
      <App />
    </Router>
  );
}

export default AppWrapper;
