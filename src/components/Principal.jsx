import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

import yo from "../assets/images/userPhoto.jpg";

const Principal = () => {
  return (
    <motion.div
      className="relative w-full flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6 py-16 sm:min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 12, mass: 1 }}
    >

      {/* Glow de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Foto */}
      <div className="relative z-10 flex-shrink-0">
        <div className="relative overflow-hidden w-60 h-72 md:w-80 md:h-96 rounded-3xl shadow-2xl ring-1 ring-primary/40 group">
          <img src={yo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Lautaro Manzo" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Texto */}
      <div className="relative z-10 max-w-2xl text-center md:text-left space-y-5">

        <p className="text-primary text-sm font-mono tracking-[0.2em] uppercase">
          ¡Hola! Soy
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-dark">Lautaro </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #7aa2f7 0%, #a9c1fa 100%)" }}
          >
            Manzo
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed">
          Desarrollador apasionado por la tecnología y por resolver problemas reales a través del código.
        </p>

        <p className="text-sm text-muted/70">
          Me interesa aprender, crecer y adaptarme constantemente a nuevos desafíos.
        </p>

        <p className="text-sm font-semibold text-primary/80 tracking-wide font-mono">
          + 3 años de experiencia
        </p>

        <div className="pt-2 flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-start">

          <a
            href="/Portfolio/cv-lm.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-bg font-semibold text-sm transition-all duration-300 hover:bg-transparent hover:text-primary border-2 border-primary shadow-sm shadow-black/20"
          >
            <FaDownload /> Descargar CV
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/LautaroManzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm hover:shadow-black/20"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lautaro-manzo-57713a236/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm hover:shadow-black/20"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:lau_manzo12@hotmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm hover:shadow-black/20"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>
      </div>

    </motion.div>
  );
};

export default Principal;
