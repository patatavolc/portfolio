import nodoLabImage from "./assets/images/nodoLab.png";
import placeholderImage from "./assets/images/placeholder.png";
import tfgImage from "./assets/images/tfg.png";
import vaultImage from "./assets/images/vault.png";

export const getTechColor = (tech) => {
  const technology = tech.toLowerCase();

  //Mapeo para los colores de las etiquetas
  const colors = {
    // Backend
    nodejs: "bg-green-600",
    express: "bg-gray-600",
    java: "bg-red-700",

    // Frontend
    javascript: "bg-yellow-500 text-gray-900",
    typescript: "bg-blue-600",
    react: "bg-blue-400 text-gray-900",
    html: "bg-orange-600",
    css: "bg-blue-400",

    // Frameworks
    tailwindcss: "bg-sky-500",

    // Bases de Datos
    postgresql: "bg-blue-700",
    mysql: "bg-orange-700",
    mariadb: "bg-purple-600",
  };

  // Busca el color en el mapa, si no lo encuentra, usa un color por defecto
  return colors[technology] || "bg-gray-700";
};

export const projectsData = [
  {
    id: 1,
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    // Las tecnologías deben ser cadenas de texto exactas a las definidas en getTechColor (ej: "NodeJS", "JavaScript")
    technologies: [
      "NodeJS",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "React",
      "Tailwindcss",
    ],
    dates: "Oct 2025 - Nov 2025",
    githubUrl: "https://github.com/patatavolc/nodoLab",
    liveUrl: "#", // Si tienes un demo en vivo, ponlo aquí. Si no, usa "#"
    imageUrl: nodoLabImage,
  },

  {
    id: 2,
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    technologies: ["HTML", "CSS", "JavaScript"],
    dates: "Oct 2025",
    githubUrl: "https://github.com/CarlosDZ/Vault",
    liveUrl: "https://thevaultexperience.netlify.app",
    imageUrl: vaultImage,
  },
  {
    id: 3, // Usa el siguiente ID consecutivo
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    technologies: [
      "NodeJS",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
    ],
    dates: "Sep 2025 - Feb 2025",
    githubUrl: "https://github.com/patatavolc/tfg-peluqueria",
    liveUrl: "#",
    imageUrl: tfgImage,
  },
  {
    id: 4,
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
    technologies: ["Java", "MariaDB"],
    dates: "[Apr 2025 - May 2025]",
    githubUrl: "https://github.com/javiifu/Hosteler-a",
    liveUrl: "#",
    imageUrl: placeholderImage,
  },
];
