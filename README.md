# 👋 Portfólio Automatizado "Sobre Mim"

>💡 Nota: Este projeto está em constante desenvolvimento! Novas funcionalidades e melhorias na estrutura podem surgir a qualquer momento.

## 🗣️ Sobre o projeto.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1572B6?style=for-the-badge&logo=javascript&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Este é um portfólio pessoal moderno e totalmente automatizado. A interface (front-end) foi construída de forma nativa e artesanal para consolidar o aprendizado de boas práticas de desenvolvimento.

O grande diferencial está no back-end: um script em Python integrado ao GitHub Actions roda periodicamente para buscar dados atualizados diretamente das APIs do GitHub e LinkedIn, atualizando o portfólio de forma 100% autônoma através de um arquivo JSON dinâmico.


## 🛠️ Funcionalidades Planejadas & Prontas

🤖 Automação Inteligente: Back-end em Python que consome as APIs do LinkedIn e GitHub, gerando um JSON que atualiza o portfólio automaticamente via GitHub Actions.

✨ Animações Fluidas: Efeitos dinâmicos de entrada e saída de componentes utilizando apenas CSS e JS puro (Vanilla).

🧩 Componentização: Arquitetura focada em reutilização de código e baixo acoplamento.

📱 Design Responsivo: Experiência de navegação agradável e adaptada para qualquer tamanho de tela.

🎨 Customização Dinâmica: Nomes, ícones e cores que mudam de forma inteligente com base no retorno dos dados do JSON.


## 🎨 Paleta de Cores

O projeto utiliza variáveis CSS para manter a consistência visual e permitir temas dinâmicos:

    🌑 Fundo Principal (--main): #20272f

    📦 Fundo dos Cards (--bg-card): #314158

    🟢 Destaque/Sotaque (--accent-emerald): #00bd95 (Corrigido o 'o' por zero)

    ⚪ Texto Principal (--text-primary): #f9f9f9

    🌈 Cores Dinâmicas: Adaptadas automaticamente conforme a tecnologia exibida.

## 💻 Como Rodar

1. Clone o repositório.
```
git clone https://github.com/CrisStacksXp/Portfolio.git
```

2. Abra o projeto:

Navegue até a pasta do projeto e abra o arquivo index.html diretamente no seu navegador de preferência.

## 💻 Estrutura do projeto(Pode sofrer alteraçõe com o desenvolvimento)


```
└── 📁 my-port
    ├── 📁 .github/              # Configurações de automação do GitHub
    │   └── 📁 workflows/
    │       └── 📄 update-data.yml  # Script de automação (Cron Job)
    ├── 📁 images/               # Assets visuais fixos do projeto
    │   ├── 📁 icon-language/    # Ícones das tecnologias (SVG)
    │   └── 📁 icon-tools/       # Ícones de ferramentas
    ├── 📁 scripts/              # Toda a lógica do Front-end
    │   ├── 📁 _pages/           # Estruturas de páginas principais
    │   │   └── 📁 hero/
    │   ├── 📁 components/       # Componentes visuais isolados (CSS/JS)
    │   │   ├── 📁 card/
    │   │   ├── 📁 carousel/
    │   │   └── 📁 graphic/
    │   └── 📁 util/             # Scripts utilitários e manipuladores de dados
    │       ├── 📄 getInfoLang.js
    │       └── 📄 json-data.js
    ├── 📄 .gitignore
    ├── 📄 index.html            # Ponto de entrada do app
    ├── 📄 script.js             # Script principal de inicialização
    └── 📄 style.css             # Estilos globais
```
