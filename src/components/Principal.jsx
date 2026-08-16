import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiDownload, FiMail, FiArrowDown } from "react-icons/fi";

import yo from "../assets/images/userPhoto.jpg";
import { useScrollY } from "../hooks/useScrollY";

// 56px de lado, la misma altura que el botón de CV: los cuatro controles del
// hero comparten fila, así que van a la misma altura en vez de quedar con una
// diferencia de 11px que se lee como descuido.
const iconBtn =
  "w-14 h-14 rounded-[4px] border-[1.5px] border-line-strong flex items-center justify-center text-ink-2 no-underline transition-colors duration-300 hover:border-accent hover:text-accent";

const Principal = () => {
  const scrollY = useScrollY();
  const arrowOpacity = Math.max(0, 1 - scrollY / 200);

  // svh (smallest viewport height): en mobile, vh se mide con la barra de URL
  // oculta, con lo cual la sección queda más alta que el área realmente visible.
  return (
    <section
      id="inicio"
      className="relative flex flex-col min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)]"
    >
      {/* Más aire en mobile (py-8, gap-10): con los mismos números ajustados
          de desktop se sentía todo compactado — kicker, foto y texto muy
          pegados entre sí. */}
      <div className="relative flex-1 min-h-0 flex items-center max-w-[1240px] xl:max-w-[1400px] 2xl:max-w-[1560px] mx-auto w-full px-4 py-8 md:px-16 md:py-6 xl:px-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-[auto_auto] gap-10 md:gap-[60px] xl:gap-[90px] items-center justify-center justify-items-center md:justify-items-start">

          {/* Foto tipo polaroid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Ancho y alto atados al alto de la ventana, no al ancho: la foto
                es el elemento más alto del hero y define el bloque entero, así
                que con medidas fijas dejaba media sección vacía en pantallas de
                1080. Los mínimos igualan los valores previos (400×440), de modo
                que en viewports de 720 no cambia nada. clamp mantiene la
                proporción original de 0,909. */}
            <div className="relative w-[260px] md:w-[clamp(400px,53vh,580px)] -rotate-3 transition-transform duration-300 hover:-rotate-1 hover:scale-[1.015]">
              {/* Cinta adhesiva */}
              <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 -rotate-2 w-[110px] h-[34px] bg-tape shadow-[var(--shadow-tape)] z-[2]" />
              <div className="bg-card-warm rounded-[4px] p-[18px] pb-[60px] shadow-[var(--shadow-float)]">
                <img
                  src={yo}
                  alt="Lautaro Manzo"
                  draggable="false"
                  className="w-full h-[280px] md:h-[clamp(440px,58vh,638px)] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="w-full text-center md:text-left"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3.5 flex-wrap mb-6 md:mb-5">
              <span className="font-mono text-xs tracking-[0.24em] font-medium text-accent">
                DESARROLLADOR .NET
              </span>
              <span className="w-1 h-1 rounded-full bg-[oklch(60%_0.02_60/0.5)]" />
              <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.05em] text-ink-muted">
                <FiMapPin size={12} /> Argentina
              </span>
            </div>

            <h1 className="font-display text-[38px] md:text-[68px] leading-[1.05] font-semibold text-ink tracking-[-0.015em] m-0 mb-7 md:mb-6">
              Lautaro <span className="text-accent-strong">Manzo</span>
            </h1>

            <p className="text-[15px] md:text-[18px] xl:text-[19px] leading-[1.75] md:leading-[1.65] text-ink-soft max-w-full md:max-w-[500px] xl:max-w-[560px] mx-auto md:mx-0 mb-9 md:mb-8">
              Arranqué en 2020 con un curso de HTML y CSS. Hace{" "}
              <strong className="text-ink">más de 4 años</strong> que trabajo en
              desarrollo. Acá abajo están mi trayectoria y los proyectos que fui
              haciendo por mi cuenta.
            </p>

            {/* flex-wrap, no md:flex-nowrap: al llegar a md (768px) el layout
                pasa a 2 columnas (foto + texto) y la columna de texto se
                angosta lo suficiente como para que "Descargar CV" + los 3
                íconos no entren en una sola línea sin nowrap — eso generaba
                overflow horizontal de página exactamente en ese breakpoint.
                Con wrap siempre permitido (no forzado), en pantallas con
                espacio de sobra sigue entrando todo en una línea igual. */}
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
              <a
                href="/Portfolio/cv-lm.pdf"
                download
                className="inline-flex items-center gap-2.5 bg-ink text-paper h-14 px-[30px] rounded-[4px] text-[18px] font-semibold no-underline whitespace-nowrap transition-colors duration-300 hover:bg-ink-2"
              >
                Descargar CV
                {/* Tamaños dispares a propósito: cada set dibuja en un viewBox
                    distinto y llena una fracción distinta de él, así que igualar
                    el atributo size deja tintas de tamaños muy diferentes.
                    Estos valores igualan la tinta en ~19px. */}
                <FiDownload size={24} />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/LautaroManzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={iconBtn}
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lautaro-manzo-57713a236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconBtn}
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="mailto:lau_manzo12@hotmail.com"
                  aria-label="Email"
                  className={iconBtn}
                >
                  <FiMail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div
        className="relative shrink-0 flex justify-center pb-6 text-ink-muted transition-opacity duration-200"
        style={{ opacity: arrowOpacity }}
        aria-hidden="true"
      >
        <FiArrowDown size={24} className="animate-float-arrow" />
      </div>
    </section>
  );
};

export default Principal;
