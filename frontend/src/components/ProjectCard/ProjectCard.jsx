import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getTechIcon } from "../../utils/techIcons";
import { getTechColor } from "../../data"; // Importamos la función de color

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  // Desestructuramos los datos del proyecto
  const {
    titleKey,
    descriptionKey,
    technologies,
    dates,
    githubUrl,
    liveUrl,
    imageUrl,
  } = project;

  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <article className="w-full h-full p-6 rounded-lg bg-[#1f1b2a] shadow-lg flex flex-col">
      {/* 1. Contenedor del Mockup/Imagen (Renderizado condicional) */}
      {imageUrl && (
        <div className="w-full mb-4 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
          <img
            src={imageUrl}
            alt={`Captura de ${title}`}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* 2. Título y Enlaces */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
        <div className="flex space-x-3 text-xl text-gray-400">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title={t("projects.viewGithub")}
            >
              <FaGithub />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title={t("projects.viewLive")}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      {/* 3. Etiquetas de Tecnología */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => {
          const Icon = getTechIcon(tech);
          const colorClass = getTechColor(tech); // tu función existente para clases de color
          return (
            <span
              key={`${tech}-${index}`}
              className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full ${colorClass} shadow-md gap-2`}
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-white" aria-hidden="true" />
              ) : null}
              <span className="capitalize">{tech}</span>
            </span>
          );
        })}
      </div>

      {/* 4. Descripción */}
      {/* flex-grow para que la descripción ocupe el espacio restante si hay alturas variables */}
      <p className="text-sm leading-relaxed mb-4 text-gray-300 grow">
        {description}
      </p>

      {/* 5. Fechas (Separador) */}
      <div className="pt-3 border-t border-gray-700 text-xs text-gray-500 mt-auto">
        {dates}
      </div>
    </article>
  );
};

export default ProjectCard;
