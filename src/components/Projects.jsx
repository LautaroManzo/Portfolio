import SectionHeader from "./Others/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="relative flex flex-col justify-center min-h-svh box-border border-t border-divider px-4 py-12 md:px-16 md:py-14 xl:px-20"
    >
      <div className="shrink-0 mb-10">
        <SectionHeader kicker="PROYECTOS" title="Algunas cosas que construí" />
      </div>

      {/* Grid en vez de carrusel: cada card mide su propio contenido (imagen
          con aspect-ratio fijo arriba, texto abajo), sin una fila de alto
          fijo a la que la imagen tenga que ajustarse — eso era lo que
          rompía el recorte en resoluciones intermedias. Nunca 2 columnas:
          con 3 proyectos, 2 columnas siempre deja el tercero solo en su
          fila, con todo ese espacio vacío al lado. Se salta directo de 1
          columna a 3 cuando hay ancho de sobra (lg). */}
      <div className="max-w-[1080px] xl:max-w-[1240px] 2xl:max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
