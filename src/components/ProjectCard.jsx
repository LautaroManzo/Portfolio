import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const ProjectCard = ({ title, description, image, alt, techs = [], github, demo, footer }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-accent-light border border-white/8 hover:border-primary/30 rounded-2xl shadow-xl overflow-hidden w-full h-auto sm:h-[300px] transition-colors duration-300">

      <div className="w-full h-[200px] overflow-hidden sm:w-1/2 sm:h-full">
        <img
          src={image}
          alt={alt}
          draggable="false"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="w-full flex flex-col justify-between gap-6 p-6 sm:w-1/2">

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-dark">{title}</h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>
          </div>

          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-[10px] sm:text-xs font-semibold text-primary bg-bg rounded-full border border-primary/25">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {(github || demo) && (
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 py-2 px-3 bg-transparent text-primary font-semibold text-sm rounded-lg border border-primary/50 transition-all duration-300 hover:bg-primary hover:text-bg hover:border-primary"
                >
                  <FaGithub /> Código
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 py-2 px-3 bg-transparent text-primary font-semibold text-sm rounded-lg border border-primary/50 transition-all duration-300 hover:bg-primary hover:text-bg hover:border-primary"
                >
                  <FaCirclePlay /> Demo
                </a>
              )}
            </div>
          )}
          {footer && (
            <span className="text-xs text-muted/60 italic">{footer}</span>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
