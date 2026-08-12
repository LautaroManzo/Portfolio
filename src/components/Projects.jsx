import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import SectionHeader from "./Others/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const SWIPE_THRESHOLD = 60;

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const goTo = (i) => setCurrent(((i % total) + total) % total);
  const paginate = (dir) => goTo(current + dir);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  return (
    <section
      id="proyectos"
      className="relative flex flex-col justify-center min-h-svh md:h-svh box-border border-t border-divider px-6 py-12 md:px-16 md:py-14 xl:px-20"
    >
      <div className="shrink-0 mb-10">
        <SectionHeader kicker="PROYECTOS" title="Algunas cosas que construí" />
      </div>

      {/* Alto estimado para que la card (imagen 3:2 a 640px + contenido) entre
          sin scroll interno; se ajusta con una verificación visual. */}
      <div className="relative max-w-[1080px] xl:max-w-[1240px] 2xl:max-w-[1400px] w-full mx-auto h-[780px] md:h-[400px] flex items-center gap-3 md:gap-5">
        <button
          onClick={() => paginate(-1)}
          aria-label="Proyecto anterior"
          className="w-10 h-10 shrink-0 flex items-center justify-center bg-transparent border-none text-ink-muted cursor-pointer transition-colors duration-300 hover:text-accent"
        >
          <FiChevronLeft className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" strokeWidth={1.5} />
        </button>

        {/* rounded-lg: al deslizarse, las cards quedan cortadas por este
            contenedor. Sin redondeo, el corte es una recta vertical y se lee
            como si la card perdiera sus esquinas durante la transición. */}
        <div className="relative flex-1 h-full overflow-hidden rounded-lg">
          {/* Capa de arrastre: framer-motion controla su propio transform,
              por eso el desplazamiento del track va en un div interno. */}
          <motion.div
            className="h-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
          >
            <div
              className="flex h-full transition-transform duration-[450ms] ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full shrink-0 h-full px-2.5 box-border"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Siguiente proyecto"
          className="w-10 h-10 shrink-0 flex items-center justify-center bg-transparent border-none text-ink-muted cursor-pointer transition-colors duration-300 hover:text-accent"
        >
          <FiChevronRight className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="relative shrink-0 flex justify-center gap-2 mt-6">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => goTo(i)}
            aria-label={`Ir al proyecto ${i + 1}`}
            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-colors duration-300 ${
              i === current ? "bg-accent" : "bg-[oklch(60%_0.02_60/0.35)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
