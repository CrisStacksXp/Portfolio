export const technologies = [

   // 🌐 Front-End Base

   {
      name: "HTML",
      color: "#E34F26",
      rgb: "227 79 38",
      image: "html.svg"
   },

   {
      name: "CSS",
      color: "#1572B6",
      rgb: "21 114 182",
      image: "css.svg"
   },

   {
      name: "SCSS",
      color: "#CC6699",
      rgb: "204 102 153",
      image: "scss.svg"
   },

   {
      name: "Sass",
      color: "#CC6699",
      rgb: "204 102 153",
      image: "sass.svg"
   },

   // ⚡ JavaScript Ecosystem

   {
      name: "JavaScript",
      color: "#F7DF1E",
      rgb: "247 223 30",
      image: "javascript.svg"
   },

   {
      name: "TypeScript",
      color: "#3178C6",
      rgb: "49 120 198",
      image: "typescript.svg"
   },

   {
      name: "NodeJS",
      color: "#339933",
      rgb: "51 153 51",
      image: "nodejs.svg"
   },

   {
      name: "Express",
      color: "#000000",
      rgb: "0 0 0",
      image: "express.svg"
   },

   // ⚛ Frameworks / Libraries

   {
      name: "React",
      color: "#61DAFB",
      rgb: "97 218 251",
      image: "react.svg"
   },

   {
      name: "NextJS",
      color: "#000000",
      rgb: "0 0 0",
      image: "nextjs.svg"
   },

   {
      name: "Vue",
      color: "#4FC08D",
      rgb: "79 192 141",
      image: "vue.svg"
   },

   {
      name: "Angular",
      color: "#DD0031",
      rgb: "221 0 49",
      image: "angular.svg"
   },

   {
      name: "Svelte",
      color: "#FF3E00",
      rgb: "255 62 0",
      image: "svelte.svg"
   },

   // 🎨 UI / Styling

   {
      name: "Tailwind",
      color: "#06B6D4",
      rgb: "6 182 212",
      image: "tailwind.svg"
   },

   {
      name: "Bootstrap",
      color: "#7952B3",
      rgb: "121 82 179",
      image: "bootstrap.svg"
   },

   {
      name: "MaterialUI",
      color: "#007FFF",
      rgb: "0 127 255",
      image: "materialui.svg"
   },

   // 🗄 Banco de Dados

   {
      name: "MongoDB",
      color: "#47A248",
      rgb: "71 162 72",
      image: "mongodb.svg"
   },

   {
      name: "PostgreSQL",
      color: "#336791",
      rgb: "51 103 145",
      image: "postgresql.svg"
   },

   {
      name: "MySQL",
      color: "#4479A1",
      rgb: "68 121 161",
      image: "mysql.svg"
   },

   {
      name: "Prisma",
      color: "#2D3748",
      rgb: "45 55 72",
      image: "prisma.svg"
   },

   // ☁ DevOps / Infra

   {
      name: "Docker",
      color: "#2496ED",
      rgb: "36 150 237",
      image: "docker.svg"
   },

   {
      name: "Git",
      color: "#F05032",
      rgb: "240 80 50",
      image: "git.svg"
   },

   {
      name: "GitHub",
      color: "#181717",
      rgb: "24 23 23",
      image: "github.svg"
   },

   {
      name: "Vercel",
      color: "#000000",
      rgb: "0 0 0",
      image: "vercel.svg"
   },

   // 🧠 Back-End

   {
      name: "Python",
      color: "#3776AB",
      rgb: "55 118 171",
      image: "python.svg"
   },

   {
      name: "Java",
      color: "#F89820",
      rgb: "248 152 32",
      image: "java.svg"
   },

   {
      name: "C",
      color: "#A8B9CC",
      rgb: "168 185 204",
      image: "c.svg"
   },

   {
      name: "C++",
      color: "#00599C",
      rgb: "0 89 156",
      image: "cpp.svg"
   },

   {
      name: "PHP",
      color: "#777BB4",
      rgb: "119 123 180",
      image: "php.svg"
   },

   // 📱 Mobile

   {
      name: "ReactNative",
      color: "#61DAFB",
      rgb: "97 218 251",
      image: "react-native.svg"
   },

   {
      name: "Flutter",
      color: "#02569B",
      rgb: "2 86 155",
      image: "flutter.svg"
   },{
      name: "Pandas",
      image: "pandas.svg"
   }
];

export const getTechnology = (name) => {
   return technologies.find(tech => tech.name === name);
};

export const getLangColor = (name) => {

   return getTechnology(name)?.color || "#8B949E";
};

export const getLangImage = (name) => {

   return getTechnology(name)?.image
      || "../../../images/icon-language/default.svg";
};
