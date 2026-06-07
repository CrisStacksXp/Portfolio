import { XpWork } from "../../components/experience/xpWork.js";
import { CardProject } from "../../components/card/card.js";
import { Icon } from "../../components/icones/icon.js";
import { Graphic } from "../../components/graphic/graphic.js";

export class MoreInformation {

   constructor(refTag, data = []) {
      this.refTag = refTag;
      this.data = data;
   }

   html() {

      const experiences = this.data.experiences ?? [];
      const projects = this.data.projects ?? [];
      const links = this.data.links ?? [];
      const techs = this.data.techs ?? {
         languages: [],
         tools: []
      };

      console.info('projects', projects);

      this.refTag.insertAdjacentHTML("beforeend", /*HTML*/`

         <section class="sum-about-me limit-width">

            <section class="all-xp-work" >

               <h2>
                  <i class="ph-light ph-briefcase"></i>
                  Experiência profissional
               </h2>

               <div class="xp-container" >
                  ${new XpWork(experiences).init()}
                  
               </div>

            </section>

            <section class="all-techs" >
               ${techs.languages.map((el) => {
                  return new Graphic(el).htmlBar();
               }).join('')}
            </section>

            <section class="all-projects">

               <h2>
                  <i class="ph-light ph-puzzle-piece"></i>
                  Meus projetos
               </h2>

               <div class="all-projects-wrapper">
                  ${projects.map((data)=>{
                     return new CardProject(data).init()
                  }).join('')}
               </div>
               

            </section>

            <div class="social-midia">
                  ${new Icon(links).initIconLink()}
                  
            </div>

         </section>
      `);
   }

   script() {}

   init() {

      this.html();

      requestAnimationFrame(() => {
         this.script();
      });

   }
}

