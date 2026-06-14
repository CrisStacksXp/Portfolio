import { getTechnologyIgnoreCase } from "../../util/filterTechs.js";

export class Carousel {

   constructor(data = []) {
      this.data = data;
      this.carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;
   }

   html() {

      const [techs, basePath] = this.data;

      const techsFormatted = techs
         .map(lang => ({
            techs: getTechnologyIgnoreCase(lang)
         }))
         .filter(item => item.techs);

      return /*html*/`
         <section class="simple-carousel">
            <div class="container-carousel" id="${this.carouselId}">

               ${techsFormatted.map((el) => `
                  <img
                     src="${basePath}${el.techs.icon}"
                     alt="Icon ${el.techs.name}"
                     style="
                        --theme-color: ${el.techs.color || '#8B949E'};
                        --theme-rgb: ${el.techs.rgb || '139 148 158'};
                     "
                  >
               `).join('')}

            </div>
         </section>
      `;
   }

   script() {

      const slider = document.getElementById(this.carouselId);

      if (!slider) return;

      const icons = [...slider.querySelectorAll('img')];

      if (!icons.length) return;

      let index = 0;

      const updateSlider = () => {

         icons.forEach(icon =>
            icon.classList.remove('active', 'prev')
         );

         icons[index]?.classList.add('active');

         slider.style.transform =
            `translateX(${-index * 2.5}rem)`;

         index++;

         if (index >= icons.length) {
            index = 0;
         }
      };

      updateSlider();

      this.intervalId =
         setInterval(updateSlider, 1800);
   }

   init() {

      const html = this.html();

      setTimeout(() => {
         this.script();
      }, 50);

      return html;
   }
}