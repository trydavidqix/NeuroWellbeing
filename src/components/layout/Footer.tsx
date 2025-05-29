import {
  FaBrain,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = {
  clínica: [
    { name: "Sobre Nós", href: "##about" },
    { name: "Especialidades", href: "##specialties" },
    { name: "Equipe", href: "##about" },
    { name: "Contato", href: "##contact" },
  ],
  serviços: [
    { name: "TDAH em Crianças", href: "#/especialidades/tdah-criancas" },
    { name: "TDAH em Adultos", href: "#/especialidades/tdah-adultos" },
    {
      name: "Avaliação Neuropsicológica",
      href: "#/especialidades/avaliacao-neuro",
    },
    { name: "Psicoterapia", href: "#/especialidades/psicoterapia" },
  ],
  legal: [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Política de Cookies", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <FaBrain className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-heading font-bold text-white">
                NeuroWellbeing
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em saúde mental, oferecendo atendimento humanizado e
              tratamento personalizado para TDAH e transtornos relacionados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Clínica</h3>
            <ul className="space-y-2">
              {footerLinks.clínica.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.serviços.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NeuroWellbeing. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Desenvolvido por{" "}
              <a href="https://github.com/trydavidqix" target="_blank">
                David William
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
