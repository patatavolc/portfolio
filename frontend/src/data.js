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
    react: "bg-cyan text-gray-900",
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
    title: "nodoLab",
    description: "[Web Application for a coworking",
    // Las tecnologías deben ser cadenas de texto exactas a las definidas en getTechColor (ej: "NodeJS", "JavaScript")
    technologies: [
      "NodeJS",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "React",
      "Tailwindcss",
    ],
    dates: "[Oct 2025 - Nov 2025",
    githubUrl: "https://github.com/patatavolc/nodoLab",
    liveUrl: "#", // Si tienes un demo en vivo, ponlo aquí. Si no, usa "#"
    imageUrl: nodoLabImage,
  },
  {
    id: 2,
    title: "Hostelería",
    description: "TPV for a restaurant",
    technologies: ["Java", "MariaDB"],
    dates: "[Apr 2025 - May 2025]",
    githubUrl: "https://github.com/javiifu/Hosteler-a",
    liveUrl: "#",
    imageUrl: placeholderImage,
  },
  {
    id: 3,
    title: "Vault",
    description: "[A web for a techno club like Blackworks (for class)]",
    technologies: ["HTML", "CSS", "JavaScript"],
    dates: "[Oct 2025]",
    githubUrl: "https://github.com/CarlosDZ/Vault",
    liveUrl: "#",
    imageUrl: vaultImage,
  },
  {
    id: 4, // Usa el siguiente ID consecutivo
    title: "TFG: App Peluquería",
    description:
      "A management and booking application for hair salons, developed as a Final Degree Project. It includes an authentication system, service administration, appointment management, invoice handling, inventory, and more.",
    technologies: [
      "NodeJS",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "HTML",
      "CSS",
      "REACT",
    ],
    dates: "Sep 2025 - Feb 2025",
    githubUrl: "https://github.com/patatavolc/tfg-peluqueria",
    liveUrl: "#",
    imageUrl: tfgImage,
  },
];
