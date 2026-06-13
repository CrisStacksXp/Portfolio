class StructureJson:

    def __init__(self, github_data):
        self.github_data = github_data if github_data else {}

    def build_json(self):
        portfolio = {
            "hero": {
                "img": self.github_data.get("avatar_url"),
                "name": self.github_data.get("name"),
                "bio": self.github_data.get("bio"),
                "softSkills": [
                    {"icon": 'ph-light ph-ear', "title": 'Escuta ativa'},
                    {"icon": 'ph-light ph-user-sound', "title": 'Comunicação'},
                    {"icon": 'ph-light ph-brain', "title": 'Raciocínio lógico'},
                    {"icon": 'ph-light ph-chart-line-up', "title": 'Melhoria continua'},
                    {"icon": 'ph-light ph-handshake', "title": 'Colaboração'}
                ],
            "description": "Desenvolvedor focado em criação de site para criação de interfaces performáticas e acessíveis. Como analista de redes, utilizo raciocínio lógico para diagnosticar falhas técnicas e otimizar processos, aplicando agora essa capacidade analítica e boas práticas de código para entregar soluções de software escaláveis."
            },
            "experiences": [
                {
                    "title": "Act Digital | Março, 2026 - Atual",
                    "listResponsibilities": [
                        "Análise de funcionamento de redes",
                        "Testes remotos e solicitação de envio técnico",
                        "Documentação técnica para resolução de problemas."
                    ],
                    "listTools": ["Service Now", "Nokia", "Huawei", "Ericsson", "Ngis"]
                }
            ],
            "techs": {
                "languages": [
                    { "name": "TypeScript", "percent": 65 },
                    { "name": "JavaScript", "percent": 75 },
                    { "name": "HTML", "percent": 73 },
                    { "name": "Python", "percent": 36 },
                    { "name": "CSS", "percent": 73 },
                    { "name": "Angular", "percent": 38 },
                    { "name": "TailwindCSS", "percent": 47 },
                    { "name": "Django", "percent": 5},
                    { "name": "MySQL", "percent": 45 },
                    { "name": "PostgreSQL", "percent": 32 },
                ],
                "tools": [
                    {"name": "Linux", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
                    {"name": "Figma", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
                    {"name": "Git", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
                    {"name": "Vscode", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
                ]
            },
            "projects": [],
            
            "links": [
                {"link": "https://www.linkedin.com/in/david-cristiano", "icon": "ph-light ph-linkedin-logo"},
                {"link": "https://github.com/CrisStacksXp", "icon": "ph-light ph-github-logo"},
                {"link": "cristianodd3097@gmail.com", "icon": "ph-light ph-paper-plane-tilt"},
                {"link": "https://www.figma.com/", "icon": "ph-light ph-figma-logo"}
            ]
        }
        return portfolio