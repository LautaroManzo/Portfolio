import { FaGithub, FaCode } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const ProjectCard = ({ title, description, image, alt, techs = [], github, demo, footer, objectPosition = "top" }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-accent-light border border-white/8 hover:border-primary/30 rounded-2xl shadow-xl overflow-hidden w-full h-full transition-colors duration-300">

      <div className="w-full h-[200px] shrink-0 overflow-hidden sm:w-2/5 sm:h-full">
        {image ? (
          <img
            src={image}
            alt={alt}
            draggable="false"
            className={`w-full h-full object-cover object-${objectPosition} transition-transform duration-500 hover:scale-105`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/20 via-primary/8 to-accent-light">
            <FaCode className="text-dark/60 text-2xl" />
            <span className="text-sm text-dark/80 font-mono tracking-[0.3em] uppercase">Próximamente</span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-6 p-6 sm:w-3/5 flex-1 min-h-0">

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
            <div className="flex gap-3 sm:flex-none sm:w-auto w-full">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center sm:w-9 sm:h-9 sm:rounded-full rounded-full border border-primary/50 text-muted transition-all duration-300 hover:border-primary hover:text-primary sm:flex-none flex-[3] py-2"
                >
                  <FaGithub />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-primary text-bg font-semibold text-sm border-2 border-primary transition-all duration-300 hover:bg-transparent hover:text-primary sm:flex-none flex-[7]"
                >
                  <FaCirclePlay /> Ver demo
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
