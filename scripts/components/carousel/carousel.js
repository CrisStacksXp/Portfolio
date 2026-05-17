import { getTechnology } from "../../util/getInfoLang.js";

export class Carousel {

   constructor(data = []) {
      this.data = data;
   }

   html() {

      const [techs, basePath] = this.data;

      const techsFormatted = techs.map((lang) => ({
         techs: getTechnology(lang)
      }));

      return /*html*/`

         <section class="simple-carousel">
            <div class="container-carousel" id="simple-slider">
               ${techsFormatted.map((el) => {
                  return `
                         <img
                           src="${basePath + el.techs?.image}"
                              alt="Icon ${el.techs?.name}"
                              style="
                                 --theme-color: ${el.techs?.color || '#8B949E'};
                                 --theme-rgb: ${el.techs?.rgb || '139 148 158'};
                           "
                        >
                     `}).join('')}
               </div>
            </section>
         `;
   }

   script() {

   const slider = document.getElementById('simple-slider');

   const icons = [...slider.querySelectorAll('img')];

   let index = 0;

   const updateSlider = () => {

      icons.forEach((icon) => {

         icon.classList.remove('active', 'prev');
      });

      const current = icons[index];

      current.classList.add('active');

      slider.style.transform = `
         translateX(${-index * 2.5}rem)
      `;

      index++;

      if (index >= icons.length) {

         index = 0;
      }
   };

   updateSlider();

   setInterval(updateSlider, 1800);
}

   init() {
      const html = this.html();

      requestAnimationFrame(() => {
         this.script();
      });

      return html;
   }
}