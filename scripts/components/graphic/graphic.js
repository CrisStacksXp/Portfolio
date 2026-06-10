import { getTechnology, getLangImage } from "../../util/getInfoLang.js";

export class Graphic {

   constructor(data = [], secondaryClass = '') {
      this.data = data;
      this.secondaryClass = secondaryClass;
   }

   htmlLanguages() {

      const languages = this.data.map(lang => (
         {
            ...lang, tech: getTechnology(lang.name)
         }));


      return /*HTML*/`
         <section class="languages-container ${this.secondaryClass}" >

            <div class="progress-bar-shell">

               <ul class="names-languages">

                  ${languages.map(lang => `
                  <li>

                     <small
                        class="lang-item"

                        style="
                           --theme-color: ${lang.tech?.color || '#8B949E'};
                           --theme-rgb: ${lang.tech?.rgb || '139 148 158'};
                        "
                     >

                        ${lang.percent}% ${lang.name}

                     </small>

                  </li>
               `).join('')}

               </ul>

               <ul class="stack-bar">

                 ${languages.map(lang => `
                  <li
                     class="bar-item"

                     style="
                        width: ${lang.percent}%;

                        --theme-color: ${lang.tech?.color || '#8B949E'};
                        --theme-rgb: ${lang.tech?.rgb || '139 148 158'};
                     "
                  ></li>
               `).join('')}

               </ul>

            </div>

         </section>
      `;
   }

   htmlBar() {

      const path = "../../../images/icon-language/";
      const tech = getTechnology(this.data.name);

      return /*HTML*/`

      <div 
         class="bar-language ${this.secondaryClass}"

         style="
            --theme-color: ${tech.color};
            --theme-rgb: ${tech.rgb};
            --percent: ${this.data.percent / 100};
         "
      >

         <div class="bar-language-header">

            <img 
               src="${path + getLangImage(this.data.name)}"
               alt="${this.data.name}"
            >

            <small>
               ${this.data.name}
            </small>

         </div>

         <div class="bar-percentage">

            <span class="bar-fill"></span>

         </div>

         <small>
            ${this.data.percent}% Afinidade
         </small>

      </div>
   `;
   }

   initLanguagesBar() {
      return this.htmlLanguages();
   }

   initBar() {
      return this.htmlBar();
   }
}