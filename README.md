# NeuroWellbeing - Landing Page

![Banner Clínica NeuroWellbeing](./public/20250528_1107_Banner%20Clínica%20NeuroWellbeing_remix_01jwb5qzscfb7vkpzq7n0reza6.png)

Este repositório contém o código-fonte da landing page para a Clínica NeuroWellbeing.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **GSAP** (para animações)
* **React Icons**
* **React Router DOM** (para navegação e rolagem suave para âncoras)

## Configuração e Execução Local

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/trydavidqix/NeuroWellbeing.git
    cd NeuroWellbeing
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível, como 5174 ou 5176).

## Estrutura do Projeto

A estrutura principal de diretórios e arquivos é a seguinte:

```tree
. \
├── public \
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── site.webmanifest
│   └── banner.png (coloque o banner aqui)
├── src \
│   ├── assets \
│   │   └── ... (imagens e outros assets)
│   ├── components \
│   │   ├── layout \
│   │   ├── sections \
│   │   └── ui \
│   ├── contexts \
│   ├── hooks \
│   ├── pages \
│   ├── styles \
│   │   └── index.css
│   └── utils \
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

* **public/**: Arquivos estáticos, incluindo favicons e a imagem do banner.
* **src/**: Código-fonte principal da aplicação.
* **src/components/**: Componentes reutilizáveis (layout, seções da página, UI elements).
* **src/assets/**: Imagens, fontes e outros assets.
* **src/styles/**: Arquivos CSS globais e configurações do Tailwind.
* **src/pages/**: Páginas ou visualizações principais (se aplicável).
* **src/hooks/**: Hooks personalizados.
* **src/utils/**: Funções utilitárias.
* **src/contexts/**: Contextos React para gerenciamento de estado global.

## Features Principais

* Layout responsivo para diferentes tamanhos de tela.
* Navegação suave entre as seções da página usando links de âncora e `react-router-dom`.
* Animações utilizando GSAP.
* Estrutura de componentes modular.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
