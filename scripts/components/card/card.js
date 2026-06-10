import { Graphic } from "../graphic/graphic.js";
import { getLangImage } from "../../util/getInfoLang.js";
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
      console.info("links", links)

      const smallComponentClass = (framework && framework.length > 0)
         ? new Carousel([framework, pathTech]).init()
         : '';

      const filterClassLinks = ["repository-link", "figma-link", "website-link"];
      
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
                  <p>${description}</p>

                  ${new Graphic(languages).initLanguagesBar() || ''}

                  
                  <div class="links ${this.secondaryClass}">
                     ${links
                        .filter(link => link?.a && link?.icon)
                        .map((link, index) => {
                           
                           return `
                              <a href="${link.a}" class="${filterClassLinks[index]}">
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
