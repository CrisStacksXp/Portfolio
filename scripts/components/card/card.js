import { Graphic } from "../graphic/graphic.js";
import { Carousel } from "../carousel/carousel.js";

export class CardProject {
   constructor(data, secondaryClass = '') {
      this.data = data
      this.secondaryClass = secondaryClass
   }

   html() {
      const {title, img, description, languages, framework, links } = this.data;
      const pathTech = '../../../images/icon-language/';
      const pathTools = '../../../images/icon-tools/';

      const formattedFrameworks = framework?.map(item =>
            item.trim().toLowerCase()
         ) || [];

         console.info('Formatted frameworks:', formattedFrameworks);

      const smallComponentClass = (formattedFrameworks.length > 0)
         ? new Carousel([formattedFrameworks, pathTech]).init()
         : '';

      const filterClassLinks = [
         {name: "Go code", class: "repository-link"},
         {name: "Go Figma", class: "figma-link"},
         {name: "Go Website", class: "website-link"}
      ]

      return /*HTML*/`
            <article class="card ${this.secondaryClass}">
            <div class="content-header">
               <h3>${title}</h3>
               
               ${smallComponentClass}
            </div>

               <div class="img-project">
                  <img src="${img}">
                  <small>Projeto em desenvolvimento</small>
               </div>
                     
               <section class="card-content">
                  <p class="${this.secondaryClass}">${description}</p>

                  ${new Graphic(languages, this.secondaryClass ).initLanguagesBar() || ''}

                  
                  <div class="links ${this.secondaryClass}">
                     ${links
                        .filter(link => link?.a && link?.icon)
                        .map((link, index) => {
                           const filterLink = filterClassLinks.find(f => f.name === link.name);
                           return `
                              <a href="${link.a}" class="${filterLink ? filterLink.class : ''}">
                                 <img src="${pathTools + link.icon}" alt="icon ${link.name || 'website'}">
                                 <small>${link.name}</small>
                              </a>
                           `;
                        })
                        .join('')
                     }
                     </div>

               </section>
            </article>
      `;
   }

   init() {
      return this.html();
   }
}
