import { Graphic } from "../graphic/graphic.js";
import { getLangImage } from "../../util/getInfoLang.js";
import { Carousel } from "../carousel/carousel.js";

export class CardProject {
   constructor(data) {
      this.data = data
   }

   html() {
      const {title, img, description, languages, framework, links } = this.data;
      const pathTech = '../../../images/icon-language/';
      const pathTools = '../../../images/icon-tools/';

      return /*HTML*/`
            <article class="card">
            <div class="content-header">
               <h3>${title}</h3>
               
               ${new Carousel([framework, pathTech]).init()}
            </div>

               <div class="img-project">
                  <img src="${img}">
                  <small>Projeto em desenvolvimento</small>
               </div>
                     
               <section class="card-content">
                  <p>${description}</p>

                  ${new Graphic(languages).initLanguagesBar()}

                  
                  <div class="links">
                     ${links
                        .filter(link => link?.a && link?.icon)
                        .map(link => `
                           <a href="${link.a}">
                              <img src="${pathTools + link.icon}" alt="icon ${link.name}">
                              ${link.name || ''}
                           </a>
                        `)
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
