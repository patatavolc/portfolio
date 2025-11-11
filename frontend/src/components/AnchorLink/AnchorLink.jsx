import React from 'react';

/**
 * * @param {string} href - El ID de la sección de destino (e.g., "#proyectos").
 * @param {string} children - El texto del botón ("Projects" o "Contact").
 * @param {React.ComponentType} IconComponent - El componente SVG o de ícono a renderizar.
 */
export default function AnchorLink({ href, children, IconComponent }) {
  
  // Clases que usan los valores directos: #271e37 (fondo) y #FC440F (acento)
  const classes = `
    inline-flex items-center justify-center 
    px-8 py-3 m-2 
    text-lg font-semibold text-white
    rounded-xl border-2 transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    shadow-lg 
    
    // Fondo oscuro con transparencia (color base del DotGrid: #271e37)
    bg-[#271e37]/70 
    border-white/30 
    
    // Efectos de interacción (Hover y Focus usando el color de acento: #FC440F)
    hover:scale-[1.03] 
    hover:border-[#FC440F] 
    focus:ring-[#FC440F]
    
    // Simulación del brillo/glow
    shadow-xl shadow-[#FC440F]/40
  `;

  return (
    <a
      href={href}
      className={classes}
    >
      {/* Renderiza el componente de ícono pasado como prop */}
      {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
      {children}
    </a>
  );
};