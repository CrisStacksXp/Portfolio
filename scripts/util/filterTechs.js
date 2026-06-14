export const technologies = [

   // 🌐 Front-End Base

   {
      name: "HTML",
      color: "#E34F26",
      rgb: "227 79 38",
      icon: "html.svg"
   },

   {
      name: "CSS",
      color: "#1572B6",
      rgb: "21 114 182",
      icon: "css.svg"
   },

   {
      name: "SCSS",
      color: "#CC6699",
      rgb: "204 102 153",
      icon: "scss.svg"
   },

   {
      name: "Sass",
      color: "#CC6699",
      rgb: "204 102 153",
      icon: "sass.svg"
   },

   // ⚡ JavaScript Ecosystem

   {
      name: "JavaScript",
      color: "#F7DF1E",
      rgb: "247 223 30",
      icon: "javascript.svg"
   },

   {
      name: "TypeScript",
      color: "#3178C6",
      rgb: "49 120 198",
      icon: "typescript.svg"
   },

   {
      name: "NodeJS",
      color: "#339933",
      rgb: "51 153 51",
      icon: "nodejs.svg"
   },

   {
      name: "Express",
      color: "#000000",
      rgb: "0 0 0",
      icon: "express.svg"
   },

   // ⚛ Frameworks / Libraries

   {
      name: "React",
      color: "#61DAFB",
      rgb: "97 218 251",
      icon: "react.svg"
   },

   {
      name: "NextJS",
      color: "#000000",
      rgb: "0 0 0",
      icon: "nextjs.svg"
   },

   {
      name: "Vue",
      color: "#4FC08D",
      rgb: "79 192 141",
      icon: "vue.svg"
   },

   {
      name: "Angular",
      color: "#DD0031",
      rgb: "221 0 49",
      icon: "angular.svg"
   },

   {
      name: "Svelte",
      color: "#FF3E00",
      rgb: "255 62 0",
      icon: "svelte.svg"
   },
   {
      name: "Django",
      color: "#2a5f4c",
      rgb: "42 95 76",
      icon: "django.svg"
   },

   // 🎨 UI / Styling

   {
      name: "TailwindCSS",
      color: "#06B6D4",
      rgb: "6 182 212",
      icon: "tailwind.svg"
   },

   {
      name: "Bootstrap",
      color: "#7952B3",
      rgb: "121 82 179",
      icon: "bootstrap.svg"
   },

   {
      name: "MaterialUI",
      color: "#007FFF",
      rgb: "0 127 255",
      icon: "materialui.svg"
   },

   // 🗄 Banco de Dados

   {
      name: "MongoDB",
      color: "#47A248",
      rgb: "71 162 72",
      icon: "mongodb.svg"
   },

   {
      name: "PostgreSQL",
      color: "#336791",
      rgb: "51 103 145",
      icon: "postgresql.svg"
   },

   {
      name: "MySQL",
      color: "#4479A1",
      rgb: "68 121 161",
      icon: "mysql.svg"
   },

   {
      name: "Prisma",
      color: "#2D3748",
      rgb: "45 55 72",
      icon: "prisma.svg"
   },

   // ☁ DevOps / Infra

   {
      name: "Docker",
      color: "#2496ED",
      rgb: "36 150 237",
      icon: "docker.svg"
   },

   {
      name: "Git",
      color: "#F05032",
      rgb: "240 80 50",
      icon: "git.svg"
   },

   {
      name: "GitHub",
      color: "#181717",
      rgb: "24 23 23",
      icon: "github.svg"
   },

   {
      name: "Vercel",
      color: "#000000",
      rgb: "0 0 0",
      icon: "vercel.svg"
   },

   // 🧠 Back-End

   {
      name: "Python",
      color: "#3776AB",
      rgb: "55 118 171",
      icon: "python.svg"
   },

   {
      name: "Java",
      color: "#F89820",
      rgb: "248 152 32",
      icon: "java.svg"
   },

   {
      name: "C",
      color: "#A8B9CC",
      rgb: "168 185 204",
      icon: "c.svg"
   },

   {
      name: "C++",
      color: "#00599C",
      rgb: "0 89 156",
      icon: "cpp.svg"
   },

   {
      name: "PHP",
      color: "#777BB4",
      rgb: "119 123 180",
      icon: "php.svg"
   },

   // 📱 Mobile

   {
      name: "ReactNative",
      color: "#61DAFB",
      rgb: "97 218 251",
      icon: "react-native.svg"
   },

   {
      name: "Flutter",
      color: "#02569B",
      rgb: "2 86 155",
      icon: "flutter.svg"
   },
   {
      name: "Pandas",
      icon: "pandas.svg",
      color: "#150458",
      rgb: "21 4 88"
   }
];

export const getLinkInfo = (url) => {

   if(url.includes("github.com")) {
      return {
         name: "Go Code",
         icon: "github.svg",
         class: "repository-link"
      };
   }

   if(url.includes("figma.com")) {
      return {
         name: "Go Figma",
         icon: "figma.svg",
         class: "figma-link",
      };
   }

   if(url.includes("vercel.app")) {
      return {
         name: "Vercel",
         icon: "vercel.svg",
         class: "website-link-vercel"
      };
   }

   if(url.includes("netlify.app")) {
      return {
         name: "Netlify",
         icon: "netlify.svg",
         class: "website-link-netlify",
      };
   }

   return {
      name: "Link",
      icon: "link.svg",
      class: ""
   };
};

export const getTechnology = (name) => {
   return technologies.find(tech => tech.name === name) || 
   {
      name: "Desconecido",
      color: "#8B949E",
      rgb: "139 148 158",
      icon: "default.svg"
   };
};

export const getTechnologyIgnoreCase = (name) => {

   return technologies.find(
      tech =>
         tech.name.toLowerCase() ===
         String(name).trim().toLowerCase()
   );

};