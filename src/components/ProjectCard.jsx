import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProjectCard = ({
  title,
  date,
  description,
  images = [],
  alt,
  techs = [],
  github,
  demo,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // stopPropagation: la card entera tiene el hover-zoom activado por `group`,
  // y estas flechas viven encima de la imagen — sin esto, un click también
  // dispararía cualquier handler de click que tenga un ancestro (no lo hay
  // hoy, pero evita el problema si se agrega uno).
  const goPrev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  return (
    // Imagen siempre arriba, texto siempre abajo — en cualquier resolución.
    // Con aspect-ratio fijo en la imagen y alto de card automático (según su
    // contenido), no hay ninguna caja de ancho/alto peleando entre sí: cada
    // card mide lo que necesita su propio texto, y la imagen nunca se recorta
    // más de lo que marca su aspect-ratio. Esto reemplaza al carrusel
    // imagen-izquierda/texto-derecha, que forzaba una fila de alto fijo y
    // terminaba recortando la imagen mal en resoluciones intermedias.
    <motion.div
      // max-w + mx-auto solo importa en el tramo de 1 columna (debajo de lg):
      // ahí la card ocupa todo el ancho del contenedor, y con aspect-[3/2] la
      // imagen se volvía enorme. Achica la card y la centra en vez de dejarla
      // a ancho completo. En lg+ (3 columnas) el ancho ya lo define el grid,
      // así que se anula el tope.
      //
      // md:max-w-[640px]: en el tramo intermedio (tablet, ~768-1023px) el
      // tope de 480px dejaba la única card centrada con ~200px vacíos a cada
      // lado — casi la mitad del ancho sin usar. 640px aprovecha mucho mejor
      // ese espacio sin volver a 2 columnas (con 3 proyectos, 2 columnas deja
      // el tercero solo en su fila).
      className="group h-full max-w-[480px] md:max-w-[640px] mx-auto lg:max-w-none lg:mx-0 w-full bg-card border border-line rounded-lg overflow-hidden shadow-[var(--shadow-card)] flex flex-col"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Captura(s). Sin imágenes queda solo el fondo, sin placeholder. Con
          más de una, aparecen flechas al hover (mismo patrón que el resto
          del sitio: controles que no compiten por espacio hasta que se
          necesitan). Sin dots: en la práctica molestaban más de lo que
          aportaban. Sin el track-con-clones del carrusel viejo: acá alcanza
          con cambiar el índice, porque son pocas imágenes por proyecto y no
          hace falta loop infinito ni arrastre. */}
      <div className="relative w-full aspect-[3/2] shrink-0 overflow-hidden bg-chip">
        {/* mode="wait" (por defecto en versiones previas) esperaba a que la
            imagen vieja terminara de desvanecerse para recién ahí montar la
            nueva — en el medio se veía el fondo de la card. Con position
            absolute + inset-0 las dos quedan superpuestas en el mismo lugar,
            así el fade-in de la nueva ocurre en simultáneo con el fade-out
            de la vieja, sin hueco de por medio. */}
        {images.length > 0 && (
          <AnimatePresence initial={false}>
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              alt={alt}
              draggable="false"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </AnimatePresence>
        )}

        {hasMultiple && (
          <>
            {/* Franja de arriba a abajo, no un botón chico centrado: en
                mobile es mucho más fácil acertarle a "todo el borde
                izquierdo/derecho de la imagen" que a un ícono de 20px.
                drop-shadow en vez de un fondo circular: sin la píldora
                detrás, la flecha necesita algo que la separe del contenido
                de la captura debajo, sea claro u oscuro. Visible siempre en
                mobile (group-hover no es confiable con touch) y solo al
                hover en desktop (md+). */}
            <button
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="carousel-arrow absolute left-0 top-0 h-full w-12 flex items-center justify-start pl-1.5 text-ink drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] cursor-pointer bg-transparent border-none"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              aria-label="Imagen siguiente"
              className="carousel-arrow absolute right-0 top-0 h-full w-12 flex items-center justify-end pr-1.5 text-ink drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] cursor-pointer bg-transparent border-none"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Card vertical siempre (imagen arriba, texto abajo) en cualquier
          resolución: se centra todo el contenido, no solo en mobile.
          justify-evenly reparte el aire sobrante (por la card estirada a la
          altura de la más alta de su fila) en partes iguales entre todos los
          elementos, en vez de que quede un solo hueco gigante antes del
          botón. Los mb-* que quedan son un piso mínimo para cuando casi no
          sobra espacio (la descripción más larga). */}
      <div className="flex-1 min-w-0 px-6 py-5 flex flex-col justify-evenly items-center text-center">
        {/* Título y fecha como texto normal (no flex): con el título largo
            partiéndose en dos líneas, un flex con items-baseline dejaba la
            fecha flotando sola al lado de la primera línea en vez de después
            del título. Como texto en línea, la fecha simplemente sigue el
            flujo normal del párrafo. */}
        <div className="font-display text-2xl font-semibold text-ink mb-2">
          {title}
          {date && (
            <span className="font-mono text-xs tracking-[0.03em] font-normal text-ink-muted"> ({date})</span>
          )}
        </div>

        <p className="text-[15px] leading-[1.55] text-ink-soft m-0 mb-3">
          {description}
        </p>

        {techs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] md:text-xs tracking-[0.02em] text-ink-muted bg-chip border border-line px-2.5 py-1 md:px-3 md:py-[5px] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(github || demo) && (
          <div className="flex items-center justify-center gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${title} en GitHub`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-line-strong text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <FaGithub size={18} />
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
    </motion.div>
  );
};

export default ProjectCard;
