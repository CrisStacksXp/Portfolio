import { Hero } from "./scripts/_pages/hero/hero.js";
import { MoreInformation } from "./scripts/_pages/moreInformation/moreInformation.js";

// Função assíncrona para carregar os dados e inicializar o app
async function initApp() {
    try {
        // 1. Faz a requisição para o arquivo JSON gerado pelo Python
        // Certifique-se de que o portfolio.json esteja na raiz do seu servidor local
        const response = await fetch('./scripts/util/portfolio.json');
        
        // 2. Transforma a resposta em um objeto JavaScript
        const dataJson = await response.json();

        const { hero, ...allDatas } = dataJson; // Desestruturação para obter os dados

        console.info("Dados JSON carregados com sucesso:", allDatas); // Debug: Verificar os dados carregados
        new Hero(document.body, hero).init();
        new MoreInformation(document.body, allDatas).init();

    } catch (error) {
        console.error("Falha ao inicializar o portfólio:", error);
        // Opcional: injetar uma mensagem de erro amigável na tela para o usuário
    }
}

// Executa a inicialização
initApp();