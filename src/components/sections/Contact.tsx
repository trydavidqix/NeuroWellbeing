import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Telefone",
    content: "(11) 9999-9999",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    content: "(11) 9999-9999",
  },
  {
    icon: FaEnvelope,
    title: "E-mail",
    content: "contato@neurowellbeing.com.br",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Endereço",
    content: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Form data:", formData);
    // Limpar o formulário após o envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estamos aqui para ajudar. Entre em contato conosco para agendar uma
            consulta ou tirar suas dúvidas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button type="submit" className="btn-primary w-full group">
                Enviar Mensagem
                <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-sm">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.108003001646!2d-46.65568035!3d-23.56267895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678880400000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização em São Paulo, SP"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
