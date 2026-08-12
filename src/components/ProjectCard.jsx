import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  title,
  date,
  description,
  image,
  alt,
  techs = [],
  github,
  demo,
}) => {
  return (
    // Sombra sin derrame lateral: el spread negativo (-30) cubre la cola del
    // blur (~2σ = 32px), así no se cuela en el gutter de 10px del slide.
    //
    // Imagen izquierda / contenido derecha, como el diseño original — pero la
    // celda de imagen ya no fuerza un ancho fijo (eso la dejaba angosta y alta,
    // ≈0,88:1, chocando con cualquier screenshot real de una app web,
    // ≈1,5–2,2:1). Ahora mide aspect-[3/2] con el ALTO fijado a h-full: el
    // ancho sale solo de esa proporción, así que la celda siempre tiene la
    // forma correcta sin importar la resolución (aspect-ratio es relativo, no
    // depende de píxeles de viewport). En mobile se apila arriba y es al revés:
    // ancho fijo (w-full), alto derivado.
    <div className="h-full bg-card border border-line rounded-lg overflow-hidden shadow-[0_18px_32px_-30px_oklch(30%_0.03_60/0.45)] flex flex-col md:flex-row">

      {/* Captura. Sin imagen queda solo el fondo, sin placeholder. */}
      <div className="w-full aspect-[3/2] md:w-auto md:h-full shrink-0 overflow-hidden bg-chip">
        {image && (
          <img
            src={image}
            alt={alt}
            draggable="false"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex-1 min-w-0 px-5 py-4 md:px-7 md:py-4 flex flex-col justify-center overflow-y-auto box-border">
        {date && (
          <div className="font-mono text-xs tracking-[0.03em] text-ink-muted mb-1">
            {date}
          </div>
        )}

        <div className="font-display text-2xl font-semibold text-ink mb-1.5">
          {title}
        </div>

        <p className="text-[15px] leading-[1.45] text-ink-soft m-0 mb-2.5">
          {description}
        </p>

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2.5">
            {techs.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs tracking-[0.02em] text-ink-muted bg-chip border border-line px-3 py-[5px] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(github || demo) && (
          <div className="flex items-center gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${title} en GitHub`}
                className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full border border-line-strong text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <FaGithub size={16} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-mono text-sm font-medium text-accent no-underline hover:underline"
              >
                Ver proyecto
                {/* 22, no 14: la flecha de Feather ocupa apenas 10 de las 24
                    unidades de su viewBox, así que a size 14 quedaban 5,8px de
                    tinta contra los 15,5px del ícono de GitHub de al lado. */}
                <FiArrowUpRight size={22} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
