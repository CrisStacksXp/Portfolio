export class XpWork {

   constructor(data = []) {
      this.data = data;
   }

   createExperienceTemplate(xp) {

      const {
         title,
         listResponsibilities,
         listTools
      } = xp;

      return /*HTML*/`
         <aside class="xp-work">

            <h3>${title}</h3>
            <p>Principais responsabilidades:</p>

            <ul>
               ${listResponsibilities.map(item => `
                  <li>${item}</li>
               `).join('')}
            </ul>

               <h4>
                  <i class="ph-light ph-pencil-ruler"></i>
                  Ferramentas usadas
               </h4>

               <ul class="list-tools">
                  ${listTools.map(tool => `
                     <li>${tool}</li>
                  `).join('')}
               </ul>

         </aside>
      `;
   }

   html() {

      return this.data
         .map(xp => this.createExperienceTemplate(xp))
         .join('');
   }

   init() {
      return this.html();
   }
}