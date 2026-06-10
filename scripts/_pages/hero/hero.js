import { Icon } from "../../components/icones/icon.js";

export class Hero {

   constructor(refTag, data = [], secondaryClass = '') {
      this.refTag = refTag;
      this.data = data;
      this.secondaryClass = secondaryClass;
   }

   html() {

      const {img, name, bio, description, softSkills} = this.data;

      this.refTag.insertAdjacentHTML("beforeend", /*HTML*/`

         <main class="hero limit-width">

            <div class="img">
               <img src="${img}" alt="">
            </div>

            <section>

            <div id="ref-name-bio">
               <small class="sora">
                  Olá eu sou
               </small>

               <h1>${name}</h1>

               <h2>${bio}</h2>
            </div>

               <p>${description}</p>

               <div id="ref-soft-skills">
                  ${new Icon(softSkills).init()}
               </div>

            </section>

         </main>
      `);
   }

   init() {
      this.html();
   }
}