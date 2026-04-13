import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
};

const SWIPE_THRESHOLD = 50;

const Projects = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir) => {
    setCurrent(([prev]) => [(prev + dir + projects.length) % projects.length, dir]);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  return (
    <section id="projects" className="w-full px-6 py-16">

      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark flex items-center gap-6">
          Mis proyectos
          <span className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent hidden sm:block" />
        </h2>
      </div>

      <div className="w-full flex flex-col items-center gap-5">
        <div className="overflow-hidden w-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <ProjectCard {...projects[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(([prev]) => [i, i > prev ? 1 : -1])}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-5 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
