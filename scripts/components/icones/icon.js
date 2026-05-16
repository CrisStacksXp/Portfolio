export class Icon {

   constructor(data = []) {
      this.data = data;
   }

   htmlDescription() {

      return /*HTML*/`
         <ul class="icons-description">

            ${this.data.map((eachInfo) => {

               return `
                  <li class="icon">

                     <i class="${eachInfo.icon}"></i>

                     <small>
                        ${eachInfo.title}
                     </small>

                  </li>
               `;

            }).join('')}

         </ul>
      `;
   }

   script() {

      const icons = document.querySelectorAll('.icon');

      icons.forEach((icon) => {

         const tooltip = icon.querySelector('small');

         icon.addEventListener('mousemove', (event) => {

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            tooltip.style.left = `${mouseX}px`;
            tooltip.style.top = `${mouseY}px`;

         });

         icon.addEventListener('mouseenter', () => {
            tooltip.classList.add('active');
         });

         icon.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active');
         });

      });
   }

   init() {

      const html = this.htmlDescription();

      // espera renderizar no DOM
      requestAnimationFrame(() => {
         this.script();
      });

      return html;
   }

   initIconLink(){
      return `

      <ul class="icon-link">
         ${
            this.data.map((a)=>{
               return `
                  <li>
                     <a href="${a.link}">
                        <i class="${a.icon}"></i>
                     </a>
                  </li>
               `}).join('')
                  }
         </ul>
      `
   }
}