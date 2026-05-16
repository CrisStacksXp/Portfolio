import { Graphic } from "../graphic/graphic.js";
import { getLangImage } from "../../util/getInfoLang.js";

export class CardProject {
   constructor(data) {
      this.data = data
   }

   html() {
      const {title, img, description, languages, framework, links } = this.data;
      const path = '../../../images/icon-language/';

      return /*HTML*/`
            <article class="card ${this.ref}">
            <div class="content-header">
               <h3>${title}</h3>
               
               <div>
                  <img src="${path + getLangImage(framework[0])}">
               </div>
            </div>

               <div class="img-project">
                  <img src="${img}">
               </div>
                     
               <section class="card-content">
                  <p>${description}</p>

                  ${new Graphic(languages).initLanguagesBar()}

                     <div class="links">
                        ${links
                           .filter(link => link?.a && link?.icon)
                           .map(link => `
                              <a href="${link.a}">
                                 <img src="${link.icon}" alt="">
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
