import React from "react";

import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

import yo from "../assets/images/userPhoto.jpg";

const Principal = () => {
  return (

      <motion.div 
        className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 p-6 backdrop-blur-[3px] sm:min-h-screen"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            type: 'spring',
            stiffness: 180, // (más alto = menos rebote)
            damping: 15,    // (menos = más rebote)
        }}
      >

        <div>
            <div className="relative z-10 overflow-hidden w-64 h-80 md:w-80 md:h-96 rounded-[32px] shadow-lg">
                <img src={yo} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="Yo"/>
            </div>
        </div>

        <div className="max-w-xl text-center md:text-left space-y-6">

            <p className="text-base text-[#7a8ca0] font-normal pl-1 mb-0">
                ¡Hola! Soy
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                <span className="text-[#303e49]">Lautaro {" "}</span>
                <span className="text-[#4793AF]">Manzo</span>
            </h1>

            <p className="text-lg text-gray-700 text-[#303e49] font-medium pl-1">
                Desarrollador apasionado por la tecnología y por resolver problemas reales a través del código.
            </p>

            <p className="text-sm text-[#7a8ca0] font-normal pl-1">
                Me interesa aprender, crecer y adaptarme constantemente a nuevos desafíos.
            </p>

            <p className="text-xs text-[#7a8ca0] font-medium pl-1">
                +2 años de experiencia.
            </p>

            <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-start">

                <a
                    href="../../public/cv-lm.pdf" download
                    className="inline-flex items-center justify-center w-[70%] max-w-[360px] md:w-auto bg-[#4793AF] border-2 border-[#4793AF] text-white font-medium gap-2 px-5 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#4793AF]"
                >
                    <FaDownload /> Descargar CV
                </a>
            
                <div className="flex gap-3 mt-2 md:mt-0">

                    <a
                        href="https://github.com/LautaroManzo"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-white border-2 border border-[#4793AF] rounded-full text-[#4793AF] transition-all duration-300 hover:bg-[#4793AF] hover:text-white"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lautaro-manzo-57713a236/"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-white border-2 border border-[#4793AF] rounded-full text-[#4793AF] transition-all duration-300 hover:bg-[#4793AF] hover:text-white"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:lau_manzo12@hotmail.com"
                        className="flex items-center justify-center w-10 h-10 bg-white border-2 border border-[#4793AF] rounded-full text-[#4793AF] transition-all duration-300 hover:bg-[#4793AF] hover:text-white"
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