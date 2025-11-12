import React from "react";

/**
 * Botón reutilizable con estilo uniforme.
 * 
 * Props:
 * - href (string): destino (URL o ID de sección).
 * - external (bool): si true, abre en nueva pestaña.
 * - onClick (func): acción directa.
 * - IconComponent (componente): ícono SVG opcional.
 * - (string): texto del botón.
 */
export default function Button({ href, external, onClick, IconComponent,  text }) {
  const classes = `
    inline-flex items-center justify-center 
    px-8 py-3 m-2 
    text-lg font-semibold text-white
    rounded-xl border-2 transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    shadow-lg 
    bg-[#271e37]/70 
    border-white/30 
    hover:scale-[1.03] 
    hover:border-[#FC440F] 
    focus:ring-[#FC440F]
    shadow-xl shadow-[#FC440F]/40
  `;

  if (href && external) {
    return (
      <button onClick={() => window.open(href, "_blank")} className={classes}>
        {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
        {text}
      </button>
    );
  }

  if (href && !external) {
    return (
      <a href={href} className={classes}>
        {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
      {text}
    </button>
  );
}
