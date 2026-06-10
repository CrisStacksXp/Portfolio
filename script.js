import { Hero } from "./scripts/_pages/hero/hero.js";
import { MoreInformation } from "./scripts/_pages/moreInformation/moreInformation.js";

async function initApp() {
    try {
        const response = await fetch('./scripts/util/portfolio.json');
                const dataJson = await response.json();

        const { hero, ...allDatas } = dataJson;

        console.info("Dados JSON carregados com sucesso:", allDatas);
        new Hero(document.body, hero).init();
        new MoreInformation(document.body, allDatas, 'animate-scroll-in').init();

        ativarAnimacoesScroll();

    } catch (error) {
        console.error("Falha ao inicializar o portfólio:", error);
    }
}

function ativarAnimacoesScroll() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.animate-scroll-in').forEach((elemento) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: elemento,
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1,
            }
        })
        .fromTo(elemento, 
            { opacity: 0, scale: 0.95, y: 8 }, 
            { opacity: 1, scale: 1, y: 0, duration: 2 }
        )
        .to(elemento, 
            { opacity: 0, scale: 0.95, y: -8, duration: 2 }, 
            "+=2"
        );
    });
}

initApp();