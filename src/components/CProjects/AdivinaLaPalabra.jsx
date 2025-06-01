import React, { useRef } from "react";

import { motion, useInView } from 'framer-motion';

import adivinaLaPalabra from "../../assets/images/adivinaLaPalabra.png";

import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const AdivinaLaPalabra = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-auto sm:h-[300px]"
      initial={{ x: '-100%', opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 15,
      }}
    >

      <div className="w-full h-[200px] overflow-hidden sm:w-1/2 sm:h-full">
        <img
          src={adivinaLaPalabra} alt="Adiviná la palabra"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="w-full flex flex-col justify-between gap-6 p-6 sm:w-1/2">

        <div className="flex flex-col gap-4">

          <div>
            <h3 className="text-[16px] sm:text-xl font-bold text-[#303e49]">Adiviná la palabra</h3>
            <p className="text-[13px] sm:text-[16px] text-gray-700 mt-2"> Juego de adivinanza de palabras inspirado en Wordle.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[".NET Core", "PostgreSQL", "jQuery", "Bootstrap"].map((tech, i) => (
              <span key={i} className="px-3 py-1 text-[8px] sm:text-xs font-semibold text-[#4793AF] bg-[#EEF7FF] rounded">
                {tech}
              </span>
            ))}
          </div>

        </div>

        <div className="flex gap-3">

          <a
            href="https://github.com/LautaroManzo/AdivinaLaPalabra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center p-1 px-2 bg-[#4793AF] border-2 border-[#4793AF] rounded text-[13px] sm:text-[16px] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#4793AF]"
            title="Ver código"
          >
            <span className="flex items-center gap-2 whitespace-nowrap">
              <FaGithub /> Código
            </span>
          </a>

          <a
            href="https://adivinalapalabra-fnb3.onrender.com/Aleatoria"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center p-1 px-2 bg-white border-2 border-[#4793AF] rounded text-[13px] sm:text-[16px] text-[#4793AF] font-medium shadow-lg transition-all duration-300 hover:bg-[#4793AF] hover:text-white"
            title="Ver Demo"
          >
            <span className="flex items-center gap-2 whitespace-nowrap">
              <FaCirclePlay /> Demo
            </span>
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default AdivinaLaPalabra;