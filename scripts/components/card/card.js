import { Graphic } from "../graphic/graphic.js";
import { Carousel } from "../carousel/carousel.js";
import { getLinkInfo } from "../../util/filterTechs.js";

export class CardProject {
   constructor(data, secondaryClass = '') {
      this.data = data
      this.secondaryClass = secondaryClass
   }

   html() {
      const { title, img, description, languages, framework, links } = this.data;
      const pathTech = '../../../images/icon-language/';
      const pathTools = '../../../images/icon-tools/';
      const pathDefault = '../../../images/default/';

      const formattedFrameworks = framework?.map(item =>
            item.trim().toLowerCase()
         ) || [];

      const smallComponentClass = (formattedFrameworks.length > 0)
         ? new Carousel([formattedFrameworks, pathTech]).init()
         : '';
         console.info(pathDefault + 'default.jpeg')
      return /*HTML*/`
            <article class="card ${this.secondaryClass}">
            <div class="content-header">
               <h3>${title}</h3>
               
               ${smallComponentClass}
            </div>

               <div class="img-project">
                  <img src="${img || pathDefault + 'default.jpeg'}">
                  <small>Projeto em desenvolvimento</small>
               </div>
                     
               <section class="card-content">
                  <p class="${this.secondaryClass}">${description}</p>

                  ${new Graphic(languages, this.secondaryClass ).initLanguagesBar() || ''}

                  <div class="links ${this.secondaryClass}">
                     ${links
                        .filter(link => link?.a && link?.icon)
                        .map((link, index) => {
                           console.info(`Processando link ${index + 1}:`, link);
                           const filterLink = getLinkInfo(link.a);
                           return `
                              <a href="${link.a}" class="${filterLink ? filterLink.class : ''}">
                                 <img src="${pathTools + filterLink.icon}" alt="Icon ${filterLink.name || 'website'}">
                                 <small>${filterLink.name}</small>
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