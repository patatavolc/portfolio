import React from "react";
import AnchorLink from "../AnchorLink/AnchorLink.jsx";

// SVG para 'Projects' (Enlace Externo)
const ExternalLinkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2" // Ajustado a 2 para mejor visibilidad y consistencia
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <path d="M11 13l9 -9" />
    <path d="M15 4h5v5" />
  </svg>
);

// SVG para 'Contact' (Correo/Mail)
const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2" // Ajustado a 2 para mejor visibilidad y consistencia
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);

/**
 * Contenedor de los botones principales de navegación del portafolio.
 */
export default function Buttons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start mt-8">
      {/* 1. Botón de Proyectos: Icono de Enlace Externo */}
      <AnchorLink href="#proyectos" IconComponent={ExternalLinkIcon}>
        Projects
      </AnchorLink>

      {/* 2. Botón de Contacto: Icono de Correo */}
      <AnchorLink href="#contacto" IconComponent={MailIcon}>
        Contact
      </AnchorLink>
    </div>
  );
}
